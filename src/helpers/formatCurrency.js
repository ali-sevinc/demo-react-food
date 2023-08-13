export function formatCurreny(money) {
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return format.format(money);
}
