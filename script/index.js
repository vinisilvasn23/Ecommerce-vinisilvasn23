let countProducts = 0;
let countTotalValue = 0;

document.querySelector('.cart-products').style.display = 'none';
document.querySelector('.cart-details').style.display = 'none';

let listProducts = document.querySelector('.main-cards');


//função para renderizar os produtos
function createListProduct(listProduct) {

  for (let i = 0; i < listProduct.length; i++) {
    let product = listProduct[i];

    const li = document.createElement('li');
    const tag = document.createElement('p')
    const img = document.createElement('img');
    const name = document.createElement('span');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const addCart = document.createElement('submit');
    li.className = "card";

    img.src = product.img;
    img.alt = product.nameItem;
    img.className = "image";
    li.appendChild(img);

    tag.innerText = product.tag;
    tag.className = "tag";
    li.appendChild(tag);

    name.innerText = product.nameItem;
    name.className = "name";
    li.appendChild(name);

    description.innerText = product.description;
    description.className = "description";
    li.appendChild(description);

    price.innerText = ("R$ " + product.value);
    price.className = "price";
    li.appendChild(price);

    addCart.innerHTML = 'Adicionar ao carrinho';
    addCart.className = "addCart";
    addCart.id = product.id;
    li.appendChild(addCart);

    //Evento de clique no botão adicionar carrinho
    addCart.addEventListener('click', function () {

      document.querySelector('.empty-carts');
      document.querySelector('#value').innerHTML = `R$${countTotalValue}`;
      document.querySelector('.cart-empty').style.display = 'none';
      document.querySelector('.cart-products').style.display = 'flex';
      document.querySelector('.cart-details').style.display = 'flex';

      const item = searchProducts(addCart.id);
      addCartItem(item);
    });
    listProducts.appendChild(li);
  }
}


//função para procurar o produto pelo id
function searchProducts(id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
}

//função para criar a renderização dos produtos no carrinho
function createCart(product) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const name = document.createElement('span');
  const price = document.createElement('p');
  const removeCart = document.createElement('submit');

  li.className = "listBuy";

  img.src = product.img;
  img.alt = product.nameItem;
  img.className = "image";
  li.appendChild(img);

  name.innerText = product.nameItem;
  name.className = "name";
  li.appendChild(name);

  price.innerText = ("R$ " + product.value);
  price.className = "price";
  li.appendChild(price);

  removeCart.innerHTML = 'Remover produto';
  removeCart.className = "removeCart";
  removeCart.id = product.id;
  li.appendChild(removeCart);

  //evento de clique para remover produtos do carrinho
  removeCart.addEventListener('click', function (element) {
    countProducts--;
    document.querySelector('.count').innerHTML = `${countProducts}`;

    if (countProducts == 0) {
      document.querySelector('.cart-empty').style.display = 'flex';
      document.querySelector('.cart-products').style.display = 'none';
      document.querySelector('.cart-details').style.display = 'none';
    }

    countTotalValue -= product.value;
    document.querySelector('#value').innerHTML = `R$${countTotalValue}`;

    let lisPatch = element.composedPath();
    lisPatch[1].remove();
  })

  return li;
}

//função que renderiza os produtos no carrinho através da sunção createCart
function addCartItem(item) {
  const cartList = document.querySelector('.cart-list');
  const newCartItem = createCart(item);
  cartList.appendChild(newCartItem);


  countProducts++;
  document.querySelector('.count').innerHTML = `${countProducts}`;

  countTotalValue += item.value;
  document.querySelector('#value').innerHTML = `R$${countTotalValue}`;
}

//função para filtrar os produtos
function filterProduct(list) {
  let accessories = [];
  let t_shirts = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].tag.toLowerCase() == "acessórios") {
      accessories.push(list[i]);
    } else {
      t_shirts.push(list[i]);
    }
  }
  return { accessories, t_shirts };
}

const input = document.querySelector('.search-input');
const button = document.querySelector('.search-button');

//filtro de busca pela caixa de fesquisa
button.addEventListener('click', function () {
  let searchText = input.value.toLowerCase();
  let filteredList = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].nameItem.toLowerCase().includes(searchText)) {
      filteredList.push(data[i]);
    }
  }
  document.querySelector('.main-cards').innerHTML = "";
  createListProduct(filteredList);
});

const buttonsFilter = document.querySelectorAll('.btn');

//função para filtrar através da tag do produto
function filterTag(text) {
  listProducts.innerHTML = "";

  if (text == "Todos") {
    createListProduct(data);
  } else {
    listProducts.innerHTML = "";
    let listFiltered = [];

    for (let i = 0; i < data.length; i++) {
      let convertStr = data[i].tag.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (convertStr == text) {
        listFiltered.push(data[i]);
      }
    }
    createListProduct(listFiltered);
  }
}

for (let i = 0; i < buttonsFilter.length; i++) {
  buttonsFilter[i].addEventListener("click", function () {
    let text = buttonsFilter[i].innerHTML;
    filterTag(text);
  })
}

createListProduct(data);