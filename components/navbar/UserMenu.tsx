"use client";
import React from "react";
import { Menu } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "../ui/dropdown-menu";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

const UserMenu = () => {
  return (
    <div className="realative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block 
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
        "
        >
          Bnb your home
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="
                p-4
                md:p-1
                border
                flex
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
                "
            >
              <Menu size={18} />
              <div className="hidden md:block">
                <Avatar className="w-[30px] h-[30px]">
                  <AvatarImage
                    src="/images/userplaceholder.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropDowns />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

// Dropdown Menus
const DropDowns = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  return (
    <DropdownMenuGroup>
      <DropdownMenuItem onClick={loginModal.onOpen}>Login</DropdownMenuItem>
      <DropdownMenuItem onClick={registerModal.onOpen}>
        Register
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
};

export default UserMenu;
