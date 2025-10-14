import { pusher } from "@/lib/pusher/pusherServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    await pusher.trigger("test-channel", "test-event", { message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Pusher trigger error:", error);
    return NextResponse.json({ error: "Failed to trigger" }, { status: 500 });
  }
}
