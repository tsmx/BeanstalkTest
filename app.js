const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ info: "Hello world from BeanstalkTest!", version: "1.3" });
});

app.listen(process.env.PORT || 3000);