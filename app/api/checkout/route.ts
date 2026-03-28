import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "checkout",
    message: "API route is live",
  });
}

export async function POST() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;
    const appUrl =
      process.env.NEXT_PUBLIC_APP_URL || "https://openclaw-course-new.vercel.app";

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing Stripe price id" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: user.primaryEmailAddress.emailAddress,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/pricing?canceled=1`,
      metadata: {
        clerkUserId: userId,
        product: "operator-one-playbook",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}