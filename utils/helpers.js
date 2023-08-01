import axios from "axios";

const add = (n1, n2) => {
  return parseInt(n1) - parseInt(n2);
};
const sub = (n1, n2) => {
  return parseInt(n1) - parseInt(n2);
};
const mult = (n1, n2) => {
  return "metter les instruction pour faire multiplication" + parse;
};
//genereate nombre alleatotoire entre 1 et 100
const getRandom = () => {
  return Math.random() * 100 + 1;
};

export { getRandom, add, sub,mult};
