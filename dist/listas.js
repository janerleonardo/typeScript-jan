"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    let lista = ["Janer", "Leonardo", "Tegue"];
    console.log(lista);
    let _lista = [];
    _lista = [true, true, false];
    console.log(_lista);
    _lista = [0, 2, 3];
    console.log(_lista);
    _lista = ["", "3", "n"];
    console.log(_lista);
    let __lista = ["JN", 0, false];
    console.log(__lista);
    //Esta caso esta infiriendo esto [string | number | boolean] como un arreglo de arreglo 
    let people = [];
    people.push(["Juan"]);
    people.push([true]);
    people.push([0]);
    let ___lista = ["JN", 0, false];
    console.log(___lista);
    let __object = { name: "String", Age: 0, role: "CEO" };
    console.log(__object);
    // tupla
    let _tupla = [];
    _tupla.push(["Juan", 30, true]);
    _tupla = [..._tupla, ["Alice", 30, true], ["Bob", 25, false]];
    console.log(_tupla);
    //  Enumeradores
    let WeekingDay;
    (function (WeekingDay) {
        WeekingDay[WeekingDay["Monday"] = 1] = "Monday";
        WeekingDay[WeekingDay["TuesDay"] = 2] = "TuesDay";
        WeekingDay[WeekingDay["Wednesday"] = 3] = "Wednesday";
        WeekingDay[WeekingDay["TursDay"] = 4] = "TursDay";
        WeekingDay[WeekingDay["FriDay"] = 5] = "FriDay";
        WeekingDay[WeekingDay["SaturDay"] = 6] = "SaturDay";
        WeekingDay[WeekingDay["SunDay"] = 7] = "SunDay";
    })(WeekingDay || (WeekingDay = {}));
    let day = WeekingDay.Monday;
    console.log(day);
    console.log(WeekingDay[day]);
})();
