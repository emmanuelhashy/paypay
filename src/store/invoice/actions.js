import { api } from "src/boot/axios";
import { invoiceConstants } from "./constants";

export function getInvoices({ commit }) {
  api.get(`/invoices`).then((response) => {
    commit(invoiceConstants.UPDATE_INVOICES, response.data);
  });
}

export function getInvoiceById({ commit }) {
  api.get(`/invoice`).then((response) => {
    console.log({ rezz: response });
    commit(invoiceConstants.UPDATE_INVOICE, response.data);
  });
}

export function updateInvoice({ commit }, id) {
  api.put(`/invoices?id=${id}`).then((response) => {
    commit(invoiceConstants.UPDATE_INVOICE, response.data);
  });
}

export function removeInvoice({ commit }, id) {
  api.post(`/invoices?id=${id}`).then((response) => {
    console.log("removeInvoice", response.data);
    commit(invoiceConstants.DELETE_INVOICE, response.data);
  });
}

export function removeAllInvoices({ commit }) {
  api.delete("/invoices").then((response) => {
    console.log("removeInvoice", response.data);
  });
}
