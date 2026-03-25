import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          Operator One
        </Link>

        <div className="nav-links">
          <Link href="/pricing">Get the Playbook</Link>

          <SignedOut>
            <Link href="/login" className="button secondary">
              Log in
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}