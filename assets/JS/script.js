const noBtn = document.querySelector(".nobtn");
const yesBtn = document.querySelector(".yesbtn");
const container = document.querySelector(".container");

let clickCount = 0;

noBtn.addEventListener("mouseover", function () {
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noBtn.offsetWidth;
    const maxY = containerRect.height - noBtn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
noBtn.addEventListener("click", function () {
    clickCount++;
    if (clickCount === 3) {
        noBtn.style.display = "none";
    }
});
yesBtn.addEventListener("click", function () {
    container.innerHTML = `
        <div style="text-align:center;">
            <img src="./assets/media/bear-kiss-bear-kisses.gif" 
                 style="width:50%; border-radius:20px; margin-bottom:20px;">
            <h2 style="color:#e6004c;">Yayyyy ❤️</h2>
            <p style="color:black; font-size:18px;">
                I knew you would say YES 😍<br>
                Happy Valentine's Day 💕
            </p>
        </div>
    `;
});