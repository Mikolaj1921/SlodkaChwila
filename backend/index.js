 
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactRoute = require("./routes/contact");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/send", contactRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server działa na porcie ${PORT}`));
