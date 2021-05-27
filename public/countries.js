const baseURL = 'http://localhost:8081';
//console.log(__dirname)
const showCountries = () => {
    console.log("SHOWING countries!");
    fetch(`${baseURL}/votes/country`)
        .then(response => response.json())
        .then(data => {
            countries = data;
            const listItems = data.map(item => `
            <button class="tablinks" onclick="openCountry(event, '${item}')" id=${item}>${item}</button>`
            );
            document.querySelector('.tab').innerHTML = `

                    ${listItems.join('')}
                
                `
        })
        //.then(attachEventHandlers);
}


showCountries();
// Fix when the name is more than two chars 


const showCountriesdetails = (Countryname) => {
    console.log("fetching", `${baseURL}/votes/country/${Countryname}`)
    fetch(`${baseURL}/votes/country/${Countryname}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('.tabcontent').innerHTML = `
            <h3>${Countryname}</h3>` ;

            const res_list = data.map(item =>
            `<p>For the resolution <a href=resolutions.html?res=${item.resid}>${item.unres}</a>,
            ${Countryname} voted ${numToVote(item.vote)} on ${item.date}.</p>`
        )
document.querySelector('.tabcontent').innerHTML += `

${res_list.join('')}
<button id="add" class="btn"> more resolutions </button> ` ; 


})}


function openCountry(evt, countryName) {
  var i, tabcontent, tablinks;
  showCountriesdetails(countryName);
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

function numToVote(num) {
    if (num == "1") {return "Yes";}
    if (num == "2") {return "Abstain";} 
    if (num == "3") {return "No";} 
    if (num == "8") {return "Absent";} 
    if (num == "9") {return "Not a Member";} 
    else {return "Data Unclear";}
}