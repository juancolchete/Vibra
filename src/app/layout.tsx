"use client"
import { Inter } from 'next/font/google'
import { store } from "@/store/store";
import { Provider } from "react-redux";
import PreLoader from '@/components/loaders/preLoader';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      <PreLoader />
    </Provider>
  )
}
