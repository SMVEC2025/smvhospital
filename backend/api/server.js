import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

// Export the Express app to work as a serverless function on Vercel
export default (req, res) => {
  app(req, res);
};
