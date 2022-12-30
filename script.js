var svp = document.getElementById("sidepanelserve");
var sp = document.getElementById("sidepanel");

var svpd = document.getElementById("sidepanelservede");
var spd = document.getElementById("sidepanelde");

var cpl = document.getElementById("cpl");

var sv = document.getElementById("serve");
var set = document.getElementById("set");
var fp = document.getElementById("fpw");
var tt = document.getElementById("turtles");
var go = document.getElementById("gto");

var wspace = document.getElementsByClassName("wspace");

var r1 = document.getElementById("resh");
var r2 = document.getElementById("resh2");
var rss = document.getElementById("resspace");
var g1 = document.getElementById("gen1");
var gui = document.getElementById("guide");

var bkg = document.getElementById("bkg");

var ws = document.getElementById("ws");
var wsde = document.getElementById("wsde");
var wstr = document.getElementById("wstr");
var wsqu = document.getElementById("wsqu");

var wh = document.getElementById("wh");

var ready = false;
var mobile = false;

var ww = 1270;
var hh = 600;

var scrnw = window.innerWidth;
var scrnh = window.innerHeight;

function initiate(){
  if(scrnw < ww || scrnh < hh){
    //alert(scrnw + " , " + scrnh)
    mobile = true;
    //temp
  } else {
    mobile = false;
  }
  //alert(scrnw + ", " + scrnh)
}

window.onload = initiate;

$(window).resize(function() {
  location.reload();
  window.location.reload();
  window.location.href = window.location.href;
});

function displayPanel() {
  if(mobile === false){
    svp.style.opacity = "1";
    sp.style.opacity = "1";
    tt.style.textAlign = "left";
    go.style.backgroundPosition = "left";
    fp.style.left = "-300px";
    set.style.justifyContent = "left";
  } else {
    svp.style.opacity = "1";
    sp.style.opacity = "1";
    svp.style.width = "100%";
    sp.style.width = "100%";

    svpd.style.opacity = "0";
    spd.style.opacity = "0";
  }
}

function start() {
  if(mobile === false){
    svp.style.left = "100%";
    svp.style.width = "40%";
    svp.style.backgroundImage =
      "url(https://cdn.glitch.global/9169d231-8c93-4181-bba6-4e8d8bfd705f/nick-nice-gPm8h3DS1s4-unsplash.jpg?v=1665151317012)";
    svp.style.backgroundSize = "cover";
    svp.style.backgroundPosition = "center";
    svp.style.filter = "brightness(40%)";

    sp.style.left = "100%";
    sp.style.width = "40%";
    sp.style.color = "white";

    svpd.style.left = "0px";
    svpd.style.backgroundPosition = "center";
    svpd.style.filter = "brightness(60%)";

    spd.style.left = "0px";
    spd.style.color = "white";

    sv.style.opacity = "0";
    fp.style.opacity = "0";

    ws.style.width = "100%";
    ws.style.opacity = "1";
    ws.style.left = "0px";

    wsde.style.opacity = "0";
    wstr.style.opacity = "0";
    wsqu.style.opacity = "0";

    ws.style.zIndex = "0";
    wsde.style.zIndex = "-1";
    wstr.style.zIndex = "-1";
    wsqu.style.zIndex = "-1";

    wsde.style.left = "0px";
    wstr.style.left = "0px";
    wsqu.style.left = "0px";

    wsde.style.width = "100%";
    wstr.style.width = "100%";
    wsqu.style.width = "100%";
  } else {
    sv.style.backgroundImage = "none";
    sv.style.filter = "brightness(100%)";
    sv.style.background = "white";

    svp.style.left = "100%";
    sp.style.left = "100%";

    svpd.style.left = "80%";
    svpd.style.backgroundPosition = "center";
    svpd.style.filter = "brightness(60%)";

    spd.style.left = "80%";
    spd.style.color = "white";

    svpd.style.width = "20%";
    spd.style.width = "20%";

    sv.style.opacity = "1";
    fp.style.opacity = "0";

    ws.style.width = "100%";
    ws.style.opacity = "1";
    ws.style.left = "0px";

    wsde.style.opacity = "0";
    wstr.style.opacity = "0";
    wsqu.style.opacity = "0";

    ws.style.left = "-30%";

    ws.style.zIndex = "0";
    wsde.style.zIndex = "-1";
    wstr.style.zIndex = "-1";
    wsqu.style.zIndex = "-1";

    wsde.style.left = "0px";
    wstr.style.left = "0px";
    wsqu.style.left = "0px";

    wsde.style.width = "100%";
    wstr.style.width = "100%";
    wsqu.style.width = "100%";
  }
}

