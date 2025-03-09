import { DarkModeToggle } from "./DarkMode";
import bookTechLogo from "/assets/images/logo.svg";

export function Header() {
    return (
        <header className="container mx-auto px-4 py-6 w- max-w-[74rem] sm:p-8">
            <nav className="flex items-center justify-between w-full">
                <a
                    href="/"
                    aria-label="Book tech club - home"
                    className="inline-block logo hover:opacity-75 transition-opacity duration-200 
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                    <img src={bookTechLogo} alt="" width={193} height={36} />
                </a>
                <DarkModeToggle />
            </nav>
        </header>
    );
}
