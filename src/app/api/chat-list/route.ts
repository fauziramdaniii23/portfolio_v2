import { chatController } from "@/controllers/chatController";
import { authOptions } from "@/lib/auth";
import { decryptFromUrl } from "@/lib/encryptor";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    if (userId === null) {
    throw new Error("userId query parameter is missing");
      }
    const decodedId = decodeURIComponent(userId);
    const decryptUserId = await decryptFromUrl(decodedId);
    const data = await chatController.getChatList(Number(decryptUserId));
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /api/chat error:", error);
    return NextResponse.json({ error: "Failed to fetch chats" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const id = await decryptFromUrl(body.id);
    const message = await chatController.readAllChat(id);
    return NextResponse.json(message);
  } catch (error) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const message = await chatController.createChatList(body.userId);
    return NextResponse.json(message);
  } catch (error) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const id = await decryptFromUrl(body.id);
    const message = await chatController.deletePersonalChat(Number(id));
    return NextResponse.json(message);
  } catch (error) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}