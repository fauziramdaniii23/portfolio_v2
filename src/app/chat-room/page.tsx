"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import DashboardLayout from "@/components/dashboard/Dashboard";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import Chat from "@/components/chat/Chat";

export default function ChatRoom() {
  const { data: session } = useSession();
  const { user, isAuthenticated, login, logout } = useAuthStore();

    useEffect(() => {
    if (session?.user) {
      login({
        user: {
          id: session.user.id || "",
          name: session.user.name || "",
          email: session.user.email || "",
          image: session.user.image || "",
        },
      });
    } else {
      logout();
    }
  }, [session, login, logout]);

  if (isAuthenticated && user) {
    return (
      <DashboardLayout>
        <div className="p-6 flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={user.image || "/default-avatar.png"}
              alt={user.name}
              className="w-24 h-24 rounded-full shadow-md border"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>

          <Button
            onClick={() => {
              signOut();
              logout(); // ✅ bersihkan Zustand juga
            }}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white"
          >
            Logout
          </Button>

          <div className="mt-6 w-full bg-gray-100 p-4 rounded-md text-sm">
            <h3 className="font-semibold mb-2">Data lengkap session:</h3>
            <pre className="bg-white p-3 rounded-md border overflow-x-auto">
              {JSON.stringify({ session, zustandUser: user }, null, 2)}
            </pre>
          </div>
        </div>
        <Chat />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Chat Room Page</h1>
      <p>This is the chat room page of the application.</p>
      <Button onClick={() => signIn("google")}>Login with Google</Button>
    </DashboardLayout>
  );
}
