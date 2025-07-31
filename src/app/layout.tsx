// app/layout.tsx or pages/_app.tsx
import StyledComponentsRegistry from "../../styles/registry"; // if using Next 13+ with App Router

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
