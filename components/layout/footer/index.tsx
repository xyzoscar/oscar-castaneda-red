import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 py-8 border-t border-gray-100 flex justify-between items-center">
      <small>Oscar Castaneda</small>
      <div className="space-x-4">
        <Link href="/" className="uppercase">
          <small>Twitter</small>
        </Link>
        <Link href="/" className="uppercase">
          <small>Github</small>
        </Link>
        <Link href="/" className="uppercase">
          <small>Instagram</small>
        </Link>
      </div>
    </footer>
  );
}