function start2() {
  if(mobile === false){
    svp.style.left = "100%";
    svp.style.width = "40%";
    svp.style.backgroundImage =
      "url(https://cdn.glitch.global/9169d231-8c93-4181-bba6-4e8d8bfd705f/nick-nice-gPm8h3DS1s4-unsplash.jpg?v=1665151317012)";
    svp.style.backgroundSize = "cover";
    svp.style.backgroundPosition = "center";
    svp.style.filter = "brightness(40%)";

    sp.style.left = "100%";
    sp.style.width = "40%";
    sp.style.color = "white";

    svpd.style.left = "0px";
    svpd.style.backgroundPosition = "center";
    svpd.style.filter = "brightness(60%)";

    spd.style.left = "0px";
    spd.style.color = "white";

    sv.style.opacity = "0";
    fp.style.opacity = "0";

    wsde.style.width = "100%";
    wsde.style.opacity = "1";
    wsde.style.left = "0px";

    ws.style.opacity = "0";
    wstr.style.opacity = "0";
    wsqu.style.opacity = "0";

    wsde.style.zIndex = "0";
    ws.style.zIndex = "-1";
    wstr.style.zIndex = "-1";
    wsqu.style.zIndex = "-1";

    ws.style.left = "0px";
    wstr.style.left = "0px";
    wsqu.style.left = "0px";

    ws.style.width = "100%";
    wstr.style.width = "100%";
    wsqu.style.width = "100%";
  } else {
    sv.style.backgroundImage = "none";
    sv.style.filter = "brightness(100%)";
    sv.style.background = "white";

    svp.style.left = "100%";
    sp.style.left = "100%";

    svpd.style.left = "80%";
    svpd.style.backgroundPosition = "center";
    svpd.style.filter = "brightness(60%)";

    spd.style.left = "80%";
    spd.style.color = "white";

    svpd.style.width = "20%";
    spd.style.width = "20%";

    sv.style.opacity = "1";
    fp.style.opacity = "0";

    wsde.style.width = "100%";
    wsde.style.opacity = "1";
    wsde.style.left = "0px";

    ws.style.opacity = "0";
    wstr.style.opacity = "0";
    wsqu.style.opacity = "0";

    wsde.style.left = "-30%";

    wsde.style.zIndex = "0";
    ws.style.zIndex = "-1";
    wstr.style.zIndex = "-1";
    wsqu.style.zIndex = "-1";

    ws.style.left = "0px";
    wstr.style.left = "0px";
    wsqu.style.left = "0px";

    ws.style.width = "100%";
    wstr.style.width = "100%";
    wsqu.style.width = "100%";
  }
}

