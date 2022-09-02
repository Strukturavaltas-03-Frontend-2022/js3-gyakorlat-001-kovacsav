/*
Írj egy függvényt `customDateFormats` néven, ami paraméterként egy Date objektumot kap,
 a visszatérési értéke pedig egy objektum két tulajdonsággal, ami a következő
  formátumban tartalmazza a paraméterként kapott dátumot:
- `short`: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul,
  kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
- `long`: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap 
  száma, majd az idő)
*/

const customDateFormats = (date) => {
  let shortOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  let longOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return {
    short: new Intl.DateTimeFormat("hu-hu", shortOptions).format(date),
    long: new Intl.DateTimeFormat("hu-hu", longOptions).format(date),
  };
};

export default customDateFormats;
