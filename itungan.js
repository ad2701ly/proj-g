function puse() {
jeda=0;
}

function cleant() {
	$('#sim').setLayer('ball',{
	x:cxnol, y:cynol
})
.drawLayers();

va=[];
suda=[];
v=0;
sud=0;
jeda=0;
t=0;
vx=0;
vy=0;
s=0;
h=0;
}

//Fisher-yates shuffle
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function res() {
	jeda=0.1;
}
function deg2rad (sud){
	var rad=sud*Math.PI/180;
	return rad;
}
function rad2deg (rad){
	var sud=rad*180/Math.PI;
	return sud;
}

function transx (xc){
	var xl= (cwid*(xc-xmin))/(xmax-xmin);
	return xl;
}
function transy (yc){
	var yl= (chei*(yc-ymax))/(ymin-ymax);
	return yl;
}

function tbmax(v,sud) {
	var tmax=2*(v*Math.sin(deg2rad(sud)))/(9.8);
	return tmax;
}



function start() {
	
	v=document.getElementById('v').value;
	sud=document.getElementById('sud').value;
	t=0; 
	h=0;
	s=0;
	grav=9.8;
	jeda=0.1;
	vx=Math.round(v*Math.cos(deg2rad(sud)));
	vy=Math.round(v*Math.sin(deg2rad(sud)));
	va.push(v);
	suda.push(sud);
	//alert("vx = "+ vx+"; vy = "+vy+"; sudut = "+sud)
}


		
function rese() {

	$('canvas').setLayer('ball',{
	x:cxnol, y:cynol
	})
	.drawLayers();
s=0;
h=0;
v=0;
t=0;


if (jeda!=0) {
	va.splice(va.length -1,1);
	suda.splice(suda.length -1,1);
	jeda=0;
	}else {
	jeda=0;
	}	

}



function update() {
//ball vector

$('canvas').setLayer('vecx',{
	visible:true,
	x:transx(s), y:transy(h),
	a1:90, l1:vx
})

$('canvas').setLayer('vecy',{
	visible:true,
	x:transx(s), y:transy(h),
	a1:0, l1:vy
	
})

if(vx<0){
	var ar=-rad2deg(Math.atan(vy/vx))+270
}else {
	var ar=-rad2deg(Math.atan(vy/vx))+90	
}
vr=Math.sqrt((vx*vx)+(vy*vy));
$('canvas').setLayer('vecr',{
	visible:true,
	x:transx(s), y:transy(h),
	a1:ar, l1:vr
})	
	
	
	
$('#sim').setLayer('ball',{
	x:transx(s), y:transy(h)
})
.drawLayers();

	//update t
	
	t+=jeda;	
	t=Math.round(t*100)/100;	
	
	//update s & h
	s+=vx*jeda;
	s=Math.round(s*100)/100;
	h+=vy*jeda;
	h=Math.round(h*100)/100;
	
	//update vx & vy & vr
	vy-=grav*jeda;
	Math.round(Math.abs(vy*100)/100);
	//alert(vya);	
	vr=Math.sqrt((vx*vx)+(vy*vy));
	Math.round(vr*100)/100;
	if (h<0) {
			//vx=0;
			//vy=0;
			//vr=0;
			jeda=0;
			

	}
	document.getElementById('vym').value=Math.abs(vy);
	//document.getElementById('vy').innerHTML=Math.abs(vy);
	
	document.getElementById('vxm').value=Math.abs(vx);
	//document.getElementById('vx').innerHTML=Math.abs(vx);
	
	document.getElementById('vrm').value=Math.abs(vr);
	//document.getElementById('vr').innerHTML=Math.abs(vr);

for (m=0;m<=t;m++) {
		$('#sim').drawArc({
		strokeStyle:'Black',
		strokeWidth:'5',
		x:transx(v*Math.cos(deg2rad(sud))*m), 
		y:transy(v*Math.sin(deg2rad(sud))*m-(grav*m*m/2)),
		radius:15,
	})	
}	

// Lintasan
if (va.length>1 && suda.length>1) {
	for (i=va.length-2;i<va.length-1;i++) {
	for (loc=0;loc<=tbmax(va[i],suda[i]);loc++) {
		$('#sim').drawArc({
		strokeStyle:'Black',
		strokeWidth:'5',
		x:transx(va[i]*Math.cos(deg2rad(suda[i]))*loc), 
		y:transy(va[i]*Math.sin(deg2rad(suda[i]))*loc-(grav*loc*loc/2)),
		radius:15,
	})
	}
	}
}



}