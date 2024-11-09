"use server";

export async function Payment(previousState: unknown, formData: FormData) {
    const name = formData.get("name") as string;
    const cardNumber = formData.get("number");
    const expiryDate = formData.get("month") as string;
    const year = formData.get("year");
    const cvc = formData.get("cvc");
    const userId = formData.get("user_id") as string;
    const order_items = formData.get("order_items") as string;

    if (!name || !cardNumber || !expiryDate || !year || !cvc) {
        return {error: "Please fill all fields"};
    }
    console.log(name, cardNumber, expiryDate, year, cvc);
    console.log("User Id: ", userId, "Order Items: ", order_items);
    order_items.split(",").map((item) => {
        console.log(item);
    })
    return {message: `payment success =>  name: ${name}, cardNumber: ${cardNumber}, expiryDate: ${expiryDate}, year: ${year}, cvc: ${cvc} with user id ${userId} and order_items ${order_items}`};
}