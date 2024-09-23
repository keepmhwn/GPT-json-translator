import type { Metadata } from "next";

import { ChakraProvider, Container } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "GPT JSON Inspector",
  description: "Translate JSON values into another language using GPT.",
  keywords: [
    "GPT",
    "translate",
    "i18next",
    "JSON",
    "open AI",
    "Internationalization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.06)",
        }}
      >
        <ChakraProvider>
          <Container display="flex" alignItems="center" justifyContent="center">
            {children}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
}
