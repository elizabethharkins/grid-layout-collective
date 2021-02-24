

class TiledInterior {

	constructor(els="", container, numberOfTiles) {
		this.els = els;
		this.container = container;
		this.numberOfTiles = numberOfTiles;
	}

	generateTiles() {
		for (let i = 0; i < this.numberOfTiles; i++) {
			let count = i + 1;
		   	this.els += `<section class="tile-${count}">${count}</section>`;
		}

		return this.container.innerHTML = this.els;
	}

}

const retroUmberGrid = document.querySelector(".grid-container.retro-umber");
const businessCardGrid = document.querySelector(".grid-container.business-card");
const retroTealGrid = document.querySelector(".grid-container.retro-teal");
const retroMauveGrid = document.querySelector(".grid-container.retro-mauve");
const headerFragment = document.createRange().createContextualFragment(`<h1>nestiny</h1>`);

retroUmberGrid.innerHTML = new TiledInterior("", retroUmberGrid, 10).generateTiles();
businessCardGrid.innerHTML = new TiledInterior("", businessCardGrid, 11).generateTiles();
retroTealGrid.innerHTML = new TiledInterior("", retroTealGrid, 10).generateTiles();
retroMauveGrid.innerHTML = new TiledInterior("", retroMauveGrid, 10).generateTiles();

businessCardGrid.querySelectorAll("section").forEach(section => section.innerHTML = "");
businessCardGrid.querySelector(".tile-11").appendChild(headerFragment);

