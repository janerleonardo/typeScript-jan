"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemClass_1 = require("./ItemClass");
(() => {
    let item = new ItemClass_1.Items("Prueba", 1);
    console.log(item.toString());
    item.setCreateAt(new Date(2023, 2, 17));
    console.log(item.toString());
})();
