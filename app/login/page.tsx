import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="container section" style={{ display: "grid", placeItems: "center" }}>
      <SignIn path="/login" />
    </main>
  );
}
