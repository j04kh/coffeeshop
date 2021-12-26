import { Product } from "types/Product";

export default {
  products: {
    list: (): Promise<Product[]> =>
      import("./products.json").then((res) => res.default as Product[]),
  },
};
