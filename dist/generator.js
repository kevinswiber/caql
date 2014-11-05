var file = require('read-file');

var ebnfParser = require('ebnf-parser');
var lexParser = require('lex-parser');
var Generator = require('jison').Generator;

var grammarFile = '../caql.yy';
var lexFile = '../caql.l';

var grammar = ebnfParser.parse(file.readFileSync(grammarFile));
grammar.lex = lexParser.parse(file.readFileSync(lexFile));

var opts = {
  moduleName: 'caql',
  moduleType: 'js'
};

var generator = new Generator(grammar, opts);
var parserSource = generator.generate(opts);

process.stdout.write(parserSource);
