let Node = (x_coord, y_coord, path) => {
    if (x_coord > 7 || x_coord < 0 || y_coord < 0 || y_coord > 7 ){
        return null;
    }
    return {x_coord, y_coord, path}
}



function Chess([x, y], [a, b]){
    let start = Node(x, y, [[x, y]])
    console.log(start)
    let queue = [start]

    let visited = new Set();

    while (queue.length > 0){

        let currentNode = queue.shift()
        let moves = newNodes(currentNode)
        

        
        let moves_ = cleanUp(moves, currentNode)
        if (currentNode.x_coord == a && currentNode.y_coord == b){
            console.log(`Completed in ${currentNode.path.length} moves`)
            console.log(currentNode)
            return currentNode;
        }


        moves_.forEach((move) => {
            if (!visited.has(move)){
                visited.add(move)
                queue.push(move)
                
            }
        })

    }   
}

function newNodes(prevNode){

    let new_nodes = [
        [prevNode.x_coord + 1, prevNode.y_coord + 2],
        [prevNode.x_coord + -1, prevNode.y_coord + 2],
        [prevNode.x_coord + 1, prevNode.y_coord + -2],
        [prevNode.x_coord + -1, prevNode.y_coord + -2],
        [prevNode.x_coord + 2, prevNode.y_coord + 1],
        [prevNode.x_coord + -2, prevNode.y_coord + 1],
        [prevNode.x_coord + 2, prevNode.y_coord + -1],
        [prevNode.x_coord + -2, prevNode.y_coord + -1],

    ]
    return new_nodes
}

function cleanUp(arr, prevNode){
    let results = []
    let new_moves = []
    
    arr.forEach((item) => {
        let nodes = Node(item[0], item[1], prevNode.path.concat([item]) )
        new_moves.push(nodes)
    })

    new_moves.forEach((item) => {
        if (item !== null){
            results.push(item)
        }
    })

    return results
}



Chess([5,6], [5,4])