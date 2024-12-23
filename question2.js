let queue = [10, 20, 30, 40, 50, 60, 70];

function reverseQueue(queue) {
    let stack = [];
    
    while (queue.length > 0) {
        stack.push(queue.shift());
    }
    
    while (stack.length > 0) {
        queue.push(stack.pop());
    }
    
    return queue;
}

console.log(reverseQueue(queue));