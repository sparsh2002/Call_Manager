const axios = require('axios');

// Set your Zoom API key and secret
const apiKey = 'YOUR_API_KEY';
const apiSecret = 'YOUR_API_SECRET';

// Set the user ID for which you want to retrieve the call logs
const userId = 'USER_ID';

// Set the start and end dates for which you want to retrieve the call logs (in yyyy-mm-dd format)
const startDate = '2022-01-01';
const endDate = '2022-03-31';

// Set the URL for the call log API endpoint
const url = `https://api.zoom.us/v2/users/${userId}/report/call_logs?from=${startDate}&to=${endDate}`;

// Set the authorization header with your Zoom API key and secret
const authHeader = {
  'Authorization': `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`
};


async function getCallLogsForAUser(){
    // Send the HTTP GET request to the Zoom API to retrieve the call logs
    await axios.get(url, { headers: authHeader })
    .then(response => {
    // Handle the response from the Zoom API here
    console.log(response.data);
    })
    .catch(error => {
    // Handle any errors that occur during the API call here
    console.error(error);
    });
}

module.exports = {getCallLogsForAUser}
