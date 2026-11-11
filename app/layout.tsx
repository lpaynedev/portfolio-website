import "./globals.css";
import "./studio.css";
import type { Metadata } from "next";

const portfolioDescription =
  "Python APIs, TypeScript applications and applied AI projects with inspectable evidence and clear boundaries.";
const portfolioSocialImage = "/images/headshot2026.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://lukepayne.web.app"),
  title: "Luke Payne - Software Engineer",
  description: "Luke Payne’s software engineering portfolio: Python APIs, TypeScript applications, retrieval and LLM tool use.",
  openGraph: {
    title: "Luke Payne - Software Engineer | Python, TypeScript and Applied AI",
    description: portfolioDescription,
    type: "website",
    siteName: "Luke Payne Portfolio",
    images: [
      {
        url: portfolioSocialImage,
        alt: "Luke Payne, AI and full-stack software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Payne - Software Engineer | Python, TypeScript and Applied AI",
    description: portfolioDescription,
    images: [portfolioSocialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{__html: "try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='ink'?'ink':'paper'}catch{document.documentElement.dataset.theme='paper'}"}} /></head>
      <body>{children}</body>
    </html>
  );
}
