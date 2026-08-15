export function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(value)));
}

export function formatRange(min: number, max: number) {
  return `${formatMoney(min)} – ${formatMoney(max)}`;
}
