function toque(){

	document.getElementById('menu_mobile')
	.style.display='flex'

	document.getElementById('btn_on')
	.style.display='none'

	document.getElementById('btn_off')
	.style.display='inline'
}

function toqueoff(){
	
    document.getElementById('btn_off')
    .style.display='none'

	document.getElementById('menu_mobile')
	.style.display='none'

	document.getElementById('btn_on')
	.style.display='inline'
}