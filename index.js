onload=function(){
var btn = document.getElementById('convertBtn');
btn.addEventListener('click',convert,false);
}
function convert(){
	var text = document.getElementById('inputData').value;
	var image = document.getElementById('placeHolder');
	placeHolder.src = "data:image/png;base64,"+text;
}