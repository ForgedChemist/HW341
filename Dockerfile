# Use Node.js official image from Docker Hub
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json first
COPY package*.json ./

# Install dependencies inside Docker
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port
EXPOSE 3000

# Run the application
CMD ["node", "index.js"]
