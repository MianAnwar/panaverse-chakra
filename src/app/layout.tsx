'use client';

import React from 'react'
import './globals.css'
import ChakraWrapper from "./chakra-wrapper";
import Header from "@/components/Modules/Header/page";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper>
          <Header />
          {children}
        </ChakraWrapper>
      </body>
    </html>
  )
}
