

// In satck push and pop operation

let stack = []
let currentSize = stack.length
let max = 5

function push(newVal) {
    if (currentSize >= max) {
        console.log(`can't add ${newVal} because stack is full `)
    }
    else {
        stack[currentSize] = newVal;
        currentSize++
        console.log(stack) 
    }

}
function pop() {
    if (currentSize > 0) {
        currentSize--
        stack.length = currentSize
        console.log(stack)
    }
    else {
        console.log("Stack is already empty")
    }
}

push(23)
push(12)
push(29)
push(11)
push(1)
push(2)
push(3)
pop()
pop()
pop()
pop()
pop()


