# Cybershiled Guardian

Cybershiled Guardian is a full-stack cybersecurity tool with multiple features including vulnerability scanning, password strength checking, security news feed, and firewall rules viewer.

## Project Structure

- `backend/`: Node.js Express backend API
- `frontend/`: React frontend application

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```
   cd cybershiled-guardian/backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm start
   ```
   The backend server will run on port 5000 by default.

### Frontend

1. Navigate to the frontend directory:
   ```
   cd cybershiled-guardian/frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend development server:
   ```
   npm start
   ```
   The frontend will run on port 3000 by default and proxy API requests to the backend.

## Usage

- Open your browser and go to `http://localhost:3000`
- Use the password strength checker and other features (to be implemented).

## GitHub

To push this project to your GitHub repository:

1. Initialize git in the project root:
   ```
   git init
   ```
2. Add all files:
   ```
   git add .
   ```
3. Commit the files:
   ```
   git commit -m "Initial commit of Cybershiled Guardian"
   ```
4. Add your GitHub remote repository:
   ```
   git remote add origin https://github.com/yourusername/cybershiled-guardian.git
   ```
5. Push to GitHub:
   ```
   git push -u origin main
   ```

Replace `yourusername` with your GitHub username.

## Future Features

- Vulnerability scanning
- Security news feed integration
- Firewall rules viewer

Contributions and suggestions are welcome!
