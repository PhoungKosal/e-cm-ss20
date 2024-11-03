import React from "react";
import Image from "next/image";
import image from "@/public";
import RegisterForm from "@/components/auth-form/register-form";

export default function RegisterPage() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="hidden lg:flex items-center justify-center">
                <div className="w-1/2 h-auto">
                    <Image
                        src={image.logo}
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
            <RegisterForm/>
            {/* <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="login" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div> */}
        </div>
    );
}
