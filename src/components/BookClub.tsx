import notAverageMobile from "/assets/images/image-not-average-mobile.webp"
import notAverageTablet from "/assets/images/image-not-average-tablet.webp"
import notAverageDesktop from "/assets/images/image-not-average-desktop.webp"

export function BookClub() {
  return (
    <section className="book-club">
      <div className="book-club-content">
        <h2>Not your average book club</h2>
        <p>
          Connect with a community that speaks your language - from Python to TypeScript and everything in between. Our
          discussions blend technical depth with practical applications.
        </p>
      </div>
      <div className="book-club-image">
        <picture>
          <source media="(min-width: 64rem)" srcSet={notAverageDesktop} />
          <source media="(min-width: 48rem)" srcSet={notAverageTablet} />
          <img
            className="book-club-image"
            src={notAverageMobile || "/placeholder.svg"}
            alt="Tech book club members discussing a book"
          />
        </picture>
      </div>
    </section>
  )
}


