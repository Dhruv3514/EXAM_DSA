class stack {
    constructor() {
        this.q1 = []
        this.q2 = []
    }
    push(el) {
        this.q2.push(el)
    }
    pop() {
        if (this.isempty()) {
            console.log("underflow")
        }
        else {
            return this.q1.shift();
        }
    }
    top(){
        if(this.isempty()){
            return 
        }
        return this.q1[0]
    }
    isempty() {
        if (this.q1.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    size(){
        return this.q1.length;
    }
}


let stk = new stack();
stk.push(1);
stk.push(2);
console.log(stk.top());
console.log(stk.pop());
console.log(stk.top());
console.log(stk.isempty());

stk.pop();
console.log(stk.isempty());


