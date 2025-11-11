import {Items } from  './ItemClass'
(()=>{
    let item =  new Items("Prueba",1);
    console.log(item.toString());


    item.setCreateAt(new Date(2023, 2, 17));
    console.log(item.toString());


})();