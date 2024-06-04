class Restaurants extends HTMLElement {
    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        const response = await fetch("http://localhost:3000/restaurants");
        const res_data = await response.json();
        console.log("res_data", res_data);

        res_data.array.forEach(element => {
            const card = document.createElement('div');
            card.setAttribute('class', 'restaurant-card');

            card.innerHTML = `
                <img src="../assets/images/res-photo-3.png" class="card-img-top" alt="${element.name}">
                <div class="card-body">
                    <div class="card-top">
                        <h5 class="card-title">${element.name}</h5>
                        <button class="heart-btn">
                            <i class="ri-heart-line"></i>
                        </button>
                    </div>
                    <div class="card-info">
                        <div class="status">
                            <span class="open">${element.status}</span>
                            <span class="close-status">• Closes ${element.closingTime}</span>
                        </div>
                        <div class="card-rating">
                            <span class="star"></span>
                            <span class="rating">${element.rating} (${element.reviews})</span>
                        </div>
                    </div>
                </div>
            `;

            shadow.appendChild(card);
        });
    }
}

customElements.define('res-restaurants', Restaurants);