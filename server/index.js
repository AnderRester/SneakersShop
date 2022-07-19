require('dotenv').config();
const express = require("express");
const sequelize = require("./db");
const models =require("./models/models");
const cors = require("cors");
const router = require("./routes/index")

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// app.get('/', (req, res) => {
//     res.status(200).json({message: "All systems online."})
// })

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Alive on the port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start();
