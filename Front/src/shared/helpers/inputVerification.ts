import myRegexes from "./myRegexes";

const nameVerification = (name: string) => {
  if (!myRegexes.name.test(name)) {
    return false;
  }
  return true;
};

const emailVerification = (email: string) => {
  if (!myRegexes.email[0].test(email) && !myRegexes.email[1].test(email)) {
    return false;
  }
  return true;
};

const passwordVerification = (password: string) => {
  if (
    !myRegexes.password[0].test(password) ||
    !myRegexes.password[1].test(password) ||
    !myRegexes.password[2].test(password)
  ) {
    return false;
  }
  return true;
};

export { nameVerification, emailVerification, passwordVerification };
