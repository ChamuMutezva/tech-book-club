import avatars from "/assets/images/image-avatars.webp";
import star from "/assets/images/icon-star.svg";

function Ratings() {
    return (
        <div className="ratings-container flex items-center gap-3 justify-center lg:justify-start  max-w-[24.25rem]">
            <div className="flex-[0_0_35%]">
                <img src={avatars} alt="" className="max-w-full" />
            </div>
            <div className="ratings flex flex-col flex-grow items-baseline">
                <div className="stars flex">
                    {[...Array(5)].map((_, index) => (
                        <img key={index} src={star} alt="" aria-hidden="true" />
                    ))}
                    <span className="sr-only">5 out of 5 star rating</span>
                </div>
                <p className="text-left text-preset-7">
                    200+ developers joined already
                </p>
            </div>
        </div>
    );
}

export default Ratings;
