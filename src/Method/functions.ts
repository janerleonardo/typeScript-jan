function printMessage(message: string): void {
    console.log(message);
}

printMessage("Pruebas de impreion");

//Parametros nulable
const Sum = (number1: number, number2?:number | null) =>  number1 + (number2 ?? 0);
console.log(Sum(1,4));
console.log(Sum(1));

//Parametros con default 
const Sum1 = (number1: number, number2:number = 0) =>  number1 + number2 ;
console.log(Sum1(5));
console.log(Sum1(5,7));

//Subrecarga y  Parametros multiples
type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type GrupoCias = 'A' | 'B' ;
type Cias = {
    Id: number,
    Grupo: GrupoCias
}
type Item = {
    RefItem:number,
    Size: Sizes,
    Cia:Cias,
    Stock: number
  
}
let Items: Item[] = [
  {
    RefItem: 1001,
    Size: 'M',
    Cia: { Id: 1, Grupo: 'A' },
    Stock: 2

  },
  {
    RefItem: 1002,
    Size: 'L',
    Cia: { Id: 2, Grupo: 'A' },
     Stock: 6
  },
  {
    RefItem: 1003,
    Size: 'XL',
    Cia: { Id: 3, Grupo: 'B' },
     Stock: 6
  },
  {
    RefItem: 1004,
    Size: 'S',
    Cia: { Id: 4, Grupo: 'B' },
     Stock: 7
  },
  {
    RefItem: 1003,
    Size: 'XXL',
    Cia: { Id: 5, Grupo: 'A' },
     Stock: 4
  
  },
  {
    RefItem: 1001,
    Size: 'M',
    Cia: { Id: 6, Grupo: 'B' },
     Stock: 6
   
  },
];
const CiasList: Cias[] = [
  { Id: 1, Grupo: 'A' },
  { Id: 2, Grupo: 'A' },
  { Id: 3, Grupo: 'A' },
  { Id: 4, Grupo: 'B' },
  { Id: 5, Grupo: 'B' },
  { Id: 6, Grupo: 'B' },
];



function GetStockForItem(refItems:number, Size:Sizes, ...Cia: number[]) {

    const  filtered = Items.filter(item => item.RefItem === refItems && item.Size ==Size && Cia.includes(item.Cia.Id));

    console.log(filtered)
    const totalStock = filtered.reduce((acc, item) => acc + item.Stock,0);

    return totalStock;

}
function GetStockForItem1(refItems:number, Size:Sizes, GrupoCia:GrupoCias ) {

    const  filtered = Items.filter(item => item.RefItem === refItems && item.Size ==Size && item.Cia.Grupo === GrupoCia);

    console.log(filtered)
    const totalStock = filtered.reduce((acc, item) => acc + item.Stock,0);

    return totalStock;

}

const total = GetStockForItem(1001, 'M', 1,6,4);
const total1 = GetStockForItem1(1001, 'M', 'A');
console.log(total);
console.log(total1);

(() =>{
  function combinar(a: string, b: string): string;
  function combinar(a: number, b: number): number;

  function combinar(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // Concatenación
  }

  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Suma numérica
  }

  throw new Error("Tipos incompatibles");
}

console.log(combinar("1212", "1231"));
console.log(combinar(2, 2));
})();
