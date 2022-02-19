import dotenv from "dotenv";

dotenv.config()

export default {
  urlBase: process.env.urlBase,
  token: process.env.token
}