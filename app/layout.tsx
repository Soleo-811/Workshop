import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "X10 AI Thực Chiến - AI Bootcamp cho CEO & Lãnh Đạo Doanh Nghiệp",
  description: "3 ngày bootcamp AI thực chiến giúp doanh nghiệp bứt phá với AI",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
