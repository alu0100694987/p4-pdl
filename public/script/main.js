
Object.prototype.error = function (message, t) {
  
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
};

window.onload = function() {
  
  parse.onclick = main;
}
