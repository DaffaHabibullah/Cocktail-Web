class NavLogo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                nav {
                    background-color: #00ADB5;
                    padding: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                nav a {
                    color: #EEEEEE;
                    font-size: 20px;
                    font-weight: bold;
                    text-decoration: none;
                }

                nav img {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }
            </style>

            <nav>
                <a class="navBrand" href="/">
                    <img src="https://www.thecocktaildb.com/images/ingredients/gin-Small.png" alt="Cocktail image">
                    Cocktail Web Fundamental
                </a>
            </nav>
        `;
    }
}

customElements.define("nav-logo", NavLogo);