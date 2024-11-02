import React from "react";

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Sidebar */}
      <div className="flex flex-row">
        <aside className="w-64 bg-white h-screen shadow-md p-6">
          <div className="text-xl font-semibold mb-4">Dashboard</div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              User Management
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Voting & Ballots
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Campaigns
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">Voting & Ballots</h1>
            <div className="flex items-center">
              <span className="mr-4 text-gray-600">Welcome, User</span>
              <button className="p-2 rounded-full bg-gray-200">
                <i className="fas fa-user text-gray-600"></i>
              </button>
            </div>
          </header>

          {/* Cards Section */}
          <section className="grid grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Create</h2>
              <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                New Poll
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md">
                View Polls
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Polls Info</h2>
              <div className="flex space-x-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-500">04</p>
                  <p className="text-gray-500">Active</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-500">22</p>
                  <p className="text-gray-500">Pending</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-500">06</p>
                  <p className="text-gray-500">Closed</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Announcement</h2>
              <p className="text-gray-600">
                Latest news and updates about ongoing polls.
              </p>
            </div>
          </section>

          {/* Recent Polls Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Polls</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Poll Title 1</h3>
                <p className="text-sm text-gray-600">
                  Some description about this poll.
                </p>
                <p className="text-xs text-gray-400 mt-2">Date: 2023-01-01</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Poll Title 2</h3>
                <p className="text-sm text-gray-600">
                  Description of the second poll.
                </p>
                <p className="text-xs text-gray-400 mt-2">Date: 2023-01-02</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">Poll Title 3</h3>
                <p className="text-sm text-gray-600">
                  Details of the third poll.
                </p>
                <p className="text-xs text-gray-400 mt-2">Date: 2023-01-03</p>
              </div>
            </div>
          </section>

          {/* User Stats Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">User Stats</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <p className="text-2xl font-bold text-blue-500">12</p>
                <p className="text-gray-500">Total Users</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <p className="text-2xl font-bold text-yellow-500">26</p>
                <p className="text-gray-500">Active Polls</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md text-center">
                <p className="text-2xl font-bold text-red-500">41</p>
                <p className="text-gray-500">Total Votes</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
