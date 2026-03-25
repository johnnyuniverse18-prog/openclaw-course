import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        {/* Logo */}
        <Link href="/" className="brand">
          Operator One
        </Link>

        <div className="nav-links">
          {/* 只保留一个核心 CTA */}
          <Link href="/pricing">Get the Playbook</Link>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="button secondary">Log in</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}