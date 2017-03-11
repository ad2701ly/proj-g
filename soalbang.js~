for (a=1;a<=5;a++) {
	

document.write("<div data-role='page' id='sol"+a+"' data-dialog='true' class='dissoal'>"+
 	"<div data-role='header'><h4>Pertanyaan "+a+"</h4></div>"+
			"<div data-role='main-content'>"+
				"<div class='ui-grid-solo'>"+	
					"<div class='ui-block-a'><h2 id='q"+a+"' class='kumpsoal'></h2></div>"+
				"</div>"+
				"<div class='ui-grid-a' >"+
					"<div class='ui-block-a'><button id='pil"+a+"a' class='ui-btn ui-btn-icon-left ui-icon-opa ui-nodisc-icon' onclick='ans"+a+"(this)' data-rel='back'>Ya</button></div>"+				
					"<div class='ui-block-b'><button id='pil"+a+"b' class='ui-btn ui-btn-icon-left ui-icon-opb ui-nodisc-icon' onclick='ans"+a+"(this)' data-rel='back'>Ya</button></div>"+		
					"<div class='ui-block-a'><button id='pil"+a+"c' class='ui-btn ui-btn-icon-left ui-icon-opc ui-nodisc-icon' onclick='ans"+a+"(this)' data-rel='back'>Ya</button></div>"+			
					"<div class='ui-block-b'><button id='pil"+a+"d' class='ui-btn ui-btn-icon-left ui-icon-opd ui-nodisc-icon' onclick='ans"+a+"(this)' data-rel='back'>Ya</button></div>"+		
					"<div class='ui-block-a'><button id='pil"+a+"e' class='ui-btn-icon-left ui-icon-ope ui-nodisc-icon ui-btn' onclick='ans"+a+"(this)' data-rel='back'>Ya</button></div>"+	
				"</div>"+
			"</div>"+    
    "</div>")
}

var c1=[
		["Berapakah kecepatan benda saat berada pada titik tertinggi? ","Sebesar Vx","Nol","Sebesar Vo","Sebesar Vy","Tidak ada jawabannya","Sebesar Vx"],
		["Dalam gerak peluru kecepatan pada arah sumbu x adalah...","Dipercepat","Konstan","Diperlambat","Nol","Dipercepat dan diperlambat","Konstan"],
		["Dalam gerak peluru kecepatan pada arah sumbu y adalah...","Konstan","Dipercepat","Diperlambat","Nol","Dipercepat dan diperlambat","Dipercepat dan diperlambat"],
		["Perhatikan macam-macam olahraga berikut:<br><ol><li>Voli</li><li>Ping Pong</li><li>Berenang</li><li>Balap lari</li></ol>Pemanfaatan gerak peluru ada pada nomor?","1,3","2,4","1,2","3,4","1,4","1,2"],
		["<ol><li>Kecepatan</li><li>Arah tembak</li><li>Gaya gravitasi</li><li>Hanya 1 dan 2</li></ol>Besaran mana saja yang mempengaruhi gerak peluru?","1 benar","2 benar","1 dan 3 benar","1,2 dan 3 benar","4 benar","kunci"],
]

var c2=[
		["Manakah yang lebih capat sampai ke tanah","Gerah jatuh bebas","Gerak ","Bersamaan","pil4","pil5","kunci","img"],
		["soal 2","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 3","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 4","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 5","pil1","pil2","pil3","pil4","pil5","kunci","img"],
]

var c3=[
		["soal 1","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 2","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 3","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 4","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 5","pil1","pil2","pil3","pil4","pil5","kunci","img"],
]

var c4=[
		["soal 1","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 2","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 3","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 4","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 5","pil1","pil2","pil3","pil4","pil5","kunci","img"],
]

var c5=[
		["soal 1","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 2","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 3","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 4","pil1","pil2","pil3","pil4","pil5","kunci","img"],
		["soal 5","pil1","pil2","pil3","pil4","pil5","kunci","img"],
]

