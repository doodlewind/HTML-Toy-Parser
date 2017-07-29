function trim (str) { return str.replace(/^<|>$/g, '') }

function renderNode (target, nodes) {
  nodes.forEach(node => {
    let newNode = document.createElement(trim(node.type))
    if (!node.val) newNode = renderNode(newNode, node.children)
    else newNode.innerHTML = node.val
    target.appendChild(newNode)
  })
  return target
}

function render (dom, targetId) {
  let target = document.getElementById(targetId)
  target.innerHTML = ''
  renderNode(target, dom.children)
}

export default {
  render,
  initBrowser (lexer, parser) {
    document.getElementById('compile').addEventListener('click', () => {
      let template = document.getElementById('html-template').value
      try {
        let tokens = lexer.lex(template)
        let dom = parser.parse(tokens)
        console.log(dom)
        render(dom, 'target')
      } catch (e) { window.alert(e) }
    }, false)
  }
}
