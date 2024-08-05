import { coffeeMenu } from './coffee';

export function Menu() {
  const container = document.createElement('div');
  container.classList.add('menu', 'container');

  const mainHeading = document.createElement('h1');
  mainHeading.classList.add('menu-heading');
  mainHeading.textContent = 'Menu';

  const tabMenu = document.createElement('div');
  tabMenu.classList.add('tab-menu');

  for (const category in coffeeMenu) {
    const tabButton = document.createElement('button');
    tabButton.textContent = category;

    tabMenu.appendChild(tabButton);
  }

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('drink-menu');

  function createMenuItem(name, price, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;
    itemName.style.color = 'rgb(119, 89, 33)';

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `$${price}`;
    itemPrice.style.fontWeight = 'bold';
    itemPrice.style.justifySelf = 'end';
    itemPrice.style.color = 'rgb(92, 69, 26)';

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    itemDescription.style.gridColumn = '1/3';

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(itemDescription);

    menuContainer.appendChild(menuItem);
  }

  for (const category in coffeeMenu) {
    coffeeMenu[category].forEach(({ name, price, description }) => {
      createMenuItem(name, price, description);
    });
  }

  container.appendChild(mainHeading);
  container.appendChild(tabMenu);
  container.appendChild(menuContainer);

  return container;
}
