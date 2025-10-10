import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { FaCopy, FaEdit, FaReplyAll, FaTrash } from "react-icons/fa"

type Props = {
  isMine: boolean
}

export function ChatAction({isMine}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"  className="rounded-full w-9 h-9"><EllipsisVertical/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FaReplyAll /> Reply
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <FaCopy /> Copy
          </DropdownMenuItem>
          {
            isMine && (
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
