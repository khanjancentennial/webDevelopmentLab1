function outterFunction() {
    const message = 'First Example of Closures';
    function innerFuction() {
    alert (message);
    }
    innerFuction();
    }
    outterFunction();