    const gallery = document.querySelector(".outer-wrapper");

    const piece = document.querySelector(".slide");

    const chara = document.querySelector(".character img");

    const scrollBtn = document.querySelector("button")

    window.addEventListener("scroll", CharaWalk);


function scrollWinRight(y) {
        gallery.scrollBy({
            top: piece.clientWidth,
            behavior: "smooth",
        });
}

function scrollWinLeft(y) {
        gallery.scrollBy({
            top: -piece.clientWidth,
            behavior: "smooth",
        });
}

function CharaWalk() {
    chara.src = "/tumblr_lysyv4ko471qeh39oo1_r1_500.gif"
}