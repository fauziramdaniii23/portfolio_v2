import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// ✅ PUT: Update user
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const userId = Number(params.id);
    const body = await req.json();
    const { name, email, image } = body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email,
        image,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("PUT /users/:id error:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

// ✅ DELETE: Hapus user
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userId = Number(params.id);
    await prisma.user.delete({
      where: { id: userId },
    });
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("DELETE /users/:id error:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
