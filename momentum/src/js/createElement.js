export default function createElement(className, html) {
  const element = document.createElement('div');
  element.classList.add(className);
  element.insertAdjacentHTML('afterbegin', html)
  return element;
}