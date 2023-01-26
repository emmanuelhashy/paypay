export function someMutation (/* state */) {
}

export function UPDATE_INVOICE (state, payload) {
  state.invoice = payload;
}

export function UPDATE_INVOICES (state, payload) {
  state.invoices = payload;
}
