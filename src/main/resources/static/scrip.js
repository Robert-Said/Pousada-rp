function darkMode(){
    var body = document.body;
    
    body.classList.toggle("dark_mode_body");
    
    if(body.classList == "dark_mode_body"){
        document.getElementById("xicara").src="img/xicara-png-white.png";
        document.getElementById("wifi").src="img/wifi-white.png";
        document.getElementById("prato").src="img/prato-white.png";
    }
    else{
        document.getElementById("xicara").src="img/xicara-png.png";
        document.getElementById("wifi").src="img/wifi.png";
        document.getElementById("prato").src="img/prato.png";
    }

}

function menuDuvidas(menu_duvidas) {
    var menuDuvidas = document.getElementById(menu_duvidas).style.display;
    
    if(menuDuvidas == "block")
        document.getElementById(menu_duvidas).style.display = 'none';
    else
        document.getElementById(menu_duvidas).style.display = 'block';
}

function menuMostrar(menu) {
    var menuDisplay = document.getElementById(menu).style.display;
    
    if(menuDisplay == "block")
        document.getElementById(menu).style.display = 'none';
    else
        document.getElementById(menu).style.display = 'block';
}




