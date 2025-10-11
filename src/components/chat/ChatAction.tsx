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
import { EllipsisVertical } from "lucide-react"
import { FaCopy, FaEdit, FaReplyAll, FaTrash } from "react-icons/fa"

type Props = {
  message: TMessage
  onReply: (message: TMessage) => void
}

export function ChatAction({message, onReply}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"  className="rounded-full w-9 h-9"><EllipsisVertical/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => onReply(message)}>
            <FaReplyAll /> Reply
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <FaCopy /> Copy
          </DropdownMenuItem>
          {
            message.isMine && (
              <>
                <DropdownMenuItem>
                  <FaEdit /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FaTrash /> Delete
                </DropdownMenuItem>
              </>
            )
          }
        </DropdownMenuGroup>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
