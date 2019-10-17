'use strict'

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createTree(container, data) {
  container.append(createTreeContainer(data));
}

function createTreeContainer(data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');
    li.innerHTML = key;

    if (typeof data[key] === 'object') {
      li.append(createTreeContainer(data[key]));
    }
    ul.append(li);
  }
  return ul;
}

createTree(document.getElementById('tree'), data);