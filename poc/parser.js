var tokens, currIndex, lookahead

function nextToken() {
  return tokens[++currIndex]
}

function match(terminalType) {
  if (lookahead && terminalType === lookahead.type) lookahead = nextToken()
  else throw 'SyntaxError'
}

const NT = {
  html() { while (lookahead) NT.tag() },
  tag() {
    match('TagOpen')
    lookahead.type == 'TagOpen' ? NT.tag() : match('Value')
    match('TagClose')
    console.log('tag matched')
  }
}

export default {
  parse(t) {
    tokens = t, currIndex = 0, lookahead = tokens[currIndex]
    NT.html()
  }
}