import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Time of Day',
  description: 'Website to see the Time of Day  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-600">
        <h1 className="text-white text-center">
          Time of Day
        </h1>
        {children}</body>
    </html>
  )
}
