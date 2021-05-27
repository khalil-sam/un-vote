const baseURL = 'http://localhost:8081';
//console.log(__dirname)

/*
const showResolutions = () => {
    console.log("SHOWING Resolutions!");
    fetch(`${baseURL}/resolutions`)
        .then(response => response.json())
        .then(data => {
            resolutions = data;
            const listItems = data.map(item => `
                <li data-id="${item._id}">
                    <a href="#" data-id="${item._id}">${item.unres}</a>
                </li>`
            );
            document.querySelector('aside').innerHTML = `
                <ol id="doc-list">
                    ${listItems.join('')}
                </ol>
                <button id="add" class="btn"> more resolutions </button>
                `
        })
        //.then(attachEventHandlers);
}


showResolutions();*/

// <!-- PROBABLY ADD REACT LATER  -->

//npm has to be running 
