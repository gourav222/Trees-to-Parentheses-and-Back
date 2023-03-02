class Tree {}
class Leaf extends Tree {}
class Branch extends Tree {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
}

function treeToParens(tree) {
  if (tree instanceof Leaf) {
    return "()";
  } else {
    const left = treeToParens(tree.left);
    const right = treeToParens(tree.right);
    return `(${left})(${right})`;
  }
}

function parensToTree(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (c === "(") {
      stack.push(null);
    } else if (c === ")") {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(new Branch(left, right));
    }
  }
  return stack.pop();
}

const tree = new Branch(new Leaf(), new Branch(new Leaf(), new Leaf()));
const parens = treeToParens(tree);
console.log(parens);

const tree2 = parensToTree(parens);
const parens2 = treeToParens(tree2);
console.log(parens2);

console.log(parens === parens2);
-console.log(JSON.stringify(tree) === JSON.stringify(tree2));
console.log(parensToTree(treeToParens(tree2)));
