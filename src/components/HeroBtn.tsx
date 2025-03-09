import arrowDown from "/assets/images/icon-arrow-down.svg";

function HeroBtn() {
    return (
        <a
            href="#membership"
            className="btn-primary flex items-center justify-center uppercase gap-1 max-w-[24.25rem]
                        border-2 border-[hsl(var(--neutral-900))] text-[hsl(var(--neutral-900))] bg-[hsl(var(--light-salmon-100))]
                         dark:border-white dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-all rounded-lg"
        >
            Review membership options{" "}
            <img src={arrowDown} className="arrow" alt="" />
        </a>
    );
}

export default HeroBtn;
