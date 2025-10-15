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
import { useUserStore } from "@/store/userStore";
import { Input } from "@/components/ui/input";
import { cn, isAuthor } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Author } from "@/app/constant/constant";
import { TUser } from "@/types/type";

type Props = {
  handleNewChat: (user: TUser) => void;
};
const NewChat = ({ handleNewChat }: Props) => {
  const { users, storeUser } = useUserStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (users == null) {
      fetch("api/users")
        .then((res) => res.json())
        .then((data) => storeUser(data));
    }
  }, []);

  const filteredUsers = useMemo(() => {
    return users?.filter((user) => {
      return user.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [users, query]);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <CirclePlus />
          </button>
        </DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-56 p-0")}>
        {/* Header pencarian sticky */}
        <div className="sticky top-0 z-10 bg-popover p-2 border-b">
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            aria-label="Search menu items"
            className="h-9"
          />
        </div>

        {/* Daftar item dengan scroll, input di atas tetap sticky */}
        <div className="py-1 overflow-y-auto">
          {filteredUsers?.length === 0 ? (
            <div className="px-2 py-3 text-sm text-muted-foreground">User not found</div>
          ) : (
            <DropdownMenuGroup>
              {users?.map((user) => (
                <DropdownMenuItem key={user.id} onSelect={() => handleNewChat(user)}>
                  <div className="flex gap-2 justify-center items-center">
                    <Avatar className="w-8 h-8 mt-2">
                    <AvatarImage
                      src={isAuthor(user.email) ? Author.image : user.image || undefined}
                      alt={user.name}
                    />
                    <AvatarFallback>
                      {user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p>{user.name}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};

export default NewChat;
