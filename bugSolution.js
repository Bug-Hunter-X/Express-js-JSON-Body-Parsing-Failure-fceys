const express = require('express');
const app = express();
app.use(express.json()); // Ensure this is before any routes that expect JSON
app.post('/user', (req, res) => {
  console.log(req.body); // req.body should now contain the JSON data
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});