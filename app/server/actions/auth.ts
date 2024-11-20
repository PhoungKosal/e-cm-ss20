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

export async function loginuser(previousState: unknown, formData: FormData) {
    const cookiesStore = await cookies();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const response = await fetch(`${process.env.API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
        return {error: "Invalid credentials"};
    }

    const {data: {access_token}} = await response.json();


    cookiesStore?.set("auth", access_token, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
    });
    redirect('/product');
    return {message: "Login successful"};
}

export async function logoutUser() {
    const cookiesStore = await cookies();
    cookiesStore.delete("auth");
    return redirect("/auth/login");
}

export async function getCurrentUser() {
    const userId = await getTokenUser();
    const res = await get(`api/auth/users/${userId}`);
    return await res;
}

export async function getTokenUser() {
    const token = await getCookie("auth");
    const user = verifyAuthToken(token || "");
    return await user;
}


export const verifyAuthToken = async (token: string) => {
    try {
        const decodedToken = jwt.decode(token) as JwtPayload;
        return decodedToken?.id;
    } catch (error) {
        console.error("JWT decoding failed:", error);
        return {userId: null, error: "Invalid or expired token"}; // Return an error message
    }
}

export async function registerUser(previousState: unknown, formData: FormData) {
    const full_name = formData.get("full_name") as string | null;
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;
    const password_confirmation = formData.get("password_confirmation") as string | null;
    const role = formData.get("role") as string | null; // assuming role is sent as a string
    const gender = formData.get("gender") as string | null;
    const phone = formData.get("phone") as string | null;
    const address = formData.get("address") as string | null;

    // Validate required fields
    if (!full_name || !email || !password || !password_confirmation || !role) {
        return {error: "Please fill all fields"};
    }

    // Validate password confirmation
    if (password !== password_confirmation) {
        return {error: "Passwords do not match"};
    }

    // Validate API URL existence
    if (!process.env.API_URL) {
        return {error: "API URL is not defined"};
    }

    try {
        const response = await fetch(`${process.env.API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                full_name,
                email,
                password,
                password_confirmation,
                role: parseInt(role, 10), // Convert role to a number if required by the API
                gender,
                phone,
                address
            }),
        });

        // Handle non-OK response
        if (!response.ok) {
            const errorData = await response.json();
            return {error: errorData.message || "Registration failed. Please try again."};
        }

        const data = await response.json();
        return {message: `${data.message || "Registration"} successful`};
    } catch (error) {
        return {error: "Registration failed. Please try again." + error};
    }
}

export async function verifyOTP(previousState: unknown, formData: FormData) {
    const email = formData.get("email") as string;
    const otp_code = formData.get("otp") as string;
    if (!email || !otp_code) {
        return {error: "Please fill all fields"};
    }

    try {
        const response = await fetch(`${process.env.API_URL}/api/auth/verify-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                otp_code,
            }),
        });

        if (!response.ok) {
            return {error: "Invalid OTP"};
        }
        return {message: "OTP verified"};
    } catch (error) {
        return {error: "OTP verification failed" + error};
    }
}
