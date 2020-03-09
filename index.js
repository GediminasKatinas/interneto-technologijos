console.log("Gaidys");
var arrLang = {
    'en' : {
        'create-design' : 'create design',
        'home' : 'HOME',
        'products' : 'Products',
        'templates' : 'templates',
        'pricing' : 'pricing',
        'aboutus' : 'about us',
        'ourteam' : 'our team',
        'signin'  : 'sign in',
        'signup'  : 'sign up',
        'copyright': 'copyright by me heehe',
        'languages': 'languages',
        'lt' : 'Lithuanian',
        'en' : 'English',
        'h2' : 'Create Stunning Visual Media',
        'p' : 'Super simple tool to create trendy videos and pictures for your ads, social media, blogs and website. Make your project stand out!',
        'name' : 'your username',
        'email' : 'your email',
        'pass' : 'your password',
        'login' : 'log in'
        
    },
    'lt' : {
        'create-design' : 'Sukurkite dizaina',
        'home' : 'NAMAI',
        'products' : 'Produktai',
        'templates' : 'templeitai',
        'pricing' : 'kainos',
        'aboutus' : 'apie mus',
        'ourteam' : 'musu komanda',
        'signin'  : 'prisijungti',
        'signup'  : 'registruotis',
        'copyright': 'autorines teises by me',
        'languages': 'kalbos',
        'lt' : 'lietuviu',
        'en' : 'anglu',
        'h2' : 'Kurkite stulbinama visual media',
        'p' : 'Paprastas irankis kurti siuolaikiskus filmukus ir vaizdus jusu reklamoms,socialiems tinklams,blogams ir svetainems.Tegu jusu projektas issiskiria!',
        'name' : 'jusu prisijungimo vardas',
        'email' : 'jusu pastas',
        'pass' : 'jusu slaptazodis',
        'login' : 'prisijungti'

     }
};
$(function(){
    $('.dropdown-item').click(function(){
        var lang = $(this).attr('id');

        $('.nav-link').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.button').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.modal-footer button').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.modal-footer button').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.col-md-16.col-lg-5 h2').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        $('.col-md-16.col-lg-5 p').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      
        $('.btn.btn-primary').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        
        $('modalLoginForm').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
        
    });
});
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

function loadinimas() {
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