import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          Operator One
        </Link>

        <div className="nav-links">
          <Link href="/pricing">Get the Playbook</Link>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}