"use client";

import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex items-center justify-between p-5">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="BEWEAR" width={100} height={26.14} />
      </Link>

      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-bold">Menu</SheetTitle>
            </SheetHeader>
            <div className="px-5">
              {session?.user ? (
                <>
                  <div className="flex justify-between space-y-6">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={session?.user?.image ?? undefined} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {
                            session?.user?.name
                              ?.toUpperCase()
                              .split(" ")?.[0]?.[0]
                          }
                          {
                            session?.user?.name
                              ?.toUpperCase()
                              .split(" ")?.[1]?.[0]
                          }
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{session?.user?.name}</h3>
                        <span className="text-muted-foreground block text-xs">
                          {session?.user?.email}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      onClick={() => {
                        authClient.signOut();
                      }}
                    >
                      <LogOutIcon />
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold">Olá. Faça o seu login!</h2>
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="flex items-center gap-3 rounded-3xl"
                      >
                        <Link href={"/authentication"}>
                          Login
                          <LogInIcon />
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
