const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Adres frontendowego serwera React
  methods: ['GET', 'POST'],
};

module.exports = cors(corsOptions);
