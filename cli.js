#!/usr/bin/env node

const mdLinks = require('./index.js');


const [,, ... args] = process.argv;

const path = (args[0]);

mdLinks(path);