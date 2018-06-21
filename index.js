#!/usr/bin/env node
let src = "module.exports = `\n";

process.stdin.on('data', function(chunk){
  src += chunk;
});

process.stdin.on('end', function(){
  src += '\n`;';
  console.log(src);
});
