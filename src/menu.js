export function Menu() {
  const container = document.createElement('div');
  container.classList.add('menu', 'container');

  const mainHeading = document.createElement('h1');
  mainHeading.classList.add('menu-heading');
  mainHeading.textContent = 'Menu';

  const coffeeMenu = {
    'Espresso Based': [
      {
        name: 'Espresso',
        price: '2.50',
        description: 'A rich, full-bodied shot of pure coffee.',
      },
      {
        name: 'Americano',
        price: '3.00',
        description:
          'Espresso diluted with hot water for a smooth, rich coffee.',
      },
      {
        name: 'Latte',
        price: '4.00',
        description: 'Creamy steamed milk blended with a shot of espresso.',
      },
      {
        name: 'Cappuccino',
        price: '4.00',
        description: 'Equal parts espresso, steamed milk, and frothy foam.',
      },
      {
        name: 'Macchiato',
        price: '3.50',
        description: 'Espresso topped with a dollop of steamed milk.',
      },
      {
        name: 'Mocha',
        price: '4.50',
        description: 'Espresso mixed with chocolate syrup and steamed milk.',
      },
    ],
    'Brewed Coffee': [
      {
        name: 'Drip Coffee',
        price: '2.50',
        description: 'Classic brewed coffee with a smooth finish.',
      },
      {
        name: 'Pour Over',
        price: '3.50',
        description: 'Hand-poured coffee for a clean and vibrant flavor.',
      },
      {
        name: 'French Press',
        price: '3.50',
        description: 'Rich and robust coffee with a full-bodied taste.',
      },
      {
        name: 'Cold Brew',
        price: '4.00',
        description: 'Smooth, cold coffee brewed over 12 hours.',
      },
      {
        name: 'Iced Coffee',
        price: '3.00',
        description: 'Refreshing coffee served over ice.',
      },
      {
        name: 'Nitro Cold Brew',
        price: '4.50',
        description: 'Cold brew infused with nitrogen for a creamy texture.',
      },
    ],
    'Specialty Drinks': [
      {
        name: 'Chai Latte',
        price: '4.00',
        description: 'Spiced tea blended with steamed milk.',
      },
      {
        name: 'Matcha Latte',
        price: '4.50',
        description: 'Japanese green tea powder whisked with steamed milk.',
      },
      {
        name: 'Golden Milk Latte (Turmeric Latte)',
        price: '4.50',
        description: 'Warm milk infused with turmeric, cinnamon, and honey.',
      },
      {
        name: 'Dirty Chai Latte',
        price: '4.50',
        description: 'Chai latte with a shot of espresso.',
      },
      {
        name: 'Iced Latte',
        price: '4.00',
        description: 'Espresso and milk served over ice.',
      },
      {
        name: 'Flavored Latte',
        price: '4.50',
        description:
          'Latte with your choice of flavored syrup (Vanilla, Caramel, Hazelnut).',
      },
    ],
  };

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
