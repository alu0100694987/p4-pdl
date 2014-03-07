
var assert = chai.assert;

    suite('Tokens', function(){
      test('RegExp.bexec()', function(){
	var input = "Hola";
	    var regexp = /ba/;
	    regexp.lastIndex = 0;
    
	    assert.equal(regexp.bexec(input), null);
      });
    
      test('String.tokens()', function(){
	var input = "var a = b;";
	var resultado = "[{\"type\":\"name\",\"value\":\"var\",\"from\":0,\"to\":3},{\"type\":\"name\",\"value\":\"a\",\"from\":4,\"to\":5},{\"type\":\"operator\",\"value\":\"=\",\"from\":6,\"to\":7},{\"type\":\"name\",\"value\":\"b\",\"from\":8,\"to\":9},{\"type\":\"operator\",\"value\":\";\",\"from\":9,\"to\":10}]";
	    var resultado = JSON.stringify(input.tokens());
    
	    assert.equal(resultado, resultado);
      });

      test('String.tokens():  Error', function(){
	var input = "#ERROR#";
	var resultado = " Syntax error: (\'#ERROR#\') ";
	chai.expect(function () { input.tokens() }).to.throw(resultado);
     });
      	
	test('Probando dump', function() {
			dump("fichero3.txt");
			window.onload=function(){assert.equal($("#input").val(), "var a = 3*6;\nvar b = 1&5;\nvar c = b%a;");}
		});
});

suite('Parser', function(){
  test('Parser', function(){
    var parse = make_parse();
	var input = "var i = 56;";
	var esperado = "{\n    \"value\": \"=\",\n    \"arity\": \"binary\",\n    \"first\": {\n        \"value\": \"i\",\n        \"arity\": \"name\"\n    },\n    \"second\": {\n        \"value\": 56,\n        \"arity\": \"literal\"\n    }\n}";

	var resultado, tree;
    try {
      tree = parse(input);
      resultado = JSON.stringify(tree, ['key', 'name', 'message',
           'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    } catch (e) {
      resultado = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
              'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    }

	assert.equal(esperado, resultado);
  });
  
  test('Parser: comentarios', function() {
      var parse = make_parse();
      var input = "/* Esto es un comentario */";
      var str, tree;
      try {
	  tree = parse(input);
	  str = JSON.stringify(tree, ['key', 'name', 'message',
	      'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      } catch (e) {
	  str = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
                'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
      }
      assert.deepEqual(str, "null");
    });
  
  test('Parser: Errores', function(){
    var parse = make_parse();
	var input = "error = $;";
	var esperado = "\" Syntax error: (\'$;\') \"";

	var resultado, tree;
    try {
      tree = parse(input);
      resultado = JSON.stringify(tree, ['key', 'name', 'message',
           'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    } catch (e) {
      resultado = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
              'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
    }

	assert.equal(esperado, resultado);
  });
});
