import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import "./index.css";
import { MembershipTiers } from "./components/MembershipTier";
import { Footer } from "./components/Footer";
import { GrowTogether } from "./components/GrowTogether";
import { BookClub } from "./components/BookClub";
import { Journey } from "./components/Journey";
import { Testimonials } from "./components/Testimonials";

function App() {
    return (
        <>
            <Header />
            <main className="container mx-auto">
                <Hero />
                <GrowTogether />
                <MembershipTiers />
                <BookClub />
                <Journey />
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}

export default App;
