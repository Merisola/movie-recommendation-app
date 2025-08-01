import StyledComponentsRegistry from "../../styles/registry"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Recommendation by Meron 🎬",
  description: "Discover trending and recommended movies.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
