import { runHandler } from './js/handler'
import { runValidator } from './js/validator'

import './styles/amazing.scss'
import './styles/amazing.ttf'
import './styles/amazing-16x16.png'
import './styles/amazing-32x32.png'

//console.log(checkForName);
alert("Our Express server is running!")

/* Client side POST Route add entry to endpoint
const addToEndpoint = async (url='', data = {}) => {    
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}; */

/* Client side GET Route - Async fetch from endpoint
const updateUI = async () => {
    const req = await fetch('/add-entry');
    try {
        const appData = await req.json();
        // dynamically fetches data generated by users and weather api from endpoint and dynamcially updates UI.
        document.getElementById('date').innerHTML = "The date today is: " + appData.datum;
        document.getElementById('temp').innerHTML = "The temperature is: " + appData.tempum + "°C";
        document.getElementById('content').innerHTML = "You're feeling: '" + appData.feeling + "' today!";
    } catch (error) {
        console.log("error", error);
    }
}; */

export { runHandler, runValidator }