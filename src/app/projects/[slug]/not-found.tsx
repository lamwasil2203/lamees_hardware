import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-20 px-12">
      <div className="text-center">
        <h1 className="font-mono text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-secondary text-lg mb-8">Project not found.</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 border-2 border-border text-text font-bold no-underline transition-all duration-400 hover:border-accent"
          style={{ transitionTimingFunction: "var(--ease-smooth)" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
