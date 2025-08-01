import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn&apos;t find what you were looking for.</p>
      <Link href="/">
        <span
          style={{
            color: "#e50914",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Go back home
        </span>
      </Link>
    </div>
  );
}
