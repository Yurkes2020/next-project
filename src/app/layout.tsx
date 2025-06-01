import "./globals.css";
import { ReactNode } from 'react';
import {Header} from "@/components/header/Header";
import {ScrollToTopButton} from "@/components/scrollToTopButton/ScrollToTopButton";


export const metadata = {
    title: 'MovieDB',
    description: 'Movie app built with Next.js 15',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
            <Header />
            <main>{children}</main>
            <ScrollToTopButton/>
        </body>
        </html>
    );
}
