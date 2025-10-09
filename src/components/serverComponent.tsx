'use client'
import { prisma } from "@/lib/prisma";
import { useEffect, useState } from "react";

export default function UserList() {
   const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map((u : any) => (
          <li key={u.id}>
            <strong>{u.name}</strong> — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
