export default function persianNumber(number, dot = true) {
  const nm = +number;
  if (dot) {
    return nm.toLocaleString("fa-IR");
  } else {
    const result = nm.toLocaleString("fa-IR");
    return result.split("٬").join("");
  }
}
