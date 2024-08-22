function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function featuresScroll() {
    document.getElementById("featuresbox").scrollIntoView();
}

function buyScroll() {
    document.getElementById("paymentbox").scrollIntoView();
}

function faqScroll() {
    document.getElementById("faqbox").scrollIntoView();
}

const EMPTY = "";
const BURGER_MENU = document.getElementById("burger-menu");
const NAVITEMS = document.getElementById("navitems");
const NAVITEM_HEIGHT_VARIABLE_NAME = "--navitem-height";

BURGER_MENU.addEventListener("click", () => {
    let currentNavitemHeight = document.documentElement.style.getPropertyValue(
        NAVITEM_HEIGHT_VARIABLE_NAME
    );

    if (currentNavitemHeight === EMPTY) {
        currentNavitemHeight = "0";
    }

    document.documentElement.style.setProperty(
        NAVITEM_HEIGHT_VARIABLE_NAME,
        currentNavitemHeight === "0" ? "8rem" : "0"
    );
});

const phrase = [
    "Unmatched quality, bypasses, and features Supporting Minecraft Java Edition 1.8-1.18.",
];
const el = document.getElementById("typewriter");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let sleepTime = 20;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrase[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 100);

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 75);
    }
};

writeLoop();
