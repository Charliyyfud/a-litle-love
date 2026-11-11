
// ======================================
// NAVIGASI ANTAR HALAMAN
// ======================================

function nextPage(number) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById("page" + number);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createBurst();
}

// ======================================
// MUSIK ROMANTIS
// ======================================

const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            musicBtn.textContent = "♫ Pause Music";
        } catch (error) {
            alert("Pastikan file music/romantic.mp3 sudah tersedia.");
        }
    } else {
        music.pause();
        musicBtn.textContent = "♫ Play Music";
    }
});

// ======================================
// SURAT CINTA
// ======================================

function openLetter() {
    document.getElementById("envelope")
        .classList.add("hidden");

    document.getElementById("letter")
        .classList.remove("hidden");

    createBurst();
}

function closeLetter() {
    document.getElementById("letter")
        .classList.add("hidden");

    document.getElementById("envelope")
        .classList.remove("hidden");
}

// ======================================
// PESAN RAHASIA
// ======================================

function revealSecret() {
    const secret = document.getElementById("secretMessage");
    const icon = document.getElementById("secretIcon");
    const label = document.getElementById("secretLabel");

    secret.classList.remove("hidden");

    icon.textContent = "💖";
    label.textContent = "You Found It!";

    createBurst();

    secret.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// ======================================
// HADIAH TERAKHIR
// ======================================

function openFinal() {
    document.getElementById("finalMessage")
        .classList.remove("hidden");

    createConfetti();

    document.getElementById("finalMessage")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}

// ======================================
// ANIMASI HATI DAN BUNGA
// ======================================

const floating = document.getElementById("floating");

const symbols = [
    "💗", "💕", "💖", "♡",
    "🌸", "🌷", "✨", "🎀"
];

function createFloating() {
    const item = document.createElement("div");

    item.className = "floating-item";

    item.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (15 + Math.random() * 22) + "px";
    item.style.animationDuration = (5 + Math.random() * 5) + "s";

    floating.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 10000);
}

function createBurst() {
    for (let i = 0; i < 20; i++) {
        setTimeout(createFloating, i * 70);
    }
}

function createConfetti() {
    const confetti = ["💗", "💖", "🌸", "✨", "🎀"];

    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            createFloating();
        }, i * 45);
    }
}

// Hati dan bunga muncul secara berkala
setInterval(createFloating, 900);

// Efek saat halaman pertama kali dibuka
window.addEventListener("load", () => {
    createBurst();
});
