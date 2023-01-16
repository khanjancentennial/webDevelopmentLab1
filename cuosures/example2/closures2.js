function outterFunction() {
    const message = 'Hello Closures 2';
    function innerFuction() {
    alert (message);
    }
    return innerFuction;
    }
    const childFN = outterFunction();
    childFN();