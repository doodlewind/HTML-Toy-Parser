let tokens, currIndex, lookahead

function nextToken () {
  return tokens[++currIndex]
}

function match (terminalType) {
  if (lookahead && terminalType === lookahead.type) lookahead = nextToken()
  else throw Error('SyntaxError')
}

const NT = {
  html () {
    let dom = { type: 'html', val: null, children: [] }
    return NT.tags(dom)
  },
  tags (currNode) {
    /* eslint-disable no-unmodified-loop-condition */
    while (lookahead) {
      let tagNode = { type: lookahead.val, val: null, children: [] }
      tagNode = NT.tag(tagNode)

      currNode.children.push(tagNode)
      if (lookahead && lookahead.type === 'TagClose') break
    }
    return currNode
  },
  tag (currNode) {
    match('TagOpen')
    if (lookahead.type === 'TagOpen') {
      currNode = NT.tags(currNode)
    } else {
      currNode.val = lookahead.val
      match('Value')
    }
    match('TagClose')
    return currNode
  }
}

export default {
  parse (t) {
    tokens = t
    currIndex = 0
    lookahead = tokens[currIndex]
    return NT.html()
  }
}
