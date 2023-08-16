export function formateNumberToReal(value: number) {
  return value.toLocaleString('pt-br', {minimumFractionDigits: 2})
}
