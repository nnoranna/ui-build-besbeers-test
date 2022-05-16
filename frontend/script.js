const header = `
<header class="header">
    <h1>Best beers</h1>
    <button class="material-icons">menu</button>
</header>`

/* const cards = beers.map(beer => {
    let card= `
     <div class="card">
        <h2>${card.title}</h2>
     </div>
    `
}) */

function loadEvent() {

    const root = document.getElementById("root");
    root.insertAdjacentHTML("afterbegin", header)

    const beerList = beers.map(beer => {
        const beerCard = document.createElement("div")
        beerCard.className = "card-container"
        document.getElementById("root").appendChild(beerCard)

        beerCard.insertAdjacentHTML("beforeend", `
            <div class="circle">1</div>
            <div class="card">
                <h2>${beer.title}</h2>
            </div>
        `)
    })


}
window.addEventListener("load", loadEvent);

/* window.addEventListener("load", () => {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", header);

    cards.insertAdjacentHTML("beforeend", cards);
    console.log(beers)
}) */