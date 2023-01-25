import { createServer, Model, Response } from "miragejs";
console.log("started");

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    models: {
      invoice: Model,
    },
    routes() {
      this.get("/api/invoices", (schema, request) => {
        const headers = {};
        const data = schema.invoices.all();
        return new Response(200, headers, data);
      });

      this.get("/api/invoices:id", (schema, request) => {
        const headers = {};
        let id = request.params.id;
        const data = schema.invoices.find(id);
        return new Response(200, headers, data);
      });

      this.patch("/api/invoices:id", (schema, request) => {
        const headers = {};
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let invoice = schema.invoices.find(id);
        let data = invoice.update(newAttrs);

        return new Response(200, headers, data);
      });

      this.delete("/api/invoices:id", (schema, request) => {
        const headers = {};
        let id = request.params.id;
        schema.invoices.find(id).destroy();

        return new Response(200, headers, data);
      });
    },
    seeds(server) {
      server.create("invoice", {
        username: "dipainhousecom",
        title: "Payment for lunch",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        invoice_no: "INV-2022-010",
        address: "Ijen boulevard street 101",
        postal_code: "65115",
        city: "Malang",
        country: "East java indonesia",
        billed_to: {
          name: "Zakky Grizzly",
          company: "Monlight Agency LTD",
          city: "New York",
          country: "USA",
          due_date: "11 Jan 2022",
          issued_date: "11 Jan 2022",
        },
        payment_method: "Wise",
        routing_name: "467565",
        account_no: "76746 467565 4674",
        account_name: "Barly Vallendito",
        sub_total: "4,800.00",
        discount: "0.00",
        tax: "0.00",
        total: "4,800.00",
      });
      server.create("invoice", {
        username: "sunlink",
        title: "Payment for lunch",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        invoice_no: "INV-2022-010",
        address: "Ijen boulevard street 101",
        postal_code: "65115",
        city: "Malang",
        country: "East java indonesia",
        billed_to: {
          name: "Zakky Grizzly",
          company: "Monlight Agency LTD",
          city: "New York",
          country: "USA",
          due_date: "11 Jan 2022",
          issued_date: "11 Jan 2022",
        },
        payment_method: "Wise",
        routing_name: "467565",
        account_no: "76746 467565 4674",
        account_name: "Barly Vallendito",
        sub_total: "4,800.00",
        discount: "0.00",
        tax: "0.00",
        total: "4,800.00",
      });
      server.create("invoice", {
        username: "calypso",
        title: "Payment for lunch",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        invoice_no: "INV-2022-010",
        address: "Ijen boulevard street 101",
        postal_code: "65115",
        city: "Malang",
        country: "East java indonesia",
        billed_to: {
          name: "Zakky Grizzly",
          company: "Monlight Agency LTD",
          city: "New York",
          country: "USA",
          due_date: "11 Jan 2022",
          issued_date: "11 Jan 2022",
        },
        payment_method: "Wise",
        routing_name: "467565",
        account_no: "76746 467565 4674",
        account_name: "Barly Vallendito",
        sub_total: "4,800.00",
        discount: "0.00",
        tax: "0.00",
        total: "4,800.00",
      });
    },
  });

  return server;
}
