class stack {
    constructor() {
        this.arr = []
    }
    push(el) {
        this.arr.push(el)
    }
    pop() {
        if (this.isempty()) {
            return underflow;
        }
        else {
            return this.arr.pop();
        }
    }
    isempty() {
        if (this.arr.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}


let stk = new stack();
let str = "hello";
let ans = "";




for (let char of str) {
    stk.push(char)
}
while (stk.isempty() == false) {
    ans += stk.pop()
}
console.log(ans)