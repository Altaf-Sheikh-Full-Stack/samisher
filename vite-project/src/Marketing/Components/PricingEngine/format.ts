export function money(value: number) {
  const rounded = Math.round(value);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(rounded);
}

export function moneyCompact(value: number) {
  const rounded = Math.round(value);
  if (Math.abs(rounded) >= 1000) {
    return `$${(rounded / 1000).toFixed(rounded >= 100000 ? 0 : 1)}k`;
  }
  return `$${rounded}`;
}

export function moneyRange(min: number, max: number) {
  return `${money(min)} – ${money(max)}`;
}

export function percent(value: number) {
  return `${Math.round(value * 100)}%`;
}

export function formatCount(value: number) {
  const rounded = Math.round(value * 10) / 10;
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: rounded < 10 ? 1 : 0,
  }).format(rounded);
}