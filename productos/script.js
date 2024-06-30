// CARGAR TEMA GUARDADO

window.addEventListener('load', function () {
    var themeBack = localStorage.getItem('theme-back');
    var themeFront = localStorage.getItem('theme-front');
    var themeThird = localStorage.getItem('theme-third');
    var themeStatic = localStorage.getItem('theme-static');
    var themeBg = localStorage.getItem('theme-bg');
    var themeLogo = localStorage.getItem('theme-logo');

    document.documentElement.style.setProperty('--theme-back', themeBack);
    document.documentElement.style.setProperty('--theme-front', themeFront);
    document.documentElement.style.setProperty('--theme-third', themeThird);
    document.documentElement.style.setProperty('--theme-static', themeStatic);
    document.documentElement.style.setProperty('--theme-bg', themeBg);
});


var potOpen = document.getElementById("pot-open")
var potClose = document.getElementById("pot-close")

potOpen.addEventListener("click", function () {
    var potOptions = document.getElementById("pot-options");

    potOptions.style.bottom = "35%";

    potOpen.style.display = "none";
    potClose.style.display = "block";

});

potClose.addEventListener("click", function () {
    var potOptions = document.getElementById("pot-options");

    potOptions.style.bottom = "15%";

    potOpen.style.display = "block";
    potClose.style.display = "none";

});

function showAdd() {

    document.getElementById("implant-form").style.display = "block";
    document.getElementById("mod-form").style.display = "none";
}

function sort(columnIndex, ascending) {
    var table = document.getElementById("implants");
    var rows = Array.from(table.rows).slice(1); // Skip the header row

    rows.sort(function (a, b) {
        var cellA = a.cells[columnIndex].innerText.toLowerCase();
        var cellB = b.cells[columnIndex].innerText.toLowerCase();

        if (cellA < cellB) return ascending ? -1 : 1;
        if (cellA > cellB) return ascending ? 1 : -1;
        return 0;
    });

    var tbody = table.tBodies[0];
    rows.forEach(function (row) {
        tbody.appendChild(row);
    });
}

function clearProducts() {
    var table = document.getElementById("implants");
    var rows = table.getElementsByTagName("tr");
    var rowsArray = Array.from(rows);

    // Loop through rows starting from the second one (index 1) and remove each
    for (var i = rowsArray.length - 1; i > 1; i--) {
        rowsArray[i].parentNode.removeChild(rowsArray[i]);
    }
}

/* NAV BUTTONS */

var displayImplants = document.getElementById('displayImplants');
var displayWeapons = document.getElementById('displayWeapons');


function filterImplants(ranges) {
    // Get all rows in the table
    var rows = document.querySelectorAll('.productsTable tr');

    // Hide all rows initially
    rows.forEach(row => row.style.display = 'none');

    // Show only the rows specified by the ranges
    ranges.forEach(range => {
        if (Array.isArray(range) && range.length === 2) {
            // Handle range [start, end]
            for (let i = range[0]; i <= range[1]; i++) {
                if (rows[i]) {
                    rows[i].style.display = '';
                }
            }
        } else if (typeof range === 'number') {
            // Handle specific index
            if (rows[range]) {
                rows[range].style.display = '';
            }
        }
    });
}


/* API*/
/* IMPLANTS */

apiWeb = 'https://api.yumserver.com/17005/products';

displayImplant();

function searchforImplant(idBuscar) {
    fetch(apiWeb)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let implantCaught = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].idcod == idBuscar) {
                    document.getElementById("idMod").value = data[i].idcod
                    document.getElementById("implantMod").value = data[i].titulo
                    document.getElementById("argMod").value = data[i].precioPeso
                    document.getElementById("usdMod").value = data[i].precioDolar
                    document.getElementById("dateMod").value = data[i].fecha

                    let implantCaught = true;
                }
            }
        })

        .catch(error => console.error('Error:', error));

    document.getElementById("implant-form").style.display = "none";
    document.getElementById("mod-form").style.display = "block";
}

function displayImplant() {
    fetch(apiWeb)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let html = "";

            for (let i = 0; i < data.length; i++) {
                html += `
                <tr>
                <td id="thumbnailTd"><img src="${data[i].titulo}.webp"></td>
                <td>${data[i].titulo}</td>
                <td class="price">$ ${data[i].precioPeso}<img src="merchant.gif"></td>
                <td class="price">u$s ${data[i].precioDolar}<img src="merchant.gif"></td>
                <td>${data[i].fecha}</td>
                <td class="buttonTd"><button class="accion1" id="${data[i].idcod}" onclick="searchforImplant(id)"><i class="fa-solid fa-pencil"></i></td>
                <td class="buttonTd"><button class="accion1" id="${data[i].idcod}" onclick="removeImplant(id)"><i class="fa-solid fa-trash"></i></td>
                </tr>`;
            }
            document.getElementById('returnImplants').innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

var eatingSound = document.getElementById("eatingSound");

function editImplant(idMod) {

    let producto = {
        idcod: document.getElementById("idMod").value,
        titulo: document.getElementById("implantMod").value,
        precioPeso: document.getElementById("argMod").value,
        precioDolar: document.getElementById("usdMod").value,
        fecha: document.getElementById("dateMod").value
    }
    fetch(apiWeb, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)

    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
            if (data === 'OK') {
                alert("UPDATED");
            }
            else {
                alert("NOT UPDATED");
            }

            displayImplant()
        })
        .catch(error => console.error('Error:', error));

    eatingSound.play();
}

function addImplant() {
    let producto = {
        titulo: document.getElementById("implant").value,
        precioPeso: document.getElementById("arg").value,
        precioDolar: document.getElementById("usd").value,
        fecha: document.getElementById("date").value
    }

    fetch(apiWeb, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    })
        .then(response => response.text())
        .then(data => {
            console.log(data)
            if (data === 'OK') {
                alert("ADDED");
            }
            else {
                alert("NOT ADDED");
            }

            displayImplant();

            producto = "";

            document.getElementById("implant").value = "",
                document.getElementById("arg").value = "",
                document.getElementById("usd").value = "",
                document.getElementById("date").value = ""
        })
        .catch(error => console.error('Error:', error))

    eatingSound.play();
}

function removeImplant(idEliminar) {
    if (confirm("REMOVE? ☠︎︎☠︎︎☠︎︎")) {
        fetch(apiWeb, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idcod: idEliminar })
        })
            .then(response => response.text())
            .then(data => {
                console.log(data)
                if (data === 'OK') {
                    alert("REMOVED");
                }
                else {
                    alert("NOT REMOVED");
                }
                displayImplant();
            })
            .catch(error => console.error('Error:', error))
    }

    var laughSound = document.getElementById("laughter");

    laughSound.play();
}

