'use client';
import { useMediaQuery } from "@/hooks/use-media-query";
import { 
    Drawer, 
    DrawerContent, 
    DrawerTrigger,
    DrawerHeader,
    DrawerTitle,
} from "./ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Menu() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return isDesktop 
    ? <div className="flex justify-between items-center px-5">
        <p>Logo</p>
        <div className="flex justify-center gap-4 p-4">
            <Link href="/">Home</Link>
            <Link href="/gdsfgdf">CV</Link>
            <Link href="/gdsfgdsfgdf">Contact</Link>
        </div>
        <Button>Connexion</Button>
    </div> 
    : <div>
        <Drawer direction="right">
            <DrawerTrigger>
                <div className="p-5">
                    <MenuIcon />
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center">Logo</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 flex flex-col">
                    <Link href="/">Home</Link>
                    <Link href="/gdsfgdf">CV</Link>
                    <Link href="/gdsfgdsfgdf">Contact</Link>
                </div>
            </DrawerContent>
        </Drawer>
    </div>
}