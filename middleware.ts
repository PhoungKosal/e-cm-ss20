import {NextRequest, NextResponse} from "next/server";
import {getCurrentUser} from "@/app/server/actions/auth";

export function middleware(request: NextRequest) {
    return getCurrentUser()
        .then(({user}) => {
            const {pathname} = request.nextUrl;

            // Redirect the root URL to the product page
            if (pathname === "/") {
                return NextResponse.redirect(new URL("/product", request.url));
            }

            // Redirect unauthenticated users to the login page
            if (!user && pathname === "/product/payment") {
                return NextResponse.redirect(new URL("/auth/login", request.url));
            }

            // Redirect authenticated users away from the login page
            if (user && pathname === "/auth/login") {
                return NextResponse.redirect(new URL("/product", request.url));
            }
            // Proceed with the request if no redirects are needed
            return NextResponse.next();
        })
        .catch((error) => {
            console.error("Error in fetching user in middleware:", error);
            return NextResponse.next({
                request: {
                    headers: request.headers,
                },
            });
        });
}

// Configure the middleware matcher to target specific routes only
export const config = {
    matcher: [
        "/",
        "/auth/login",
        "/product/payment",
    ],
};
