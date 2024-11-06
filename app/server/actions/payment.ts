"use server";

export async function Payment(previousState: unknown, formData: FormData) {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const name = formData.get("name") as string;
    const cardNumber = formData.get("number");
    const expiryDate = formData.get("month") as string;
    const year = formData.get("year");
    const cvc = formData.get("cvc");
    const productIds = formData.get("in_product_id") as string;
    const quantities = formData.get("in_qty") as string;

    if (!name || !cardNumber || !expiryDate || !year || !cvc || !productIds || !quantities) {
        return {error: "Please fill all fields"};
    }
    console.log(name, cardNumber, expiryDate, year, cvc);
    console.log("Product Ids: ", productIds, "Quantities: ", quantities);
    return {message: `payment success =>  name: ${name}, cardNumber: ${cardNumber}, expiryDate: ${expiryDate}, year: ${year}, cvc: ${cvc} with product id ${productIds} and quantities ${quantities}`};
}