"use server";

export async function Payment(previousState: unknown, formData: FormData) {
    const name_on_card = formData.get("name") as string;
    let payment_method = formData.get("number") as string
    const exp_month = formData.get("month") as string;
    const exp_year = formData.get("year") as string;
    const cvc = formData.get("cvc") as string;
    const userId = formData.get("user_id") as string;
    // const order_items = formData.get("order_items") as string;
    const amount = 9000; // Hardcoded for demo purposes
    const currency = "usd";
    if (payment_method !== "4242424242424242") {
        return {error: "Invalid card number. Please use a valid test card."};
    } else {
        payment_method = "pm_card_visa"
    }
    console.log("Payment form data:", name_on_card, payment_method, exp_month, exp_year, cvc, userId);
    // Validation: Check if required fields are present
    if (!name_on_card || !payment_method || !exp_month || !exp_year || !cvc || !userId) {
        return {error: "Missing required fields. Please provide all necessary information."};
    }

    try {
        // Mock API call to process payment
        // Replace with actual API endpoint for processing payments
        const response = await fetch(`${process.env.API_URL}/api/stripe/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount,
                currency,
                name_on_card,
                payment_method,
                exp_month,
                exp_year,
                cvc,
            }),
        });

        // Handle API response
        if (!response.ok) {
            return {error: "Payment failed. Please try again later."};
        }
        console.log("Payment response:", response.status, response.statusText);

        const result = await response.json();

        // Return success message with the response data
        return {message: "Payment success", data: result};
    } catch (error) {
        console.error("Payment failed:", error);
        return {error: "Payment failed. Please try again later."};
    }
}
