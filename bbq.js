#!/usr/bin/env node

var commander = require("commander");
var connect = require("connect");
var pkg = require("./package.json");
var path = require("path");

commander
  .version(pkg.version)
  .option("-p, --port [port]", "specify port (default 9999)")
  .parse(process.argv);

var port = commander.port || 9999;
var root = path.resolve(".");

console.log("Starting server on port "+port+" in directory "+root);

connect().use(connect.static(root)).listen(port);
