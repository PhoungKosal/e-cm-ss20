import React from "react";

export default function Authlayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="h-screen flex justify-center items-center 2xl:px-96 xs:px-5">
            {children}
        </main>
    );
}
