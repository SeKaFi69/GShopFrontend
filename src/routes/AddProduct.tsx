import { create, toBinary } from "@bufbuild/protobuf";
import { ProductSchema } from "../proto/proto/product/product_pb";
import { CreateProductRequestSchema } from "../proto/proto/product/routes_pb";
import style from "./AddProduct.module.css";
export default function AddProduct() {
  fetch("loc");
  return (
    <form
      class={style.form}
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData();
        const name = formData.get("name")?.toString();
        const description = formData.get("description")?.toString();
        const imageId = BigInt(formData.get("image"));
        if ((imageId = null)) {
          throw "Image aa";
        }
        const p = formData.get("price")?.toString();
        if (p == null) {
          throw "price aa";
        }
        const b = formData.get("barcode")?.toString();
        if (b == null) {
          throw "barcode aa";
        }

        const price = Number.parseFloat(p);
        const barcode = BigInt(b);

        const data = create(CreateProductRequestSchema, {
          products: [
            {
              name,
              description,
              imageId,
              barcode,
              price,
            },
          ],
        });
        console.log(data);

        fetch("http://localhost:8000/products/create", {
          method: "post",
          body: toBinary(CreateProductRequestSchema, data),
        });
      }}
    >
      <label for="name">
        Nazwa produktu
        <input type="text" name="name" title="Wpisz nazwę produktu" required />
      </label>
      <label for="description">
        Opis
        <span contentEditable id="description" />
      </label>
      <label for="image">
        Zdjęcie
        <input type="file" name="image" />
      </label>
      <label for="barcode">
        Kod kreskowy
        <input
          type="text"
          name="barcode"
          title="Zeskanuj/Wpisz kod kreskowy"
          required
        />
      </label>
      <label for="price">
        Cena
        <input type="text" name="price" title="Cena [zł]" required />
      </label>
      <label for="Tags">Tags</label>
      <button type="submit" title="Dodaj produkt">
        Dodaj
      </button>
    </form>
  );
}
