const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('rb.html'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/rb.html');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
