"use client";
import React, {useActionState} from "react";
import {Label} from "../ui/label";
import {Input} from "../ui/input";
import Link from "next/link";
import {Button} from "../ui/button";
import {verifyOTP} from "@/app/server/actions/auth";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Loader} from "lucide-react";

export default function RegisterForm() {
    const [state, action, isPending] = useActionState(registerUser, undefined);
    const [email, setEmail] = React.useState("");
    const [otp, setOtp] = React.useState(false);
    React.useEffect(() => {
        if (state?.message) {
            setOtp(true);
        }
    }, [state])
    return (
        <div className="flex items-center justify-center">
            {otp ? (<InputOTPControlled email={email}/>) : (
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Register</h1>
                    </div>
                    <form action={action} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="full_name">Full Name</Label>
                            <Input
                                id="full_name"
                                name="full_name"
                                type="text"
                                placeholder="username..."
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password_confirmation">Confirm Password</Label>
                            </div>
                            <Input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                placeholder="confirm password"
                                required
                            />
                        </div>
                        <input type="hidden" id="role" name="role" defaultValue="2"/>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="gender">Select Male</Label>
                            </div>
                            <Select name="gender">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Mail"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Male</SelectItem>
                                    <SelectItem value="2">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="phone">Phone</Label>
                            </div>
                            <Input id="phone" name="phone" type="text" placeholder="phone" required/>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="adress">Address</Label>
                            </div>
                            <Input id="address" name="address" type="text" placeholder="address" required/>
                        </div>
                        {state?.error && <span className="text-red-500">{state?.error}</span>}
                        {state?.message && <span>{state.message}</span>}

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? (<Loader className="mr-2 h-4 w-4 animate-spin"/>) : "submit"}
                        </Button>

                    </form>
                    <div className="text-center text-sm">
                        Register Done ? {" "}
                        <Link href="/auth/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import {registerUser} from "@/app/server/actions/auth";

export function InputOTPControlled({email}: { email: string }) {
    const [state, action, isPending] = useActionState(verifyOTP, undefined);
    const [value, setValue] = React.useState("");


    return (
        <div className="space-y-4">
            <p className="text-center text-balance text-muted-foreground">
                confirm otp below to activate your account
            </p>
            <form action={action}>
                <input type={"hidden"} value={email} name="email"/>
                <InputOTP
                    maxLength={6}
                    value={value}
                    onChange={(value) => setValue(value)}
                    name={"otp"}
                >
                    <InputOTPGroup className="mx-auto">
                        <InputOTPSlot index={0}/>
                        <InputOTPSlot index={1}/>
                        <InputOTPSlot index={2}/>
                        <InputOTPSlot index={3}/>
                        <InputOTPSlot index={4}/>
                        <InputOTPSlot index={5}/>
                    </InputOTPGroup>
                </InputOTP>
                <div className="text-center text-sm">
                    {value === "" ? (
                        <>Enter your one-time password.</>
                    ) : (
                        <>You entered: {value}</>
                    )}
                </div>
                {state?.error && <span className="text-red-500">{state?.error}</span>}
                {state?.message && <span>{state.message}</span>}
                <div className="flex items-center justify-center">
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? (<Loader className="mr-2 h-4 w-4 animate-spin"/>) : "submit"}
                    </Button>
                </div>
                <div className="mt-3 text-center text-sm">
                    Register Done ? {" "}
                    <Link href="/auth/login" className="underline">
                        Sign in
                    </Link>
                </div>
            </form>
        </div>
    );
}
