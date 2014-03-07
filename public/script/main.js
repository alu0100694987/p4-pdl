
Object.constructor.error = function (message, t) {
  
  t = t || this;
  t.name = " Syntax Error ";
  t.message = message;
  throw t;
};

function main() {

  var source = " " + input.value;
  var string, tree;
  
  
  try {
    
    tree = source.tokens();
    string = JSON.stringify(tree, ['type', 'value', 'from', 'to'],  6);
    
  } catch (e) {
    
    string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                                'value', 'arity', 'first', 'second', 'third', 'fourth'], 2);
  }
  
  output.innerHTML = string.replace(/&/g, '&amp;').replace(/[<]/g, '&lt;');
  /*OUTPUT.className = "unhidden";
	if (window.localStorage) {
	  localStorage.INPUT = source;
	  localStorage.OUTPUT = OUTPUT.innerHTML;
	}*/
};

window.onload = function() {
  
  parse.onclick = main;
/*  if (window.localStorage && localStorage.INPUT && localStorage.OUTPUT) {
       document.getElementById("INPUT").innerHTML = localStorage.INPUT;
       document.getElementById("OUTPUT").innerHTML = localStorage.OUTPUT;
       document.getElementById("OUTPUT").className = "unhidden";
    }*/
}
