import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

export const metadata : Metadata = {
    title : "One",
    description: "Everyone for Everyone"
}

const inter = Inter({subsets : ["latin"]})

export default function RootLayout({children} : {children : React.ReactNode}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>{children}</body>
            </html>
        </ClerkProvider>
    )
}
