"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
class Items extends Object {
    description;
    id; // public tatno si lo pones o no
    createAt; //Accesible de la clase o subclase la que heredan
    expirationDate = new Date(); // solo se accede desde la misma clase.
    constructor(descripcion, id, createAt = new Date()) {
        super();
        this.description = descripcion;
        this.id = id;
        this.createAt = createAt;
    }
    toString() {
        return `Items(${this.description}, ${this.id}, Create ${this.createAt} Expiration Date ${this.getExpirationDate()}))`;
    }
    setCreateAt(datevalue) {
        this.createAt = datevalue;
    }
    getExpirationDate() {
        return this.expirationDate;
    }
}
exports.Items = Items;
