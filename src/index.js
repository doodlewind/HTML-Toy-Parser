import lexer from './lexer'
import parser from './parser'
import generator from './generator'
// import mockData from './mock-data'

generator.initBrowser(lexer, parser)
