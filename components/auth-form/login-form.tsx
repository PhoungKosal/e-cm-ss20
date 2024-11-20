"use client";
import {loginuser} from "@/app/server/actions/auth";

import {useActionState} from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Loader} from "lucide-react";

export function LoginForm() {
    const [data, action, isPending] = useActionState(loginuser, undefined);
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-balance text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <form action={action} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="yourmail@example.com"
                            required

                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                href=""
                                className="ml-auto inline-block text-sm underline"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    {data?.error && <span className="text-red-500">{data?.error}</span>}
                    {data?.message && <span>{data.message}</span>}
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? (<Loader className="mr-2 h-4 w-4 animate-spin"/>) : "Login"}
                    </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/register" className="underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>

    );
}


// <form action={action} className="flex max-w-[300px] flex-col gap-2">
//     <div className="flex flex-col gap-2">
//         <input
//             id="email"
//             name="email"
//             placeholder="Email"
//             // defaultValue={data?.FieldData?.email}
//         />
//     </div>
//
//     <div className="flex flex-col gap-2">
//         <input
//             id="password"
//             name="password"
//             type="password"
//             placeholder="Password"
//         />
//     </div>
//
//     <button disabled={isPending}>hello</button>
// </form>