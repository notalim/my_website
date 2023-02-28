// Add active class to navigation menu on click
const navItems = document.querySelectorAll("nav a");
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navItems.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});

// * smooth scroll
$("nav a").on("click", function (e) {
    var target = $(this).attr("href");
    if (target === "/home.html") {
        return;
    } else {
        e.preventDefault();
        var $target = $(target);

        $("html, body").animate(
            {
                scrollTop: $target.offset().top,
            },
            1000
        );
    }
});

const heading = document.querySelector("#social-text");

// * animate contacts heading
function animateHeading() {
    const colors = [
        "#8956F1",
        "#9A61F5",
        "#AA6BF8",
        "#CB80FF",
        "#A267CD",
        "#784E9A",
        "#634281",
        "#4E3568",
        "#241B35",
        "#383047",
    ];
    let currentIndex = 0;
    setInterval(() => {
        heading.style.background = `linear-gradient(to right, ${
            colors[currentIndex]
        }, ${colors[(currentIndex + 1) % colors.length]})`;
        heading.style.webkitBackgroundClip = "text";
        heading.style.webkitTextFillColor = "transparent";
        currentIndex = (currentIndex + 1) % colors.length;
    }, 100);
}

animateHeading();

// * discord link copy
document.querySelector("#discord-link").addEventListener("click", function () {
    const discordHandle = "notalim#2105";
    navigator.clipboard.writeText(discordHandle);
    alert("tag copied to clipboard: " + discordHandle);
});
