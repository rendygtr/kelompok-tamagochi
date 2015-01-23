var stamina_s = 0;
var nilai_s = 0;
var hungry_s = 0;
var social_s = 0;
var fun_s = 0;
var cetak;
var miku;
var jam = 0;
var menit = 0;
var detik = 0;
var clock;
var level;

function start1(){
a = document.getElementById("name").value;
nama=document.getElementById("nama");
nama.innerHTML=a;
normalMode();
}

function normalMode(){
	var htmlSisip ='<img src="PROJECT GAME/Gambar_Miku/gambar_social.png" />';
	document.getElementById("karakter").innerHTML = htmlSisip;
	}

function waktu(){
	jamWaktu = jam + ":" +menit+ ":" + detik;
	document.getElementById("jam").innerHTML = jamWaktu;
	detik +=1;
	if(jam == 12) jam=0;
	if(menit == 60) jam +=1;
	if(menit == 60) menit=0;
	if(detik == 60) menit+=1;
	if(detik == 60) detik=0;
	
	clock = setTimeout(function() {waktu()}, 1);
}

function mulai1(){
waktu();
level1();
stamina_s = 0;
nilai_s = 0;
hungry_s = 0;
social_s = 0;
fun_s = 0;
}

function stop1(){
clearTimeout(clock);

}

function ulangi1(){
jamWaktu = jam + ":" +menit+ ":" + detik;
	document.getElementById("jam").innerHTML = jamWaktu;
	detik =00;
	menit=0;
	jam=0;
level1();
normalMode();
start1();
stamina_s = 0;
nilai_s = 0;
hungry_s = 0;
social_s = 0;
fun_s = 0;
}

function level1(){
level=1;
if(nilai_s >= 100) nilai_s = 100;
level +=1;
document.getElementById("level").innerHTML=level;
}
	
function x(){
if(nilai_s <= 0) nilai_s = 20;
if(nilai_s >= 100) nilai_s = 80;

if(stamina_s <= 0) stamina_s = 10;
if(stamina_s >= 100) stamina_s = 90;

if(social_s <= 0) social_s = 10;
if(social_s >= 100) social_s = 90;

if(fun_s <= 0) fun_s = 10;
if(fun_s >= 100) fun_s = 90;

if(hungry_s <= 0) hungry_s = 10;
if(hungry_s >= 100) hungry_s = 90;
}

