import star from "/assets/images/icon-star.svg"

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="stars flex">
        {[...Array(5)].map((_, index) => (
          <img key={index} src={star || "/placeholder.svg"} alt="" />
        ))}
      </div>
      <h2>Testimonials</h2>
      <div className="testimonial">
        <p>
          "This book club transformed my technical reading from a solitary activity into an enriching community
          experience. The discussions are gold!"
        </p>
        <p>Sarah Chen, Software Architect</p>
      </div>
    </section>
  )
}

