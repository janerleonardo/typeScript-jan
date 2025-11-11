export class Items extends Object {
  public description: string;
  id: number; // public tatno si lo pones o no
  protected createAt: Date; //Accesible de la clase o subclase la que heredan
  private expirationDate: Date = new Date(); // solo se accede desde la misma clase.

  constructor(descripcion: string, id: number, createAt: Date = new Date()) {
    super();
    this.description = descripcion;
    this.id = id;
    this.createAt = createAt;
  }

  override toString(): string {
    return `Items(${this.description}, ${this.id}, Create ${this.createAt} Expiration Date ${this.getExpirationDate()}))`;
  }

  public setCreateAt (datevalue: Date): void {
    this.createAt = datevalue;
  }

  private getExpirationDate (){
    return this.expirationDate;
  }
}
