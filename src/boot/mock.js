import { makeServer } from "../server";

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "development"
) {
  makeServer();
}
