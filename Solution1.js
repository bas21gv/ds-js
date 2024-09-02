function MyQueue() {
    let stack1 = [];
    let stack2 = [];

    function peek() {
        return stack1[stack1.length - 1];
    }

    function size() {
        return stack1.length;
    }

    function isEmpty() {
        return stack1.length === 0;
    }

    function enqueue(value) {
        while(stack1.length > 0) {
            stack2.push(stack1.pop());
        }
        stack1.push(value);
        while(stack2.length > 0) {
            stack1.push(stack2.pop());
        }
    }

    function dequeue() {
        if (stack1.length === 0) {
            return "queue is empty";
        }
        return stack1.pop();
    }

    return {peek, size, isEmpty, enqueue, dequeue};
}

const myQueue = MyQueue();
myQueue.enqueue(4);
myQueue.enqueue(2);
myQueue.enqueue(7);
console.log(myQueue.size());
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());