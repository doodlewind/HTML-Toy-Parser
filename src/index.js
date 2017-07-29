import lexer from './lexer'
import parser from './parser'
import generator from './generator'
import mockData from './mock-data'

if (typeof window === 'undefined') {
  let tokens = lexer.lex(mockData.template)
  let dom = parser.parse(tokens)
  console.log(JSON.stringify(dom, null, 2))
} else generator.initBrowser(lexer, parser)
