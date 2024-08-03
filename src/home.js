import Icon from './coffee-bean-icon.svg';

export function Home() {
  const container = document.createElement('div');
  container.classList.add('home');

  const logo = new Image();
  logo.src = Icon;

  const headlineContainer = document.createElement('div');
  headlineContainer.classList.add('home-heading');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to TheBean';

  const subHeadline = document.createElement('h2');
  subHeadline.textContent = 'Brewed to Perfection, Just for You';

  const menuButton = document.createElement('button');
  menuButton.classList.add('home-button');
  menuButton.textContent = 'View Menu';

  headlineContainer.appendChild(logo);
  headlineContainer.appendChild(headline);
  headlineContainer.appendChild(subHeadline);
  headlineContainer.appendChild(menuButton);

  container.appendChild(headlineContainer);

  return container;
}