var pi=[1,2,3,4,5];
var bon=[1,2,3,4];
shuffle(pi);
shuffle(bon);





for (boda=1;boda<=5;boda++) {
	shuffle(window['c'+boda]);
	//console.log(boda);
if (window['c'+boda][0][7]!="img") {
document.getElementById('q'+boda).innerHTML=window['c'+boda][0][0];
}else {
document.getElementById('q'+boda).innerHTML="<img src="+window['c'+boda][0][8]+" class='gamsoal' height=200><br>"+window['c'+boda][0][0];
}
document.getElementById("pil"+boda+"a").value=window['c'+boda][0][pi[0]];
document.getElementById("pil"+boda+"b").value=window['c'+boda][0][pi[1]];
document.getElementById("pil"+boda+"c").value=window['c'+boda][0][pi[2]];
document.getElementById("pil"+boda+"d").value=window['c'+boda][0][pi[3]];
document.getElementById("pil"+boda+"e").value=window['c'+boda][0][pi[4]];

document.getElementById("pil"+boda+"a").innerHTML=window['c'+boda][0][pi[0]];
document.getElementById("pil"+boda+"b").innerHTML=window['c'+boda][0][pi[1]];
document.getElementById("pil"+boda+"c").innerHTML=window['c'+boda][0][pi[2]];
document.getElementById("pil"+boda+"d").innerHTML=window['c'+boda][0][pi[3]];
document.getElementById("pil"+boda+"e").innerHTML=window['c'+boda][0][pi[4]];

}



//============================button 1 func===============
var nilai=0;
function ans1(click1) {

var jaw1=confirm("Apa kamu yakin dengan jawabanmu?");
if (jaw1==true) {
 	if (click1.value==c1[0][6]) {
 	 nilai+=20;	
 		}else {
 	 nilai+=0;
 		}
 		 $('#skor').html(nilai);
 window.location.replace("#latihan");
 $('#soal1').addClass('ui-disabled');
 $('.answer1').append('<br>terjawab')
}
}
//============================button 2 func===============
function ans2(click2) {

var jaw2=confirm("Apa kamu yakin dengan jawabanmu?");
if (jaw2==true) {
 	if (click2.value==c2[0][6]) {
 	 nilai+=20;	
 		}else {
 	 nilai+=0;
 		}
 		 $('#skor').html(nilai);
 window.location.replace("#latihan");
 $('#soal2').addClass('ui-disabled');
 $('.answer2').append('<br>terjawab')
}
}
//============================button 3 func===============
function ans3(click3) {

var jaw3=confirm("Apa kamu yakin dengan jawabanmu?");
if (jaw3==true) {
 	if (click3.value==c3[0][6]) {
 	 nilai+=20;	
 		}else {
 	 nilai+=0;
 		}
 		 $('#skor').html(nilai);
 window.location.replace("#latihan");
 $('#soal3').addClass('ui-disabled');
 $('.answer3').append('<br>terjawab')
}
}
//============================button 4 func===============

function ans4(click4) {

var jaw4=confirm("Apa kamu yakin dengan jawabanmu?");
if (jaw4==true) {
 	if (click4.value==c4[0][6]) {
 	 nilai+=20;	
 		}else {
 	 nilai+=0;
 		}
 		 $('#skor').html(nilai);
 window.location.replace("#latihan");
 $('#soal4').addClass('ui-disabled');
 $('.answer4').append('<br>terjawab')
}
}
//============================button 5 func===============

function ans5(click5) {

var jaw5=confirm("Apa kamu yakin dengan jawabanmu?");
if (jaw5==true) {
 	if (click5.value==c5[0][6]) {
 	 nilai+=20;
 		}else {
 	 nilai+=0;
 		}
 		 $('#skor').html(nilai);
 window.location.replace("#latihan");
 $('#soal5').addClass('ui-disabled');
 $('.answer5').append('<br>terjawab')
}
}
