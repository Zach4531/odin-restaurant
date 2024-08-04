import Icon from './coffee-bean-icon.svg';

export function Home() {
  const container = document.createElement('div');
  container.classList.add('home');

  const logo = new Image();
  logo.src = Icon;

  const headlineContainer = document.createElement('div');
  headlineContainer.classList.add('home-heading');

  const headline = document.createElement('h1');
  headline.textContent = 'TheBean';

  const subHeadline = document.createElement('h2');
  subHeadline.textContent = 'Awaken Your Senses with Every Sip';

  const menuButton = document.createElement('button');
  menuButton.classList.add('home-button');
  menuButton.textContent = 'View Our Menu';

  headlineContainer.appendChild(logo);
  headlineContainer.appendChild(headline);
  headlineContainer.appendChild(subHeadline);
  headlineContainer.appendChild(menuButton);

  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('section-one', 'container');

  const sectionMainHeading = document.createElement('h1');
  sectionMainHeading.textContent = 'Who We Are';

  const sectionImageContainer = document.createElement('div');
  sectionImageContainer.classList.add('section-one-img');

  const sectionContentContainer = document.createElement('div');

  const sectionHeadingOne = document.createElement('h2');
  sectionHeadingOne.textContent = 'Brewed to Perfection, Just for You';

  const sectionHeadingText = document.createElement('p');
  sectionHeadingText.textContent =
    'At our coffee shop, we take pride in delivering the perfect cup of coffee tailored to your taste. Our expert baristas meticulously select and roast the finest beans, ensuring every sip is a testament to quality and craftsmanship. Whether you prefer a bold espresso or a smooth latte, each beverage is brewed to perfection just for you. Step into our cozy atmosphere, savor the rich flavors, and let us make your coffee experience truly exceptional.';

  sectionContentContainer.appendChild(sectionHeadingOne);
  sectionContentContainer.appendChild(sectionHeadingText);

  sectionContainer.appendChild(sectionMainHeading);
  sectionContainer.appendChild(sectionImageContainer);
  sectionContainer.appendChild(sectionContentContainer);

  container.appendChild(headlineContainer);
  container.appendChild(sectionContainer);

  return container;
}
