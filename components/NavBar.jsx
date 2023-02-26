import { Article, Book, Home } from "@mui/icons-material";
import { AppBar, BottomNavigation, BottomNavigationAction } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
    return (
        <>
        <BottomNavigation>
            <BottomNavigationAction label="Home" icon={<Home/>}/>
            <BottomNavigationAction label="Disciplinas" icon={<Book/>}/>
            <BottomNavigationAction label="Posts" icon={<Article/>}/>
        </BottomNavigation>
        </>
    )
}