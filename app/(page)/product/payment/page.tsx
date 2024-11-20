import {PaymentMethod} from "@/components/payment-method";
import PaymentSummary from "@/components/payment-summary";
import {Metadata} from "next";
import {getCurrentUser} from "@/app/server/actions/auth";

export const metadata: Metadata = {
    title: "Payment",
    description: "Payment page",
}

const PaymentPage = async () => {
    const data = await getCurrentUser();
    return (
        <div className="bg-white py-8 antialiased dark:bg-gray-700 md:py-16 ">
            <div className="mx-auto max-w-screen-xl">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment</h2>
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                        <PaymentMethod user={data.user}/>
                        <PaymentSummary/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentPage;