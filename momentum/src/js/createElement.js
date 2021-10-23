export default function createElement(className, html) {
  const element = document.createElement('div');
  element.classList = className;
  element.insertAdjacentHTML('afterbegin', html)
  return element;
}