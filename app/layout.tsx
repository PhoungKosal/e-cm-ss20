import React from "react";
import type {Metadata} from "next";
// import {ThemeProvider} from "next-themes";
import font from "../app/fonts";
import "../app/globals.css";
import TanstackProvider from "@/components/providers/tanstack-provider";

export const metadata: Metadata = {
    title: {
        default: "Tinh Serey",
        template: "%s | Tinh Serey",
    },
    description: "welcome to tinh serey website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={font.poppins.className}>
        <div>
            {/*<ThemeProvider*/}
            {/*    attribute="class"*/}
            {/*    defaultTheme="dark"*/}
            {/*    enableSystem*/}
            {/*    disableTransitionOnChange*/}
            {/*>*/}
            {/*</ThemeProvider>*/}
            <TanstackProvider>
                {children}
            </TanstackProvider>
        </div>
        </body>
        </html>
    );
}
