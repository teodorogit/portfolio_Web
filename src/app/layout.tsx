// app/layout.tsx
import './globals.css';
import { HeroUIProvider } from '@heroui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/pages/Footer';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <HeroUIProvider>
                <body className="antialiased" suppressContentEditableWarning>
                    {children}
                </body>
            </HeroUIProvider>
        </html>
    );
}
