import { CreateProductRequestSchema } from "../proto/proto/product/routes_pb";
import style from "./AddProduct.module.css";
import TagList from "../components/TagList";
import { create, toBinary } from "@bufbuild/protobuf";
import GroupList from "../components/GroupList";
import { CreateImageResponseSchema } from "../proto/proto/image/routes_pb";
import { fromBinary } from "@bufbuild/protobuf";

async function uploadImage(name: string, description: string, image: File) {
  const formData = new FormData();
  formData.append("name1", name);
  formData.append("description", description);
  formData.append("file", image);

  try {
    const response = await fetch("/api/image/create", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "R2FtaSB0byBmdXJyYXNHYW1pIHRvIGZ1cnJhc0dURiE=",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.arrayBuffer();
    const createImageResponse = fromBinary(
      CreateImageResponseSchema,
      new Uint8Array(responseData)
    ); // Correct usage

    // Extract the imageId
    const imageId = createImageResponse.imageId;
    console.log(`Extracted imageId: ${imageId}`);

    return imageId;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}

export default function AddProduct() {
  return (
    <form
      class={style.form}
      method="post"
      onSubmit={async (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get("name") as string | null;
        const barcode = formData.get("barcode") as string | null;
        const price = formData.get("price") as string | null;
        // const additionalData = "" as string | null;
        const productGroupId = formData.get("groupId") as bigint | null;
        // console.log(additionalData);
        console.log(productGroupId);
        const descriptionElement = form.querySelector(
          "#description"
        ) as HTMLElement;
        const description =
          descriptionElement?.textContent || "No description provided";
        const image = formData.get("image") as File | null;
        if (!name || !barcode || !price || !image || !productGroupId) {
          console.error("All fields are required");
          return;
        }
        // if (!additionalData) {
        //   console.error("Spodziewane bo chyba tagi");
        // }
        try {
          const imageId = await uploadImage(name, description, image);
          if (imageId === null) {
            throw new Error("Image upload failed");
          }
          const data = create(CreateProductRequestSchema, {
            products: [
              {
                name,
                description,
                barcode: BigInt(barcode),
                price: Number.parseFloat(price),
                productGroupId: BigInt(productGroupId),
                // additionalData,
                imageId,
              },
            ],
          });
          const response = await fetch("/api/products/create", {
            method: "POST",
            body: toBinary(CreateProductRequestSchema, data),
            headers: {
              "Content-Type": "application/octet-stream",
              Authorization: "R2FtaSB0byBmdXJyYXNHYW1pIHRvIGZ1cnJhc0dURiE=",
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          console.log("Product data submitted successfully");
        } catch (error) {
          console.error("Error:", error);
        }
      }}
    >
      <label for="name">
        <p>Nazwa</p>
        <input
          type="text"
          name="name"
          title="Wpisz nazwę produktu"
          required
          value="test"
        />
      </label>

      <label for="image">
        <p>Zdjęcie</p>
        <input type="file" name="image" />
      </label>
      <label for="barcode">
        <p> Kod kreskowy</p>
        <input
          type="number"
          name="barcode"
          title="Zeskanuj/Wpisz kod kreskowy"
          required
          value={1234}
        />
      </label>
      <label for="price">
        <p>Cena</p>
        <input
          type="number"
          name="price"
          title="Cena [zł]"
          required
          value={1234}
        />
      </label>
      <GroupList />
      <label for="description">
        <p>Opis</p>
        <span contentEditable id="description" textContent="test test test" />
      </label>
      <TagList />
      <button type="submit" title="Dodaj produkt">
        Dodaj
      </button>
    </form>
  );
}
