"use strict";

//require("dotenv").config();
//const API_KEY = process.env.API_KEY;

/*
const API_KEY = "<IN DOT ENV>";

const drawMap = () => {
    google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': API_KEY
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Vote'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.querySelector('.map-detail'));

        chart.draw(data, options);
      }
}*/

const baseURL = 'http://localhost:8081';

//console.log(__dirname)

let resolutions = [];

const showResolutions = () => {
    console.log("SHOWING resolutions!");
    fetch(`${baseURL}/resolutions`)
        .then(response => response.json())
        .then(data => {
            resolutions = data;
            const listItems = data.map(item =>
            `<button class="tablinks" onclick="openRes('${item.unres}')" id=${item.unres}>${item.unres}: ${item.short}</button>`
            );
            document.querySelector('.tab').innerHTML =
                    `${listItems.join('')}`             
        })
        //.then(attachEventHandlers);
}

showResolutions();

const showResDetails = (res) => {
        console.log(JSON.stringify(res));
        let tab = document.querySelector('.top-detail');
        tab.innerHTML =
        `<h1>Resolution Details: ${res.unres}</h1>`;
        tab.innerHTML +=
        resReadout(res);

        // votes on this res
        let area = document.querySelector('.bottom-detail');
        area.innerHTML = `Loading...`;
        fetch(`${baseURL}/r-votes/${res.resid}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            area.innerHTML = 
            voteReadout(data);
        })

        /*console.log("DRAWING MAP USING API CALL!!");
        drawMap();*/
}

function openRes(resName) {
    // a
    var result = resolutions.filter(obj => {
        return obj.unres == resName
    })[0];
    showResDetails(result);
}

function resReadout(res) {
    return `
    Topic: ${res.short}
    <br>
    Date: ${res.date}
    <br>
    Result: Yes ${res.yes}; No ${res.no}; Abstain ${res.abstain}
    <br>
    <p>Description: ${res.descr}</p>
    <br>
    <h3>Votes on this Resolution</h3>
    `
}

function voteReadout(votes) {
    let memberVotes = votes.filter(item => {
        return item.member == "1";
    })
    let result = ``;
    memberVotes.forEach(vote => {
        result += `<br>${vote.Countryname}: ${numToVote(vote.vote)}<br>`;
    });
    return result;
}

function numToVote(num) {
    if (num == "1") {return "Yes";}
    if (num == "2") {return "Abstain";} 
    if (num == "3") {return "No";} 
    if (num == "8") {return "Absent";} 
    if (num == "9") {return "Not a Member";} 
    else {return "Data Unclear";}
}