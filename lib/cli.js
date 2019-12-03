#!/usr/bin/env node
const mdLink = require('./index.js')

mdLink()
.then((result) => console.log(result))
.catch((error) => console.log(error))