function z(){
if(nilai_s == 0) $("#customnilai").css({"width": "0px"});
if(nilai_s == 10) $("#customnilai").css({"width": "16px"}).css({"backgroundColor":"grey"});
if(nilai_s == 20) $("#customnilai").css({"width": "26px"}).css({"backgroundColor":"grey"});
if(nilai_s == 30) $("#customnilai").css({"width": "36px"}).css({"backgroundColor":"grey"});
if(nilai_s == 40) $("#customnilai").css({"width": "46px"}).css({"backgroundColor":"red"});
if(nilai_s == 50) $("#customnilai").css({"width": "56px"}).css({"backgroundColor":"red"});
if(nilai_s == 60) $("#customnilai").css({"width": "66px"}).css({"backgroundColor":"red"});
if(nilai_s == 70) $("#customnilai").css({"width": "76px"}).css({"backgroundColor":"#17fc03"});
if(nilai_s == 80) $("#customnilai").css({"width": "86px"}).css({"backgroundColor":"#17fc03"});
if(nilai_s == 90) $("#customnilai").css({"width": "96px"}).css({"backgroundColor":"#17fc03"});
if(nilai_s == 100) $("#customnilai").css({"width": "106px"}).css({"backgroundColor":"#17fc03"});

if(stamina_s == 0) $("#customstamina").css({"width": "0px"});
if(stamina_s == 10) $("#customstamina").css({"width": "16px"}).css({"backgroundColor":"grey"})
if(stamina_s == 20) $("#customstamina").css({"width": "26px"}).css({"backgroundColor":"grey"})
if(stamina_s == 30) $("#customstamina").css({"width": "36px"}).css({"backgroundColor":"grey"})
if(stamina_s == 40) $("#customstamina").css({"width": "46px"}).css({"backgroundColor":"red"});
if(stamina_s == 50) $("#customstamina").css({"width": "56px"}).css({"backgroundColor":"red"});
if(stamina_s == 60) $("#customstamina").css({"width": "66px"}).css({"backgroundColor":"red"});
if(stamina_s == 70) $("#customstamina").css({"width": "76px"}).css({"backgroundColor":"#17fc03"});
if(stamina_s == 80) $("#customstamina").css({"width": "86px"}).css({"backgroundColor":"#17fc03"});
if(stamina_s == 90) $("#customstamina").css({"width": "96px"}).css({"backgroundColor":"#17fc03"});
if(stamina_s == 100) $("#customstamina").css({"width": "106px"}).css({"backgroundColor":"#17fc03"});

if(social_s == 0) $("#customsocial").css({"width": "0px"});
if(social_s == 10) $("#customsocial").css({"width": "16px"}).css({"backgroundColor":"grey"})
if(social_s == 20) $("#customsocial").css({"width": "26px"}).css({"backgroundColor":"grey"})
if(social_s == 30) $("#customsocial").css({"width": "36px"}).css({"backgroundColor":"grey"})
if(social_s == 40) $("#customsocial").css({"width": "46px"}).css({"backgroundColor":"red"});
if(social_s == 50) $("#customsocial").css({"width": "56px"}).css({"backgroundColor":"red"});
if(social_s == 60) $("#customsocial").css({"width": "66px"}).css({"backgroundColor":"red"});
if(social_s == 70) $("#customsocial").css({"width": "76px"}).css({"backgroundColor":"#17fc03"});
if(social_s == 80) $("#customsocial").css({"width": "86px"}).css({"backgroundColor":"#17fc03"});
if(social_s == 90) $("#customsocial").css({"width": "96px"}).css({"backgroundColor":"#17fc03"});
if(social_s == 100) $("#customsocial").css({"width": "106px"}).css({"backgroundColor":"#17fc03"});

if(fun_s == 0) $("#customfun").css({"width": "0px"});
if(fun_s == 10) $("#customfun").css({"width": "16px"}).css({"backgroundColor":"grey"})
if(fun_s == 20) $("#customfun").css({"width": "26px"}).css({"backgroundColor":"grey"})
if(fun_s == 30) $("#customfun").css({"width": "36px"}).css({"backgroundColor":"grey"})
if(fun_s == 40) $("#customfun").css({"width": "46px"}).css({"backgroundColor":"red"});
if(fun_s == 50) $("#customfun").css({"width": "56px"}).css({"backgroundColor":"red"});
if(fun_s == 60) $("#customfun").css({"width": "66px"}).css({"backgroundColor":"red"});
if(fun_s == 70) $("#customfun").css({"width": "76px"}).css({"backgroundColor":"#17fc03"});
if(fun_s == 80) $("#customfun").css({"width": "86px"}).css({"backgroundColor":"#17fc03"});
if(fun_s == 90) $("#customhfun").css({"width": "96px"}).css({"backgroundColor":"#17fc03"});
if(fun_s == 100) $("#customfun").css({"width": "106px"}).css({"backgroundColor":"#17fc03"});

if(hungry_s == 0) $("#customhungry").css({"width": "0px"});
if(hungry_s == 10) $("#customhungry").css({"width": "16px"}).css({"backgroundColor":"grey"})
if(hungry_s == 20) $("#customhungry").css({"width": "26px"}).css({"backgroundColor":"grey"})
if(hungry_s == 30) $("#customhungry").css({"width": "36px"}).css({"backgroundColor":"grey"})
if(hungry_s == 40) $("#customhungry").css({"width": "46px"}).css({"backgroundColor":"red"});
if(hungry_s == 50) $("#customhungry").css({"width": "56px"}).css({"backgroundColor":"red"});
if(hungry_s == 60) $("#customhungry").css({"width": "66px"}).css({"backgroundColor":"red"});
if(hungry_s == 70) $("#customhungry").css({"width": "76px"}).css({"backgroundColor":"#17fc03"});
if(hungry_s == 80) $("#customhungry").css({"width": "86px"}).css({"backgroundColor":"#17fc03"});
if(hungry_s == 90) $("#customhungry").css({"width": "96px"}).css({"backgroundColor":"#17fc03"});
if(hungry_s == 100) $("#customhungry").css({"width": "106px"}).css({"backgroundColor":"#17fc03"});
}

function belajar() {
x();

stamina_s -= 10;
nilai_s += 20;
hungry_s -= 10;
social_s -= 10;
fun_s -= 10;
var htmlSisip2 = '<img src="PROJECT GAME/Gambar_Miku/5.jpg" />';
document.getElementById("karakter").innerHTML = htmlSisip2;

document.getElementById("textnilai").innerHTML = "Belajar " + nilai_s;
document.getElementById("textstamina").innerHTML = "Stamina " + stamina_s;
document.getElementById("texthungry").innerHTML = "Lapar " + hungry_s;
document.getElementById("textsocial").innerHTML = "Social " + social_s;
document.getElementById("textfun").innerHTML = "Bermain " + fun_s;

z();

miku= setTimeout(function(){normalMode()},5000);
}

