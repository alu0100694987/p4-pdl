
Object.constructor.error = function (message, t) {
  
  t = t || this;
  t.name = " Syntax Error ";
  t.message = message;
  throw t;
};

function main() {

  var parse = make_parse();
  
  var source = input.value;
  var string, tree;
    
  try {
    tree = parse(source);
    string = JSON.stringify(tree, ['key', 'name', 'message',
                                   'value', 'arity', 'first', 'second', 'third', 'fourth'], 2);
  } catch (e) {
    string = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                                  'value', 'arity', 'first', 'second', 'third', 'fourth'], 2);
  }
  
  output.innerHTML = string.replace(/&/g, '&amp;').replace(/[<]/g, '&lt;');

};

window.onload = function() {
  
  parse.onclick = main;
}
