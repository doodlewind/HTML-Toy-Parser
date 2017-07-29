const TagClose = new RegExp(/^<\/[\w]+>/)
const TagOpen = new RegExp(/^<[\w]+>/)
const Value = new RegExp(/^[^<]+/)

function trim (str) {
  return str.replace(/^\s+|\s+$/, '')
}

function getToken (str) {
  if (str.match(TagClose)) {
    return { type: 'TagClose', val: str.match(TagClose)[0] }
  } else if (str.match(TagOpen)) {
    return { type: 'TagOpen', val: str.match(TagOpen)[0] }
  } else if (str.match(Value)) {
    return { type: 'Value', val: str.match(Value)[0] }
  }
  throw Error('LexicalError')
}

export default {
  lex (template) {
    let tokens = []
    let token
    while (template.length > 0) {
      template = trim(template)
      token = getToken(template)
      template = template.substr(token.val.length)
      token.val = trim(token.val)
      tokens.push(token)
    }
    return tokens
  }
}
