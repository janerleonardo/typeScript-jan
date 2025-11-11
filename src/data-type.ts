(()=>{
    let _string: string = "Janer"
    let __string = " Leonardo";
    let ___string: string;
    console.log(__string + _string);

    let _number: number = 10;
    let __number =  10;
    let ___number: number;

    console.log(_number + __number);

    let _boolean: boolean =  false;
    let __boleand = true;
    let ___boolean:boolean;

    console.log(_boolean, _boolean);

    let _date =  new Date();
    let __date = new Date(2025,10,20);
    console.log(_date, __date);

    let _undefined:undefined;

    let  _null:null;

    // variables que tenga 2 o mas tipos

    let _stringAndNumber: string | number;
    _stringAndNumber = "Janer"
    console.log(_stringAndNumber);
    _stringAndNumber = 100;
    console.log(_stringAndNumber);

    let _BooleanAndNullAndUndefined: boolean | null | undefined;
    _BooleanAndNullAndUndefined = true;
    console.log(_BooleanAndNullAndUndefined);
    _BooleanAndNullAndUndefined = null;
    console.log(_BooleanAndNullAndUndefined);
    _BooleanAndNullAndUndefined = undefined;
    console.log(_BooleanAndNullAndUndefined);

    // Variable Any que puede ser cualquier valor

    let  _any: any;
    _any =  undefined;
    console.log(_any);
    _any =  0;
    console.log(_any);
    _any =  "Janer";
    console.log(_any);


    // Variable unknown, no la conocia
    let  _unknown: unknown;
    _unknown = "Hello"
    console.log(_unknown);
    _unknown = 0;
    console.log(_unknown);
    _unknown = false;
    console.log(_unknown);


    // Ejemplo real de _unknown
    function parseData(input: string): unknown {
        return JSON.parse(input);
    }
    const result = parseData('{"name":"Janer"}');
    //  result.name   Error, es unknown
    if (typeof result === "object" && result !== null && "name" in result) {
    console.log((result as any).name); // ✅ seguro ahora
    }


    const _void = ():void => {
        console.log("No devuelve nada");
    };

    _void();


    // Valor por defecto null validacion que permitiria 
    const _never = (error: string | null=null):never => {

        throw new Error(error ?? "error");
    }

    // _never();
    _never("Se envia desde la ejecucion");
    





})();