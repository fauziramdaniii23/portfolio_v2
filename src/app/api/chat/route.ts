import { chatController } from "@/controllers/chatController";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await chatController.getAllChats();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET /api/chat error:", error);
    return NextResponse.json({ error: "Failed to fetch chats" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = await chatController.createChat(body);
    return NextResponse.json(message);
  } catch (error) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
