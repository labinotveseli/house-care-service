import './globals.css'
import Header from './_components/Header'
import NextAuthSessionProvider from './provider'
import { Toaster } from '@/components/ui/sonner'
import GoToTopButton from '@/components/ui/GoToTopButton'

export const metadata = {
    title: 'House Care Service',
    description: 'A web app that provides house care services'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <NextAuthSessionProvider>
                    <div>
                        <Header />
                        <Toaster className="mx-6 md:mx-16" />
                        <div className="mx-6 md:mx-16">{children}</div>
                        <GoToTopButton className="mx-6 md:mx-16" />
                    </div>
                </NextAuthSessionProvider>
            </body>
        </html>
    )
}
