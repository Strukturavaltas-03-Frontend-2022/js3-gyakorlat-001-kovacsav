const HU = {
  date(date) {
    return new Intl.DateTimeFormat("hu-HU").format(date);
  },
  currency(number) {
    return new Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
    }).format(number);
  },
  list(stringArray) {
    let output = "";
    for (let i = 0; i < stringArray.length; i++) {
      if (i === 0) {
        output = `${stringArray[i]}`;
      } else if (i > 0 && i < stringArray.length - 1) {
        output = `${output}, ${stringArray[i]}`;
      } else {
        output = `${output} és ${stringArray[i]}`;
      }
    }
    return output;
  },
};

export default HU;
