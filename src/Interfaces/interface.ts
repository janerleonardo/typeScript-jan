interface Cia {
  Id: number;
  Nombre: string;
  Grupo: string;
}

interface Item {
  RefItem: number;
  Size: Sizes;
  Stock: number;
  Cia: Cia;
}

// ✅ Type para alias o combinaciones
type Sizes = 'S' | 'M' | 'L' | 'XL';
type GrupoCias = 'A' | 'B' | 'C';

// ✅ Type para derivar tipos dinámicos, con  PICK, &, Omitir, puedes crear nuevos type  apartir de una ya existente

// Pick crear uno con una lista de campos del original
// type ItemSummary = {
//   RefItem: number;
//   Stock: number;
// };
type ItemSummary = Pick<Item, 'RefItem' | 'Stock'>;

// & crea uno nuevo con un nuevo campo de a un estructura o interface 
// type ItemWithDate = {
//   RefItem: number;
//   Size: string;
//   Stock: number;
//   Cia: string;
//   FechaActualizacion: Date;
// };

type ItemWithDate = Item & { FechaActualizacion: Date }; 

// & crea uno nuevo si un campo selecionado estructura o interface 
type ItemSinCia = Omit<Item, 'Cia'>;