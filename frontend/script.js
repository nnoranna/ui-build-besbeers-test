const header = `
<header class="header">
    <h1>Best beers</h1>
    <button class="material-icons">menu</button>
</header>`


function loadEvent() {

    const root = document.getElementById("root");
    root.insertAdjacentHTML("afterbegin", header)

    const cardsContainer = document.querySelector(".cards-container")

    const beerPage = beers.cards.map((x, index) => `
    <article class="beer-container">
        <div class="circle">${index + 1}</div>
		<div class="beercard">
            <h2>${x.title}</h2>
            <hr class="line">
            <h5>${x.sub}</h5>
            <h6>${x.text}</h6>
		</div>
		<button class="details">
            <span class="btn-text">details</span>
            <span class="material-icons arrow-icon">arrow_forward</span>
        </button>
	</article>
    `).join("")
    cardsContainer.insertAdjacentHTML("beforeend", beerPage)


}
window.addEventListener("load", loadEvent);
