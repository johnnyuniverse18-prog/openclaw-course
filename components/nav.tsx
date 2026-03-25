import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">Operator One</Link>
        <div className="nav-links">
          <Link href="/Playbook">Playbook</Link>
          <Link href="/dashboard">Dashboard</Link>
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
