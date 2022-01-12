const myRegexes = {
  name: /^[A-Za-z\-\ ]{6,}$/,
  email: [
    /^([._a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/,
    /^([._a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/,
  ],
  password: [
    new RegExp("(?=.*[a-z])"),
    new RegExp("(?=.*[A-Z])"),
    new RegExp("(?=.*[0-9])"),
  ],
};

export default myRegexes;
