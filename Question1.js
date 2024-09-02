function createQueue() {
    let stack1 = [];
    let stack2 = [];

    return {
        peek: function() {
            return stack1[stack1.length - 1];
        },
        enqueue: function(value) {
            while (stack1.length > 0) {
                stack2.push(stack1.pop());
            }
            stack1.push(value);
            while (stack2.length > 0) {
                stack1.push(stack2.pop());
            }
        },
        dequeue: function() {
            if (stack1.length === 0) {
                return "Queue is empty";
            }
            return stack1.pop();
        },
        isEmpty: function() {
            return stack1.length === 0;
        },
        size: function() {
            return stack1.length;
        }
    };
}

// Example usage:
const queue = createQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Outputs the dequeued value
console.log(queue.peek()); // Outputs the current front of the queue
console.log(queue.dequeue()); // Outputs the dequeued value
console.log(queue.isEmpty()); // Outputs true if queue is empty, false otherwise
console.log(queue.size()); // Outputs the current size of the queue