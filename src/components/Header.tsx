import bookTechLogo from "/assets/images/logo.svg";

export function Header() {
    return (
        <header className="container mx-auto px-4 py-6">
            <a href="/" aria-label="book tech club" className="inline-block">
                <img src={bookTechLogo || "/placeholder.svg"} alt="" />
            </a>
        </header>
    );
}
