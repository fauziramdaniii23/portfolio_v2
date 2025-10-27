import { chatController } from "@/controllers/chatController";
import { authOptions } from "@/lib/auth";
import { decryptFromUrl } from "@/lib/encryptor";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const id = await decryptFromUrl(body.id);
    const message = await chatController.updateChat(id);
    return NextResponse.json(message);
  } catch (error) {
    console.error("POST /api/unread-chat error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}