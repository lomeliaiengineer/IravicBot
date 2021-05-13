require('dotenv').config();
const express = require('express');
const ngrok = require('ngrok');

const port = process.env.PORT || 3000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const app = express();

app.use('/dialogflow', require('./src/routes/dialogflowRoute'));

app.listen(port, async () => {
	const url = await ngrok.connect(port);
	console.log(`Server is running at port ${port}`);
	console.log(url + '/dialogflow');
});