function start3() {
  if(mobile === false){
    svp.style.left = "100%";
    svp.style.width = "40%";
    svp.style.backgroundImage =
      "url(https://cdn.glitch.global/9169d231-8c93-4181-bba6-4e8d8bfd705f/nick-nice-gPm8h3DS1s4-unsplash.jpg?v=1665151317012)";
    svp.style.backgroundSize = "cover";
    svp.style.backgroundPosition = "center";
    svp.style.filter = "brightness(40%)";

    sp.style.left = "100%";
    sp.style.width = "40%";
    sp.style.color = "white";

    svpd.style.left = "0px";
    svpd.style.backgroundPosition = "center";
    svpd.style.filter = "brightness(60%)";

    spd.style.left = "0px";
    spd.style.color = "white";

    sv.style.opacity = "0";
    fp.style.opacity = "0";

    wstr.style.width = "100%";
    wstr.style.opacity = "1";
    wstr.style.left = "0px";

    wsde.style.opacity = "0";
    ws.style.opacity = "0";
    wsqu.style.opacity = "0";

    wstr.style.zIndex = "0";
    wsde.style.zIndex = "-1";
    ws.style.zIndex = "-1";
    wsqu.style.zIndex = "-1";

    wsde.style.left = "0px";
    ws.style.left = "0px";
    wsqu.style.left = "0px";

    wsde.style.width = "100%";
    ws.style.width = "100%";
    wsqu.style.width = "100%";
  } else {
    sv.style.backgroundImage = "none";
    sv.style.filter = "brightness(100%)";
    sv.style.background = "white";

    svp.style.left = "100%";
    sp.style.left = "100%";

    svpd.style.left = "80%";
    svpd.style.backgroundPosition = "center";
    svpd.style.filter = "brightness(60%)";

    spd.style.left = "80%";
    spd.style.color = "white";

    svpd.style.width = "20%";
    spd.style.width = "20%";

    sv.style.opacity = "1";
    fp.style.opacity = "0";

    wstr.style.width = "100%";
    wstr.style.opacity = "1";
    wstr.style.left = "0px";

    wsde.style.opacity = "0";
    ws.style.opacity = "0";
    wsqu.style.opacity = "0";

    wstr.style.left = "-30%";

    wstr.style.zIndex = "0";
    wsde.style.zIndex = "-1";
    ws.style.zIndex = "-1";
    wsqu.style.zIndex = "-1";

    wsde.style.left = "0px";
    ws.style.left = "0px";
    wsqu.style.left = "0px";

    wsde.style.width = "100%";
    ws.style.width = "100%";
    wsqu.style.width = "100%";
  }
}

function start4() {
  if(mobile === false){
    svp.style.left = "100%";
    svp.style.width = "40%";
    svp.style.backgroundImage =
      "url(https://cdn.glitch.global/9169d231-8c93-4181-bba6-4e8d8bfd705f/nick-nice-gPm8h3DS1s4-unsplash.jpg?v=1665151317012)";
    svp.style.backgroundSize = "cover";
    svp.style.backgroundPosition = "center";
    svp.style.filter = "brightness(40%)";

    sp.style.left = "100%";
    sp.style.width = "40%";
    sp.style.color = "white";

    svpd.style.left = "0px";
    svpd.style.backgroundPosition = "center";
    svpd.style.filter = "brightness(60%)";

    spd.style.left = "0px";
    spd.style.color = "white";

    sv.style.opacity = "0";
    fp.style.opacity = "0";

    wsqu.style.width = "100%";
    wsqu.style.opacity = "1";
    wsqu.style.left = "0px";

    wsde.style.opacity = "0";
    wstr.style.opacity = "0";
    ws.style.opacity = "0";

    wsqu.style.zIndex = "0";
    wsde.style.zIndex = "-1";
    wstr.style.zIndex = "-1";
    ws.style.zIndex = "-1";

    wsde.style.left = "0px";
    wstr.style.left = "0px";
    ws.style.left = "0px";

    wsde.style.width = "100%";
    wstr.style.width = "100%";
    ws.style.width = "100%";
  } else {
    sv.style.backgroundImage = "none";
    sv.style.filter = "brightness(100%)";
    sv.style.background = "white";

    svp.style.left = "100%";
    sp.style.left = "100%";

    svpd.style.left = "80%";
    svpd.style.backgroundPosition = "center";
    svpd.style.filter = "brightness(60%)";

    spd.style.left = "80%";
    spd.style.color = "white";

    svpd.style.width = "20%";
    spd.style.width = "20%";

    sv.style.opacity = "1";
    fp.style.opacity = "0";

    wsqu.style.width = "100%";
    wsqu.style.opacity = "1";
    wsqu.style.left = "0px";

    wsde.style.opacity = "0";
    wstr.style.opacity = "0";
    ws.style.opacity = "0";

    wsqu.style.left = "-30%";

    wsqu.style.zIndex = "0";
    wsde.style.zIndex = "-1";
    wstr.style.zIndex = "-1";
    ws.style.zIndex = "-1";

    wsde.style.left = "0px";
    wstr.style.left = "0px";
    ws.style.left = "0px";

    wsde.style.width = "100%";
    wstr.style.width = "100%";
    ws.style.width = "100%";
  }
}