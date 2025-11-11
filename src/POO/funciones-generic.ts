(()=>{

    function generic<T>(valor: T){
        return valor;
    }

    const value = generic("Janer");
    console.log(value);
    console.log( generic<number>(0));
})();