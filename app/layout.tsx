import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import {Footer} from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"

/* Added Work Sans and Open Sans fonts as specified in design brief */
const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Wiz Dev Studios - Scalable Web & Software Solutions",
  description:
    "Transforming ideas into digital products. Professional web development, software solutions, and DevOps services.",
  generator: "v0.app",
  keywords: ["web development", "software development", "DevOps", "fullstack", "portfolio"],
  authors: [{ name: "Wiz Dev Studios" }],
  openGraph: {
    title: "Wiz Dev Studios - Scalable Web & Software Solutions",
    description:
      "Transforming ideas into digital products. Professional web development, software solutions, and DevOps services.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${workSans.variable} ${openSans.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
