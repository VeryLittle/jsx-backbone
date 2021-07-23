const fs = require('fs');
const buildJsx = require('./dist/main').buildJsx;
const Parser = require('acorn').Parser;
const jsx = require('acorn-jsx');
const astring = require('astring');

var doc = fs.readFileSync('example.jsx');

var tree = Parser.extend(jsx()).parse(doc, {
    sourceType: 'module',
    ecmaVersion: 2020
})
buildJsx(tree, {pragma: 'hyperscript', pragmaFrag: 'null'})

fs.writeFileSync('dist/templates.js', astring.generate(tree))