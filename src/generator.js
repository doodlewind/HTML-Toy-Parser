// 修改匹配所用正则
function trim (str) {
  return str.replace(/^<|>$/g, '').split(' ')[0]
}
function getClassName (str) {
  const re = /class='(\w)+'/
  if (re.test(str)) {
    return str.match(re)[0].replace("class='", '').replace("'", '')
  } else return null
}

// 添加 className 至渲染属性中
function renderNode ($target, nodes) {
  nodes.forEach(node => {
    const className = getClassName(node.type)
    let newNode = document.createElement(trim(node.type))
    if (className) newNode.classList.add(className)
    if (!node.val) newNode = renderNode(newNode, node.children)
    else newNode.innerText = node.val
    $target.appendChild(newNode)
  })
  return $target
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
        let ast = parser.parse(tokens)
        render(ast, 'target')
      } catch (e) { window.alert(e) }
    }, false)
  }
}
