import { currentUser } from "@clerk/nextjs/server";

export async function getAccessStatus() {
  const user = await currentUser();
  const plan = user?.publicMetadata?.plan;
  const isPro = plan === "pro" || plan === "lifetime";

  return {
    user,
    isPro
  };
}
