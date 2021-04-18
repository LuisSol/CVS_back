const parse = require('csv-parse')
const { promisify } = require('util')
const fs = require('fs')
const { pick } = require('lodash')

const parseCVS = promisify(parse)

const makeParseFile = require('./parse-file')
const requiredRows = require('../configuration/required-columns')

const parseFile = makeParseFile({ utils: { parseCVS, fs, pick }, configuration: { requiredRows } })

module.exports = Object.freeze({ parseFile })
