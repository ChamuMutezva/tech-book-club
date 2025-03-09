import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import "./index.css";
import { MembershipTiers } from "./components/MembershipTier";
import { Footer } from "./components/Footer";
import { GrowTogether } from "./components/GrowTogether";
import { BookClub } from "./components/BookClub";
import { Journey } from "./components/Journey";
import { Testimonials } from "./components/Testimonials";
import { SkipLink } from "./components/SkipLink";

function App() {
    return (
        <>
            <SkipLink />
            <Header />
            <main className="container mx-auto">
                <Hero />
                <GrowTogether />
                <BookClub />
                <Journey />
                <MembershipTiers />
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}

export default App;
