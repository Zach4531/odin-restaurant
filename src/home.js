import Icon from './coffee-bean-icon.svg';
import { makeElement } from './element';

export function Home() {
  const container = makeElement('div').addClass('home').create();

  const logo = new Image();
  logo.src = Icon;

  const headlineContainer = makeElement('div')
    .addClass('home-heading')
    .create();

  const headline = makeElement('h1').addText('TheBean').create();

  const subHeadline = makeElement('h2')
    .addText('Awaken Your Senses with Every Sip')
    .create();

  const menuButton = makeElement('button')
    .addClass('home-button')
    .addText('View Our Menu')
    .create();

  headlineContainer.appendChild(logo);
  headlineContainer.appendChild(headline);
  headlineContainer.appendChild(subHeadline);
  headlineContainer.appendChild(menuButton);

  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('section-one', 'container');

  const sectionMainHeading = makeElement('h1').addText('Who We Are').create();

  const sectionImageContainer = makeElement('div')
    .addClass('section-one-img')
    .create();

  const sectionContentContainer = makeElement('div').create();

  const sectionHeadingOne = makeElement('h2')
    .addText('Brewed to Perfection, Just for You')
    .create();

  const sectionHeadingText = makeElement('p')
    .addText(
      'At our coffee shop, we take pride in delivering the perfect cup of coffee tailored to your taste. Our expert baristas meticulously select and roast the finest beans, ensuring every sip is a testament to quality and craftsmanship. Whether you prefer a bold espresso or a smooth latte, each beverage is brewed to perfection just for you. Step into our cozy atmosphere, savor the rich flavors, and let us make your coffee experience truly exceptional.'
    )
    .create();

  sectionContentContainer.appendChild(sectionHeadingOne);
  sectionContentContainer.appendChild(sectionHeadingText);

  sectionContainer.appendChild(sectionMainHeading);
  sectionContainer.appendChild(sectionImageContainer);
  sectionContainer.appendChild(sectionContentContainer);

  container.appendChild(headlineContainer);
  container.appendChild(sectionContainer);

  return container;
}
