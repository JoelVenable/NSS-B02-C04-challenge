function buildTree() {
  let existingTree = document.querySelector('.tree');
  if (existingTree) existingTree.remove();

  const fragment = document.createDocumentFragment(),
    tree = createHtmlElement("div", "", fragment, ["tree"]),
    numLevels = parseInt(document.querySelector("#height").value),
    char = document.querySelector("#char").value,
    numCharsPerRow = numLevels * 2 - 1,
    midpoint = numLevels - 1;
  
  
  
  
  // Handling invalid input from users
    if (isNaN(numLevels)) {
    createHtmlElement(
      "h3",
      "Height of Christmas tree needs to be a number",
      tree
    );
    addFragment(fragment);
    return null;
  } else if (char.length !== 1) {
    createHtmlElement("h3", "Please input a single character!", tree);
    addFragment(fragment);
    return null;
  }

  function isDot(floorNum, latPosition) {
    if (latPosition < midpoint - floorNum || latPosition > midpoint + floorNum)
      return "\xa0";
    else return char;
  }

  createHtmlElement('h3','Happy Trees!',tree);

  for (let i = 0; i < numLevels; i++) {
    let p = createHtmlElement('p','',tree);
    for (let j = 0; j < numCharsPerRow; j++) {
      // lateral position
      p.innerHTML += isDot(i, j);
    }
  }
  


  addFragment(fragment);
}

function addFragment(fragment) {
  const container = document.querySelector("#container");
  container.appendChild(fragment);
}
