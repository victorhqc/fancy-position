#!/usr/bin/env node
const wordSources = require('./sources');
const { generateTechPosition } = require('./index');

process.stdout.write(`${generateTechPosition(wordSources)}\n`);
