import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * GET: Ambil semua chat
 * (akan include user, reply, dan mention)
 */
export async function GET() {
  try {
    const messages = await prisma.chat.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        user: true,
        replyTo: {
          include: { user: true },
        },
        mentions: {
          include: { mentioned: true },
        },
      },
      orderBy: { createdAt: "asc" },
    });
    

    return NextResponse.json(messages);
  } catch (error) {
    console.error("GET /api/chat error:", error);
    return NextResponse.json({ error: "Failed to fetch chats" }, { status: 500 });
  }
}

/**
 * POST: Kirim pesan baru
 * body: { message: string, userId: number, replyToId?: number, mentions?: number[] }
 */
export async function POST(req: Request) {
  try {
    const { message, userId, replyToId, mentions } = await req.json();

    if (!message || !userId) {
      return NextResponse.json({ error: "message and userId are required" }, { status: 400 });
    }

    const newChat = await prisma.chat.create({
      data: {
        message,
        userId,
        replyToId: replyToId ?? null,
        mentions: mentions
          ? {
              create: mentions.map((mentionedId: number) => ({
                mentionedId,
              })),
            }
          : undefined,
      },
      include: {
        user: true,
        replyTo: { include: { user: true } },
        mentions: { include: { mentioned: true } },
      },
    });

    return NextResponse.json(newChat);
  } catch (error) {
    console.error("POST /api/chat error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

/**
 * PUT: Edit pesan
 * body: { id: number, message: string }
 */
export async function PUT(req: Request) {
  try {
    const { id, message } = await req.json();

    if (!id || !message) {
      return NextResponse.json({ error: "id and message are required" }, { status: 400 });
    }

    const updated = await prisma.chat.update({
      where: { id },
      data: { message },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/chat error:", error);
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 });
  }
}

/**
 * DELETE: Hapus pesan
 * body: { id: number }
 * (soft delete — hanya set deletedAt)
 */
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 });
    }

    const deleted = await prisma.chat.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return NextResponse.json(deleted);
  } catch (error) {
    console.error("DELETE /api/chat error:", error);
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
  }
}
