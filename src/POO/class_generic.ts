interface Par<T, U>{
  primero: T;
  segundo: U;
}

const par: Par<number, string> = {
  primero: 1,
  segundo: 'dos'
}

class Generic<T, U>{
  value: T;
  _type: U;

  constructor( value : T, type : U ) {
    this.value = value;
    this._type = type
  }


}

class GenericSon extends Generic <number, string > {
    valueInternal: string;

    /**
     *
     */
    constructor(value: number, _type: string, valueInternal: string ) {
        super(value,_type);
        this.valueInternal = valueInternal;
        
    }


}

class GenericNumber extends Generic <number, number > {
    valueInternal: number;

    /**
     *
     */
    constructor(value: number, _type: number, valueInternal: number ) {
        super(value,_type);
        this.valueInternal = valueInternal;
        
    }


}