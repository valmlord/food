import {getResource} from '../services/services';

function cards() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 16;
            this.changeToTL();
        }

        changeToTL() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.classes = "menu__item";
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> ₺/per day</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    // Trying to use AXIOS

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });

    /*     getResource('http://localhost:3000/menu')
            .then(data => {
                data.forEach(({img, altimg, title, descr, price}) => {
                    new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
                });
            }); 
    */

    /*   
        This card don't use when work json server  
    
        new MenuCard(
            "img/tabs/vegy.jpg",
            "vegy",
            'Menu "Fitness"',
            'Menu "Fitness" is a new approach to cooking: more fresh vegetables and fruits. For people who are interested in sports; active and healthy. This is a brand new product with best price and high quality!',
            10,
            '.menu .container',
            'menu__item'
        ).render();
    
        new MenuCard(
            "img/tabs/elite.jpg",
            "elite",
            'Menu "Premium"',
            'Menu "Premium" - we use not only beautiful packaging design, but also high-quality execution dishes. Red fish, seafood, fruits - a restaurant menu without going to a restaurant!',
            20,
            '.menu .container',
            'menu__item'
        ).render();
    
        new MenuCard(
            "img/tabs/post.jpg",
            "post",
            '"Lenten Menu"',
            'Our special "Lenten Menu" is a careful selection of ingredients: the complete absence of products of animal origin. Complete harmony with yourself and nature in every element! All will be Om!',
            15,
            '.menu .container',
            'menu__item'
        ).render(); 
    */
}

export default cards;