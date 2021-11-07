node = {key: 1, left: { key:2, left:{key:4}, right: {key:5, right: {key: 6}}   }, right:{key:3} }

function printleftview(node, level, a){

    if (node == null)
        return;



    let con = !a.includes(level);
    console.log('---------', con, a);
    if (con) {
        console.log(node.key, level);
    }
    a.push(level);
    level = level +1;
    printleftview(node.left, level, a);
    printleftview(node.right, level, a);
}

printleftview(node, 0, []);
