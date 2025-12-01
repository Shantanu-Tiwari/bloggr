"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./icons";
import { ModeToggle } from "./ui/mode-toggle";
import { POSTS } from "@/lib/constants";

export function MainNav({ className }: { className?: string }) {
  return (
    <nav className={cn("pt-10 z-50 w-full", className)}>
      {/* Mobile Layout */}
      <div className="flex flex-col space-y-4 md:hidden">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Icons.logo className="h-6 w-6" />
            <p>Bloggr</p>
          </div>
        </Link>

        <div className="flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList className="flex-row -ml-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-3 p-4">
                    {POSTS.map((post) => (
                      <ListItem
                        key={post.title}
                        title={post.title}
                        href={post.href}
                      >
                        {post.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <Link href="/rss">
              <Icons.rss className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex md:items-center md:justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Icons.logo className="h-6 w-6" />
            <p>Bloggr</p>
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2 lg:w-[500px]">
                  {POSTS.map((post) => (
                    <ListItem
                      key={post.title}
                      title={post.title}
                      href={post.href}
                    >
                      {post.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/rss">
            <Icons.rss className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
