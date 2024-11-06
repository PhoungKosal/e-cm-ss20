"use server";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {get} from "@/app/server/actions/fetch";
import jwt from "jsonwebtoken";

interface JwtPayload {
    id: string;
    iat: number;
    exp: number;
}

export const getCookie = async (key: string) => {
    const cookieValue = await cookies();
    return cookieValue.get(key)?.value;
}

export async function loginUser(previousState: unknown, formData: FormData) {
    const cookiesStore = await cookies();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const response = await fetch(`${process.env.API_URL}/api/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
        return {error: "Invalid credentials"};
    }

    const {token} = await response.json();

    cookiesStore?.set("auth", token, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
    });
    redirect('/product');
    return {message: "Login successful"};
}

export async function getCurrentUser() {
    const userId = await getTokenUser();
    const res = await get(`api/user/${userId}`);
    return res;
}

export async function getTokenUser() {
    const token = await getCookie("auth");
    const user = verifyAuthToken(token || "");
    return user;
}


export const verifyAuthToken = async (token: string) => {
    try {
        const decodedToken = jwt.decode(token) as JwtPayload;
        if (!decodedToken || !decodedToken.id) {
            throw new Error("Token is invalid or does not contain an ID");
        }
        return decodedToken.id;
    } catch (error) {
        console.error("JWT decoding failed:", error);
        return {userId: null, error: "Invalid or expired token"}; // Return an error message
    }
}


export const getAllProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
}


export const getProductID = async (id: number) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}