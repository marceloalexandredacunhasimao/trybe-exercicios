// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function desabilitaPadrao(event){
	event.preventDefault();
}

function somenteA(event){
	if(event.key != 'a'){
		event.preventDefault();
	}
}

HREF_LINK.addEventListener('click',desabilitaPadrao);
INPUT_CHECKBOX.addEventListener('click',desabilitaPadrao);
INPUT_TEXT.addEventListener('keypress',somenteA);
