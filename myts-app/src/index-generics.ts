//Generics
/**build queue data sturcture */
// class Queue {
//     private data = [];
//     push = item => this.data.push(item);
//     pop = () => this.data.shift();
// }
// const queue = new Queue();
// queue.push(10.7899); //pushing number
// queue.push("111.8999"); //pushing string

// console.log(queue.pop().toFixed(1));
// console.log(queue.pop().toFixed(1));

//here the above throws runtime error. we need to fix this during development cycle
//or compile time.
//Generics

class Queue<T> {
    private data = [];
    push = (item: T) => this.data.push(item);
    pop = (): T => this.data.shift();
}
const numQueue = new Queue<number>();
numQueue.push(10.7899); //pushing number
//numQueue.push("111.8999"); //pushing string

console.log(numQueue.pop().toFixed(1));

const messageQueue = new Queue<string>();
for (let i = 0; i < 10; i++) {
    messageQueue.push(`Hello ${i}`)
}

for (let i = 0; i < 10; i++) {
    console.log(messageQueue.pop());
}