function school1() {
x();

stamina_s -= 10;
nilai_s += 20;
hungry_s -= 10;
social_s -= 10;
fun_s -= 10;
var htmlSisip2 = '<img src="PROJECT GAME/Gambar_Miku/koto_room.jpg" />';
document.getElementById("karakter").innerHTML = htmlSisip2;

document.getElementById("textnilai").innerHTML = "Belajar " + nilai_s;
document.getElementById("textstamina").innerHTML = "Stamina " + stamina_s;
document.getElementById("texthungry").innerHTML = "Lapar " + hungry_s;
document.getElementById("textsocial").innerHTML = "Social " + social_s;
document.getElementById("textfun").innerHTML = "Bermain " + fun_s;

z();

miku= setTimeout(function(){normalMode()},5000);
}

function sleep1() {
x();

stamina_s += 10;
nilai_s -= 20;
hungry_s -= 10;
social_s -= 10;
fun_s -= 10;
var htmlSisip2 = '<img src="PROJECT GAME/Gambar_Miku/koto_room.jpg" />';
document.getElementById("karakter").innerHTML = htmlSisip2;

document.getElementById("textnilai").innerHTML = "Belajar " + nilai_s;
document.getElementById("textstamina").innerHTML = "Stamina " + stamina_s;
document.getElementById("texthungry").innerHTML = "Lapar " + hungry_s;
document.getElementById("textsocial").innerHTML = "Social " + social_s;
document.getElementById("textfun").innerHTML = "Bermain " + fun_s;

z();

miku= setTimeout(function(){normalMode()},5000);
}

function social1() {
x();

stamina_s -= 10;
nilai_s -= 20;
hungry_s -= 10;
social_s += 10;
fun_s -= 10;
var htmlSisip = '<img src="PROJECT GAME/Gambar_Miku/gambar_social.png" />';
document.getElementById("karakter").innerHTML = htmlSisip;

document.getElementById("textnilai").innerHTML = "Belajar " + nilai_s;
document.getElementById("textstamina").innerHTML = "Stamina " + stamina_s;
document.getElementById("texthungry").innerHTML = "Lapar " + hungry_s;
document.getElementById("textsocial").innerHTML = "Social " + social_s;
document.getElementById("textfun").innerHTML = "Bermain " + fun_s;

z();

miku= setTimeout(function(){normalMode()},5000);
}

function game1() {
x();

stamina_s -= 10;
nilai_s -= 20;
hungry_s -= 10;
social_s -= 10;
fun_s += 10;
var htmlSisip = '<img src="PROJECT GAME/Gambar_Miku/Miku_Edit/gambar_6edit.png" />';
document.getElementById("karakter").innerHTML = htmlSisip;

document.getElementById("textnilai").innerHTML = "Belajar " + nilai_s;
document.getElementById("textstamina").innerHTML = "Stamina " + stamina_s;
document.getElementById("texthungry").innerHTML = "Lapar " + hungry_s;
document.getElementById("textsocial").innerHTML = "Social " + social_s;
document.getElementById("textfun").innerHTML = "Bermain " + fun_s;

z();

miku= setTimeout(function(){normalMode()},5000);
}

function makan1() {
x();

stamina_s -= 10;
nilai_s -= 20;
hungry_s += 10;
social_s -= 10;
fun_s -= 10;
var htmlSisip = '<img src="PROJECT GAME/Gambar_Miku/Miku_Edit/gambar_6edit.png" />';
document.getElementById("karakter").innerHTML = htmlSisip;

document.getElementById("textnilai").innerHTML = "Belajar " + nilai_s;
document.getElementById("textstamina").innerHTML = "Stamina " + stamina_s;
document.getElementById("texthungry").innerHTML = "Lapar " + hungry_s;
document.getElementById("textsocial").innerHTML = "Social " + social_s;
document.getElementById("textfun").innerHTML = "Bermain " + fun_s;

z();

miku= setTimeout(function(){normalMode()},5000);
}


function klik() {
document.getElementById("mulai").addEventListener("click", mulai1, false);
document.getElementById("stop").addEventListener("click", stop1, false);
document.getElementById("ulangi").addEventListener("click", ulangi1, false);
} 

window.addEventListener("load", klik, false);