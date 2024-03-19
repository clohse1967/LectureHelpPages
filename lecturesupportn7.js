theanswer=""
attempts=0
tried=0
anrs=0
corrt=0
totl=0
function mainstart(){
	whatbrowser()
	setrefs()
}
function whatbrowser(){
	if(document.layers)thisbrowser="NN4";
	if(document.all)thisbrowser="IE";
	if(!document.all && document.getElementById)thisbrowser="NN7";
	cleanse()
	}
function showquest(thequest){
	if(thisbrowser=="IE"){
		qspot.innerHTML=thequest
		}
	else{
		if(thisbrowser=="NN4"){
		document.qspot.document.open()
		document.qspot.document.write(thequest)
		document.qspot.document.close()
		}
		else{
			document.getElementById("qspot").innerHTML=thequest
			}
		}
}
function showanswer(){
	if(attempts>=3){
	tried=1
	if(thisbrowser=="IE"){
		ansspot.innerHTML=theanswer
		}
	else{
		if(thisbrowser=="NN4"){
		document.ansspot.document.open()
		document.ansspot.document.write(theanswer)
		document.ansspot.document.close()
		}
		else{
			document.getElementById("ansspot").innerHTML=theanswer
			}
		}
}}
function cleanse(){
	clear()
	document.forms[0].total.value=0
	document.forms[0].correct.value=0
}
function clear(){
	clearansspot()
	document.forms[0].results.value=""
	document.forms[0].theans.value=""
	attempts=0
	tried=0
}
function clearansspot(){
	if(thisbrowser=="IE"){
		ansspot.innerHTML=""
		}
	else{
		if(thisbrowser=="NN4"){
		document.qspot.document.open()
		document.qspot.document.write("")
		document.qspot.document.close()
		}
		else{
			document.getElementById("ansspot").innerHTML=""
			}
		}
}