import './style.css';

export default function Menu(){
    const myMenu = document.createElement('div');
    myMenu.classList.add('menu');

    const namePlate1 = document.createElement('h3');
    namePlate1.classList.add('namePlate', 'namePlate1');
    namePlate1.innerHTML = 'Milanesas a la napolitana';
    const imagePlate1 = document.createElement('img');
    imagePlate1.classList.add('imagePlate', 'imagePlate1');
    const descriptionPlate1 = document.createElement('p');
    descriptionPlate1.classList.add('descriptionPlate', 'descriptionPlate1');
    descriptionPlate1.innerHTML = 'This is a traditional dish from El Río de la Plata, Argentina under the influence of italian immigrants. It consist in breaded meat, cooked in the oven and covered with tomato slices and mozzarella cheese. It can also have more ingredients like bacon or onions on top.';

    const namePlate2 = document.createElement('h3');
    namePlate2.classList.add('namePlate', 'namePlate2');
    namePlate2.innerHTML = 'Argentinian empanadas';
    const imagePlate2 = document.createElement('img');
    imagePlate2.classList.add('imagePlate', 'imagePlate2');
    const descriptionPlate2 = document.createElement('p');
    descriptionPlate2.classList.add('descriptionPlate', 'descriptionPlate2');
    descriptionPlate2.innerHTML = 'An empanada is a type of baked or fried turnover consisting of pastry and filling, common in Latin American countries and Southern Europe. They are made by folding dough over a filling, which may consist of meat, cheese, tomato, corn, or other ingredients, and then cooking the resulting turnover, either by baking or frying.';


    appendAllChilds(myMenu, namePlate1, imagePlate1, descriptionPlate1);
    appendAllChilds(myMenu, namePlate2, imagePlate2, descriptionPlate2);

    return myMenu;
}

function appendAllChilds(container, ...args) {
    args.forEach(el => container.appendChild(el));
}