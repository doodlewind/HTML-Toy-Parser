let tokens;
let currIndex = -1;

function html(){
  let tree = {type:'<html>',val:null,children:[]};
  tags(tree);
  return tree;
}

function tags(parentNode){
  while(tokens[++currIndex]){
    let currNode = {
      type:null,
      val:null,
      children:[],
    };
    switch(tokens[currIndex].type){
      case 'TagOpen':
        currNode.type = tokens[currIndex].val;
        parentNode.children.push(currNode);
        tags(currNode);
        break;
      case 'Value':
        parentNode.val = tokens[currIndex].val;
        break;
      case 'TagClose':
        //parentNode.children.push(currNode);
        return;
      default:
        throw new Error('SyntaxError');
    } 
  }
}

export default {
  parse(t){
    tokens = t; 
    //currIndex = -1 ;
    return html();
  }
}