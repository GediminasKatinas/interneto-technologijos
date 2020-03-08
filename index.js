console.log("Gaidys");

//TEMPLATE

if ('content' in document.createElement('template')) {
    var navbaras = document.querySelector('#sample');
    var indexnav = document.getElementById("indexnav");
    var templatenav = document.getElementById("templatesnav");
    var clone = navbaras.content.cloneNode(true);
    indexnav.appendChild(clone);
    templatenav.appendChild(clone);
} else {
    alert("Neveikia tempaltes");
}

//XML PARSINGAS

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlparsing(this);
        }
    }
    xhttp.open("GET", "../index.xml", true);
    xhttp.send();
}

function xmlparsing(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Name </th><th> Price </th><th> Description</th></tr>";
    var name = xmlDoc.getElementsByTagName("name");
    var price = xmlDoc.getElementsByTagName("price");
    var descriptionas = xmlDoc.getElementsByTagName("description");
    for (i = 0; i < name.length; i++) {
        table += "<tr><td>" +
            name[i].childNodes[0].nodeValue +
            "</td><td>" +
            price[i].childNodes[0].nodeValue +
            "</td><td>" +
            descriptionas[i].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}


function imggallery(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}