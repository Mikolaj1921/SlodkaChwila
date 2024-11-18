const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:3000", // Dostosuj do adresu front-endu
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};

module.exports = cors(corsOptions);
 
