#!/usr/bin/env node
let module = "module.exports = `\n";

process.stdin.on('data', function(chunk){
  module += chunk;
});

process.stdin.on('end', function(){
  module += '\n`;';
  console.log(module);
});
