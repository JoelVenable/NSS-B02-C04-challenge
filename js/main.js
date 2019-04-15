const headerFrag = document.createDocumentFragment(),
  container = document.querySelector("#container");

function buildForm() {
  const fragment = document.createDocumentFragment(),
    div = createHtmlElement('div','',fragment,['formDiv']),
    form = createHtmlElement('form','',div, );
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'javascript:buildTree()');
  addInputItem("text", "height", "Height of christmas tree: ", form);
  addInputItem("text", "char", "Character: ", form);
  addInputItem("submit", "submit", "Make a tree!", form);
  document.querySelector('#container').appendChild(fragment);
}




buildForm();



function createHtmlElement(tag, content, parent, classList) {
  const element = document.createElement(tag);
  element.textContent = content;
  if (classList !== undefined) {
    element.classList.add(...classList);
  }
  parent.appendChild(element);
  return element;
}




function addInputItem(type, id, text, parent) {
  let item = document.createElement('input');
  item.setAttribute("type", type);
  item.id = id;
  let label = document.createElement('label');
  label.setAttribute('for', id);

  label.textContent = text;
  parent.appendChild(label);
  parent.appendChild(item);


}