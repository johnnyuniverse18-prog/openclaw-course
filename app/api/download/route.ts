import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const hasAccess =
      user.publicMetadata?.plan === "pro" ||
      user.publicMetadata?.hasPurchasedPlaybook === true;

    if (!hasAccess) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const filePath = path.join(
      process.cwd(),
      "protected-assets",
      "AI_Operator One_Playbook.pdf"
    );

    console.log("Trying to read file:", filePath);

    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="operator-one-playbook.pdf"',
        "Cache-Control": "private, no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      {
        error: "Unable to download file",
        detail: String(error),
      },
      { status: 500 }
    );
  }
}