"use client";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useActionState} from "react";
import {Payment} from "@/app/server/actions/payment";
import {Loader} from "lucide-react";
import {useCartContext} from "@/contexts/cart-context";
import {userType} from "@/types";

export function PaymentMethod({user}: { user: userType }) {
    const [data, action, isPending] = useActionState(Payment, undefined);
    const {products} = useCartContext();
    const orderItem = products.map(({id, quantity}) => ({
        product_id: id,
        quantity: quantity
    }));
    console.log(JSON.stringify({orderItems: orderItem}, null, 2));
    return (
        <Card
            className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
            <form action={action}>
                <input type="hidden" name="user_id" value={user._id}/>
                <input type="hidden" name="order_items" value={JSON.stringify({orderItems: orderItem}, null, 2)}/>
                <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>
                        Add a new payment method to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <RadioGroup defaultValue="card" className="grid grid-cols-1 gap-4">
                        <div>
                            <RadioGroupItem value="card" id="card" className="peer sr-only"/>
                            <Label
                                htmlFor="card"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="mb-3 h-6 w-6"
                                >
                                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                                    <path d="M2 10h20"/>
                                </svg>
                                Card
                            </Label>
                        </div>
                    </RadioGroup>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name"
                               name="name"
                               type="text"
                               placeholder="First Last"
                               required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="number">Card number</Label>
                        <Input id="number"
                               name="number"
                               type="number"
                               required
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="month">Expires</Label>
                            <Select name="month">
                                <SelectTrigger id="month">
                                    <SelectValue placeholder="Month"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">January</SelectItem>
                                    <SelectItem value="2">February</SelectItem>
                                    <SelectItem value="3">March</SelectItem>
                                    <SelectItem value="4">April</SelectItem>
                                    <SelectItem value="5">May</SelectItem>
                                    <SelectItem value="6">June</SelectItem>
                                    <SelectItem value="7">July</SelectItem>
                                    <SelectItem value="8">August</SelectItem>
                                    <SelectItem value="9">September</SelectItem>
                                    <SelectItem value="10">October</SelectItem>
                                    <SelectItem value="11">November</SelectItem>
                                    <SelectItem value="12">December</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="year">Year</Label>
                            <Select name="year">
                                <SelectTrigger id="year">
                                    <SelectValue placeholder="Year"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({length: 10}, (_, i) => (
                                        <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                                            {new Date().getFullYear() + i}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" name="cvc" type="text" placeholder="CVC"/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? (<Loader className="mr-2 h-4 w-4 animate-spin"/>) : "Process Payment"}
                    </Button>
                </CardFooter>
                {data?.message && <span>{data.message}</span>}
                {data?.error && <span className="text-red-500">{data?.error}</span>}
            </form>
        </Card>
    )
}