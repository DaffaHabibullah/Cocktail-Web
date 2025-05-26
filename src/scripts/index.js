import axios from 'axios';

const main = () => {
    const getAllDrinks = async () => {
        try {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
            const responseJson = response.data;
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllDrinks(responseJson.drinks);
            }
        } catch (error) {
            showResponseMessage(error.message);
        }
    };

    const showResponseMessage = (message = "Check your internet connection!") => {
        alert(message);
    };

    const searchForm = document.querySelector("form");
    const inputDrinks = document.querySelector("#inputDrinks");
    const listDrinks = document.querySelector("#listDrinks");

    const renderAllDrinks = (drinks) => {
        const listDrinkElement = document.querySelector("#listDrinks");
        listDrinkElement.innerHTML = "";

        drinks.forEach(drink => {
            const drinkItem = document.createElement("div");
            drinkItem.className = "list-group-item list-group-item-action mb-3 shadow-sm bg-subtle";
            drinkItem.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="mb-1">Nama: ${drink.strDrink}</h4>
                        <p class="mb-1">Kategori: ${drink.strCategory}</p>
                        <p class="mb-1">Tipe: ${drink.strAlcoholic}</p>
                    </div>
                    <div>
                        <img src="${drink.strDrinkThumb}" class="rounded custom-img" alt="Drink Image">
                    </div>
                </div>
            `;
            listDrinkElement.appendChild(drinkItem);
        });
    };

    searchForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const searchDrink = inputDrinks.value.trim();

        if (searchDrink !== "") {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchDrink}`);
                const responseJson = response.data;
                if (responseJson.drinks) {
                    renderAllDrinks(responseJson.drinks);
                } else {
                    listDrinks.innerHTML = "Minuman dengan nama tersebut tidak ditemukan.";
                }
            } catch (error) {
                showResponseMessage(error.message);
            }
        } else {
            getAllDrinks();
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        getAllDrinks();
    });
}

export default main;