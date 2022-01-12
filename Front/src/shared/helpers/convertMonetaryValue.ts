const convertMonetaryValue = (value: number) => {
  return value.toFixed(2).toString().replace(".", ",");
};

export default convertMonetaryValue;
