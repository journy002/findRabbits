const btn = document.querySelector(".event_btn");
const rabbit = document.getElementById("rabbit");

btn.addEventListener("click", () => {
    rabbit.scrollIntoView({
        behavior: "smooth",
    });
});

rabbit.addEventListener("click", () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
});
