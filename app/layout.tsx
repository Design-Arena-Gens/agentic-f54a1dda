import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxe Interiors - Transform Your Space',
  description: 'Professional interior design services for residential and commercial spaces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
