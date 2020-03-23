console.log("Gaidys");
var lang;
var arrLang = {
    'en': {
        'create-design': 'create design',
        'home': 'HOME',
        'products': 'Products',
        'templates': 'Templates',
        'pricing': 'Pricing',
        'aboutus': 'About Us',
        'ourteam': 'Our Team',
        'signin': 'Sign in',
        'signup': 'Sign up',
        'copyright': 'Copyright &copy;2020',
        'languages': 'Languages',
        'lt': 'Lithuanian',
        'en': 'English',
        'h2': 'Create Stunning Visual Media',
        'p': 'Super simple tool to create trendy videos and pictures for your ads, social media, blogs and website. Make your project stand out!',
        'name': 'Your Username',
        'email': 'Your Email',
        'pass': 'Your Password',
        'login': 'Log In'

    },
    'lt': {
        'create-design': 'Sukurkite dizaina',
        'home': 'NAMAI',
        'products': 'Produktai',
        'templates': 'Templeitai',
        'pricing': 'Kainos',
        'aboutus': 'Apie mus',
        'ourteam': 'Musu komanda',
        'signin': 'Prisijungti',
        'signup': 'Registruotis',
        'copyright': 'Autorines teises &copy;2020',
        'languages': 'Kalbos',
        'lt': 'lietuviu',
        'en': 'anglu',
        'h2': 'Kurkite stulbinama visual media',
        'p': 'Paprastas irankis kurti siuolaikiskus filmukus ir vaizdus jusu reklamoms,socialiems tinklams,blogams ir svetainems.Tegu jusu projektas issiskiria!',
        'name': 'jusu prisijungimo vardas',
        'email': 'jusu pastas',
        'pass': 'jusu slaptazodis',
        'login': 'prisijungti'

    }
};
$(function() {
    $('.dropdown-item').click(function() {
        localStorage.setItem(lang, $(this).attr('id'))
        window.location.reload()
    });

    $('.nav-link').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.button').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 h2').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.btn.btn-primary').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });

    $('.footeris p').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-header h4').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.md-form label').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.dropdown').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.nav-link').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.button').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 h1 span').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p span').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p1 span').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn.btn-primary').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('[data-translate]').each(function(index, element) {
        $(this).attr('placeholder', arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-2.mb-3 h6 a').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.footer-copyright.text-center.py-3 a').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-body h4').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 h2 span').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p2 span').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 h3 span').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.col-md-16.col-lg-5 p3 span').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.carousel-inner h2').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.t.container h2').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.t.container th').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.t.container td').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.container h2').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.container a').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn.btn-third').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-header h5').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-body small').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn.btn-primary1').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn.btn-secondary').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.form-check-label').each(function(index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('[data-translate]').each(function(index, element) {
        $(this).attr('placeholder', arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
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
//IMG GALLERY

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

//CALCULATOR

function insert(num) {
    document.calculator.calcview.value = document.calculator.calcview.value + num;

}

function equal() {
    if (document.calculator.calcview.value)
        document.calculator.calcview.value = eval(document.calculator.calcview.value);
}

function clean() {
    document.calculator.calcview.value = "";
}

function back() {
    var temporary = document.calculator.calcview.value;
    document.calculator.calcview.value = temporary.substring(0, temporary.length - 1)
}