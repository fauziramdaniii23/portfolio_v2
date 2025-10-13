import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TMessage } from "@/types/type"
import { CheckCheck, EllipsisVertical } from "lucide-react"
import { FaCopy, FaEdit, FaReplyAll, FaTrash } from "react-icons/fa"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { useState } from "react"
import { on } from "events"

type Props = {
  message: TMessage
  onReply: (message: TMessage) => void
  onEdit: (message: TMessage) => void
  onDelete: (message: TMessage) => void
}

export function ChatAction({message, onReply, onEdit, onDelete}: Props) {
  const [editText, setEditText] = useState(message.message)
  const [isEditing, setIsEditing] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCopy = async (messageCopy: string) => {
      await navigator.clipboard.writeText(messageCopy)
  }
  const handleEdit = async () => {
    console.log('edit',editText)
    if(!editText.trim()) return

    const res = await fetch("/api/chat-room", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, editText }),
    });

    const newMsg = await res.json();
    setIsEditing(false)
    setMenuOpen(false)
    onEdit(newMsg);
  }

  const handleDelete = async () => {
    const res = await fetch("/api/chat-room", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id : message.id }),
    });

    const newMsg = await res.json();
    setMenuOpen(false)
    onDelete(newMsg);
  }
  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full w-9 h-9"><EllipsisVertical/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => onReply(message)}>
            <FaReplyAll /> Reply
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => handleCopy(message.message)}>
            <FaCopy /> Copy
          </DropdownMenuItem>
          {
            message.isMine && (
              <>
                 <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                  >
                    <FaEdit/> Edit
                  </DropdownMenuItem>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Pesan</DialogTitle>
                  </DialogHeader>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    rows={4}
                  />
                  <DialogFooter>
                    <Button
                      onClick={handleEdit}
                    >
                      Simpan
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
                <AlertDialog>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                  >
                    <FaTrash /> Delete
                  </DropdownMenuItem>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Hapus Pesan?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Pesan ini akan dihapus secara permanen dan tidak dapat dikembalikan.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDelete}
                      className="bg-red-600 text-white hover:bg-red-700"
                    >
                      Hapus
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              </>
            )
          }
        </DropdownMenuGroup>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
