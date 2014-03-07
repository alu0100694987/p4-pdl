
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
	    var resultado_str = JSON.stringify(input.tokens());
    
	    assert.equal(resultado, resultado_str);
      });

      test('String.tokens():  Error', function(){
	var input_str = "#ERROR#";
	var resultado_str = " Syntax error: (\'#ERROR#\') ";
	chai.expect(function () { input_str.tokens() }).to.throw(resultado_str);
     });
      	
	test('Probando dump', function() {
			dump("fichero3.txt");
			window.onload=function(){assert.equal($("#input").val(), "var a = 3*6;\nvar b = 1&5;\nvar c = b%a;");}
		});
});
    

