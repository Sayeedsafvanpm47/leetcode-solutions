
console.log(inorder.slice(rootIndex))
root.left = buildTree(preorder.slice(0,rootIndex),inorder.slice(0,rootIndex))
root.right = buildTree(preorder.slice(rootIndex),inorder.slice(rootIndex+1))
console.log(preorder.slice(rootIndex))
console.log(inorder.slice(0,rootIndex))
console.log(preorder.slice(0,rootIndex))
console.log(rootIndex)
const rootIndex = inorder.indexOf(rootVal)
return root
};
[
