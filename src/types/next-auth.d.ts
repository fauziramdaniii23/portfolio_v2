import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // ubah dari number ke string ✅
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string; // ubah juga di sini ✅
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}
