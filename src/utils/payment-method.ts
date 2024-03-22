export function showPaymentMethod(payment: string) {
  switch (payment) {
    case "cash":
      return "Dinheiro"
    case "debit-card":
      return "Cartão de Débito"
    case "credit-card":
    default:
      return "Cartão de Crédito"
  }
}
