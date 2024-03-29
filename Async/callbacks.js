function hello(name, myCallback) {
    setTimeout(function () {
        console.log('Hello, ' + name);
        myCallback();
    }, 1000)
}

function bye(name, otherCallback) {
    setTimeout(function () {
        console.log('Bye, ' + name);
        otherCallback();
    }, 1000)
}

console.log('Iniciate process...');
hello('Metallica', function() {
    bye('name', function(){
        console.log('finish the process...')
    })
    
})