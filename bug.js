const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  // Accessing the user ID from the request parameters
  const userId = req.params.id;

  // Simulate fetching user data from a database
  const user = users.find(user => user.id === userId);

  // Handle the case where the user is not found
  if (!user) {
    // Instead of sending a 404 status code directly, we are sending a 200 status code with an error message.
    return res.status(200).json({ error: 'User not found' });
  }

  res.json(user);
});

const users = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Doe' },
];
app.listen(3000, () => console.log('Server listening on port 3000'));