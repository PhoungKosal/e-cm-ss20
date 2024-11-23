"use server";
import {cookies} from "next/headers";

export const get = async (path: string) => {
    const cookiesStore = await cookies();
    const data = cookiesStore.get("auth")?.value;
    const headers: HeadersInit = {};
    if (data) {
        headers["Authorization"] = `Bearer ${data}`;
    }
    const res = await fetch(`${process.env.API_URL}/${path}`, {
        method: "GET",
        headers: headers,
    });
    return res.json();
};
