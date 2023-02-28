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
    e.preventDefault();
    var target = $(this).attr("href");
    var $target = $(target);
    $("html, body").animate(
        {
            scrollTop: $target.offset().top,
        },
        1000
    );
});

// * typewriter in the main
// Set a timeout function to remove the text after 3 seconds

const headerText = "definitely notalim!"; // text to be typed out
const headerContainer = document.getElementById("header-text"); // select the header text container
const textContainer = document.querySelector(".text-container"); // select the text container

let isTyping = true;
let i = 0;
function typeWriter() {
    if (isTyping) {
        if (i < headerText.length) {
            headerContainer.innerHTML += headerText.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // adjust typing speed here
        } else {
            isTyping = false;
            setTimeout(typeWriter, 3000); // wait for 3 seconds before erasing
        }
    } else {
        if (i > 0) {
            headerContainer.innerHTML = headerContainer.innerHTML.slice(0, -1);
            i--;
            setTimeout(typeWriter, 50); // adjust erasing speed here
        } else {
            isTyping = true;
            i = 0;
            setTimeout(typeWriter, 1500); // wait for 1.5 seconds before typing again
        }
    }
}

typeWriter();

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
document.querySelector('#discord-link').addEventListener('click', function() {
  const discordHandle = 'notalim#2105';
  navigator.clipboard.writeText(discordHandle);
  alert('tag copied to clipboard: ' + discordHandle);
});
