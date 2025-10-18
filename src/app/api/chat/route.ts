import { chatController } from "@/controllers/chatController";
import { authOptions } from "@/lib/auth";
import { decryptFromUrl } from "@/lib/encryptor";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const personalChatId = searchParams.get("personalChatId");

    let data;

    if (personalChatId) {
        const decryptPersonalChatId = await decryptFromUrl(personalChatId);
      data = await chatController.getChatByPersonalChatId(decryptPersonalChatId);
    } else {
      data = await chatController.getAllChats();
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /api/chat error:", error);
    return NextResponse.json({ error: "Failed to fetch chats" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const message = await chatController.createChat(body.currentMessage);
    return NextResponse.json(message);
  } catch (error) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const message = await chatController.updateMessage(body.message, body.editText);
    return NextResponse.json(message);
  } catch (error) {
    console.error("PUT /api/chat error:", error);
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();

    const deletedMsg = await chatController.softDeleteMessage(body.message);
    return NextResponse.json(deletedMsg);
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
  }
}
