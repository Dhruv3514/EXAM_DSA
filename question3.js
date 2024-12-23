function nextGreaterElement(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1); 
    let stack = []; 

    for (let i = 0; i < n; i++) {
    
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            let index = stack.pop(); 
            result[index] = arr[i];
        }
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        if (result[i] !== -1) { 
            for (let j = 0; j < i; j++) { 
                if (arr[j] > result[i]) { 
                    break; 
                }
            }
        }
    }

    return result;
}

let output = nextGreaterElement([4,5,2,25]);
console.log(output); 