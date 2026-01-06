import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 text-neutral-900 antialiased">
        <nav className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-8 py-4 flex gap-6 text-sm">
            <Link
              href="/ledger"
              className="hover:text-neutral-700 transition"
            >
              Ledger
            </Link>
            <Link
              href="/insights"
              className="hover:text-neutral-700 transition"
            >
              Insights
            </Link>
            <Link
              href="/settings"
              className="hover:text-neutral-700 transition"
            >
              Settings
            </Link>
          </div>
        </nav>

        <main className="animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}