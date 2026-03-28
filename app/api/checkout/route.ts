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
    const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;
    const appUrl =
      process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing Stripe price id" },
        { status: 500 }
      );
    }

    const successUrl = `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${appUrl}/pricing?canceled=1`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
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