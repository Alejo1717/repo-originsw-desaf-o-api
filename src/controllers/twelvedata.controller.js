const twelvedataController = {};
const axios = require("axios");
const db = require("../database");
const User = db.users;

twelvedataController.getAccionData = async (req, res) => {
    try {
       const data = await axios.get(`https://api.twelvedata.com/stocks?symbol=${req.body.symbol}&source=docs`);
       console.log(data.data.data)
       if (data.data.status === 'ok') {
        res.status(200).json(data.data.data);
       } else {
        res.status(404).json([]);
       }
    }
    catch (err) {
        console.error("GG", err);

    };
}

twelvedataController.getAutocomplete = async (req, res) => {
    try {
       const data = await axios.get(`https://api.twelvedata.com/stocks?source=docs&exchange=NYSE`);
       console.log(data.data.data)
       if (data.data.status === 'ok') {
        res.status(200).json(data.data.data);
       } else {
        res.status(404).json([]);
       }
    }
    catch (err) {
        console.error("GG", err);

    };
}

twelvedataController.getQuotation = async (req, res) => {
    console.log(req.body)
    console.log(`https://api.twelvedata.com/time_series?symbol=${req.body.symbol}&interval=${req.body.interval}&start_date=${req.body.end_date}&end_date=${req.body.start_date}&apikey=${process.env.API_KEY_TWD}`)
    try {
       const data = await axios.get(`https://api.twelvedata.com/time_series?symbol=${req.body.symbol}&interval=${req.body.interval}&start_date=${req.body.start_date}&end_date=${req.body.end_date}&apikey=${process.env.API_KEY_TWD}`);
   console.log(data)
       if (data.data.status === 'ok') {
        res.status(200).json(data.data);
       } else {
        res.status(404).json([]);
       }
    }
    catch (err) {
        console.error("GG", err);

    };
}

module.exports = twelvedataController;