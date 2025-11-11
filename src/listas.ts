(()=>{
    let lista: string[] = ["Janer","Leonardo","Tegue"];
    console.log(lista);

    let _lista: string[] | number[] | boolean[] = [];
    _lista = [true,true,false];
    console.log(_lista);
    _lista = [0,2,3];
    console.log(_lista);
    _lista = ["","3","n"];
    console.log(_lista);

    let __lista: (string | number | boolean)[] = ["JN",0,false];
    console.log(__lista);
    
    //Esta caso esta infiriendo esto [string | number | boolean] como un arreglo de arreglo 
    let people: [string | number | boolean][] = [];
    people.push(["Juan"]);
    people.push([true]);
     people.push([0]);

    let ___lista: any[] = ["JN",0,false]; 
    console.log(___lista);

    type Roles = 'CEO' | 'CTO' | 'Developer';
    type _object = { name: string, Age: number, role: Roles }
     let __object:_object = { name: "String", Age: 0, role: "CEO" }

    console.log(__object);




         // tupla
    let _tupla: [string, number, boolean][] = [];
    _tupla.push(["Juan", 30, true]);
    _tupla = [ ..._tupla,  ["Alice", 30, true], ["Bob", 25, false]]
     console.log(_tupla);

    //  Enumeradores
    enum WeekingDay {
        Monday = 1,
        TuesDay,
        Wednesday,
        TursDay,
        FriDay,
        SaturDay,
        SunDay
    }

    let day: WeekingDay = WeekingDay.Monday;
    console.log(day);
    console.log(WeekingDay[day]);


})();