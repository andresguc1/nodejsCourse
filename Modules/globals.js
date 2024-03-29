let i = 0
let Interval = setInterval(function () {
    console.log('Hello Again')
    if (i === 2) {
        clearInterval(Interval)
    }
    i++
})

setImmediate(function() {
    console.log('Hi')
})


console.log(process)
console.log(__dirname)
console.log(__filename)


globalThis.myVariable = "Any valor here"
console.log(myVariable)
