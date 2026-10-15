import Link from "next/link";
export default function NotFound() {
  return (
    <div className="narrow">
      <p className="section-label">404 / Not found</p>
      <h1>That page isn&apos;t here.</h1>
      <p className="lede">
        The link may be old, or the page may still be taking shape.
      </p>
      <p>
        <Link className="button-link" href="/">
          Back home
        </Link>
      </p>
    </div>
  );
}
