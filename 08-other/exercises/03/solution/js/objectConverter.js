/*
Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
   - `arrayToMap(array)`
   - `arrayToSet(array)`
   - `setToMap(set)`
   - `setToArray(set)`
   - `mapToArray(map)`
   - `mapToSet(map)`

A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett
 adattípusból konvertálják át az adatokat egy másikba. 
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.
*/

const objectConverter = {
  arrayToMap(array) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
      map.set(i, array[i]);
    }
    return map;
  },
  arrayToSet(array) {
    return new Set(array);
  },
  setToMap(set) {
    const map = new Map();
    [...set].forEach((item, index) => map.set(index, item));
    return map;
  },
  setToArray(set) {
    return [...set];
  },
  mapToArray(map) {
    const array = [];
    for (const value of map) {
      array.push(value[1]);
    }
    return array;
  },
  mapToSet(map) {
    const array = [];
    for (const iterator of map) {
      array.push(iterator[1]);
    }
    return new Set(array);
  },
};

export default objectConverter;
