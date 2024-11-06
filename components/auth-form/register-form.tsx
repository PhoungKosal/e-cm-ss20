"use client";
import React from "react";
import {Label} from "../ui/label";
import {Input} from "../ui/input";
import Link from "next/link";
import {Button} from "../ui/button";

export default function RegisterForm() {
    const [isPending, setIsPending] = React.useState(false);
    const [otp, setOtp] = React.useState(false);
    const handleLogin = () => {
        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
            setOtp(true);
        }, 2000);
    };
    return (
        <div className="flex items-center justify-center">
            {otp ? (
                // <InputOTPControlled />
                "hello"
            ) : (
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Register</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your information below to register an account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="username..."
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="youremail..."
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="password"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Confirm Password</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="confirm password"
                                required
                            />
                        </div>

                        <Button
                            onClick={handleLogin}
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            Register
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            )}

            <div className="flex justify-center items-center">{otp ? <></> : ""}</div>
        </div>
    );
}

// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
//
// export function InputOTPControlled() {
//   const [value, setValue] = React.useState("");
//
//   return (
//     <div className="space-y-4">
//       <p className="text-center text-balance text-muted-foreground">
//         confirm otp below to activate your account
//       </p>
//       <InputOTP
//         maxLength={6}
//         value={value}
//         onChange={(value) => setValue(value)}
//       >
//         <InputOTPGroup className="mx-auto">
//           <InputOTPSlot index={0} />
//           <InputOTPSlot index={1} />
//           <InputOTPSlot index={2} />
//           <InputOTPSlot index={3} />
//           <InputOTPSlot index={4} />
//           <InputOTPSlot index={5} />
//         </InputOTPGroup>
//       </InputOTP>
//       <div className="text-center text-sm">
//         {value === "" ? (
//           <>Enter your one-time password.</>
//         ) : (
//           <>You entered: {value}</>
//         )}
//       </div>
//       <div className="flex items-center justify-center">
//         <Button>Confirm</Button>
//       </div>
//     </div>
//   );
// }
