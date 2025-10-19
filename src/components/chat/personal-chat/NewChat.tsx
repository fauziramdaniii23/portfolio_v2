import { CirclePlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useMemo, useState } from "react";
import { useUserListStore } from "@/store/userStore";
import { Input } from "@/components/ui/input";
import { cn, isAuthor } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Author } from "@/constant/constant";
import { TUser } from "@/types/type";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthStore } from "@/store/authStore";

type Props = {
  handleNewChat: (user: TUser) => void;
};
const NewChat = ({ handleNewChat }: Props) => {
  const {user} = useAuthStore()
  const { users, storeUserList } = useUserListStore();
  const [queryUser, setQueryUser] = useState("");
  const [ userList, setUserList ] = useState<TUser[]>(users ? users : [])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (users == null || users.length === 0) {
      fetch("api/users")
        .then((res) => res.json())
        .then((data : TUser[]) => {
          const filtered = data.filter((u) => u.id !== user?.id);
          setUserList(filtered);
          storeUserList(filtered)
        });
    } else {
      setUserList(users)
    }
  }, []);
  
  const filtered = useMemo(() => {
    const q = queryUser.trim().toLowerCase()
    if (!q) return userList
    if(!userList) return []
    return userList.filter((user) => user.name.toLowerCase().includes(q))
  }, [userList, queryUser])

  const onSelectUser = (user : TUser) => {
    handleNewChat(user)
    setOpen(false)
  }

  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button>
            <CirclePlus />
          </button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-64 p-0")}>
        {/* Header pencarian sticky */}
        <div className="sticky top-0 z-10 bg-popover p-2 border-b">
          <p className="mx-1 mb-2">New Chat</p>
          <Input
            autoFocus
            value={queryUser}
            onChange={(e) => setQueryUser(e.target.value)}
            placeholder="Search..."
            aria-label="Search menu items"
            className="h-9"
          />
        </div>

        {/* Daftar item dengan scroll, input di atas tetap sticky */}
        <div className="py-1 overflow-y-auto">
          {filtered?.length === 0 || !Array.isArray(filtered) ? (
            <div className="px-2 py-3 text-sm text-muted-foreground">User not found</div>
          ) : (
            <DropdownMenuGroup>
              <ScrollArea className="max-h-[60vh]">
              {Array.isArray(filtered) && filtered?.map((user) => (
                <div className="cursor-pointer text-left hover:bg-muted p-2"
                 key={user.id} onClick={() => onSelectUser(user)}>
                  <div className="flex gap-2 m-2">
                    <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={isAuthor(user.email) ? Author.image : user.image || undefined}
                      alt={user.name}
                    />
                    <AvatarFallback>
                      {user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-center mt-1">{user.name}</p>
                  </div>
                </div>
              ))}
              </ScrollArea>
            </DropdownMenuGroup>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};

export default NewChat;
