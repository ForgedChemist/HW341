const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./polls.db', (err) => {
  if (err) {
    console.error('Database error: ' + err.message);
  } else {
    console.log('Connected to SQLite database');
    
    db.run(`
      CREATE TABLE IF NOT EXISTS polls (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS poll_options (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        poll_id INTEGER,
        option_text TEXT,
        FOREIGN KEY (poll_id) REFERENCES polls(id)
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS votes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        poll_option_id INTEGER,
        FOREIGN KEY (poll_option_id) REFERENCES poll_options(id)
      )
    `);
  }
});

// Create a new poll
app.post('/polls', (req, res) => {
  console.log('Received POST request to /polls');
  const { title, description, options } = req.body;
  console.log('Request body:', req.body);
  
  db.run('INSERT INTO polls (title, description) VALUES (?, ?)', [title, description], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const pollId = this.lastID;
    const placeholders = options.map(() => '(?, ?)').join(',');
    const values = options.flatMap(option => [pollId, option]);

    db.run(`INSERT INTO poll_options (poll_id, option_text) VALUES ${placeholders}`, values, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ pollId });
    });
  });
});

// Get a poll with options
app.get('/polls/:id', (req, res) => {
  const pollId = req.params.id;

  db.get('SELECT * FROM polls WHERE id = ?', [pollId], (err, poll) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!poll) {
      return res.status(404).json({ error: 'Poll not found' });
    }

    db.all('SELECT * FROM poll_options WHERE poll_id = ?', [pollId], (err, options) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ poll, options });
    });
  });
});

// Submit a vote
app.post('/polls/:id/vote', (req, res) => {
  const { optionId } = req.body;
  
  db.run('INSERT INTO votes (poll_option_id) VALUES (?)', [optionId], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Vote submitted' });
  });
});

// Get poll results
app.get('/polls/:id/results', (req, res) => {
  const pollId = req.params.id;

  db.all(`
    SELECT poll_options.option_text, COUNT(votes.id) as vote_count
    FROM poll_options
    LEFT JOIN votes ON poll_options.id = votes.poll_option_id
    WHERE poll_options.poll_id = ?
    GROUP BY poll_options.id
  `, [pollId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
