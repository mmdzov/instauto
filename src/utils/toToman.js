export default function toToman(amount) {
  const am = +amount;
  return am?.toLocaleString("fa-IR") + " " + "تومان";
}
