import { coffeeMenu } from './coffee';
import { makeElement } from './element';

export function Menu() {
  const container = document.createElement('div');
  container.classList.add('menu', 'container');

  const mainHeading = makeElement('h1')
    .addText('Menu')
    .addClass('menu-heading')
    .create();

  const tabMenu = makeElement('div').addClass('tab-menu').create();

  for (const category in coffeeMenu) {
    const tabButton = makeElement('button').addText(category).create();
    tabMenu.appendChild(tabButton);
  }

  const menuContainer = makeElement('div').addClass('drink-menu').create();

  function createMenuItem(name, price, description) {
    const menuItem = makeElement('div').addClass('menu-item').create();
    const itemName = makeElement('h3')
      .addText(name)
      .addClass('menu-item-heading')
      .create();
    const itemPrice = makeElement('p')
      .addText(`$${price}`)
      .addClass('menu-item-price')
      .create();
    const itemDescription = makeElement('p')
      .addText(description)
      .addClass('menu-item-description')
      .create();

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
