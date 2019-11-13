(() => {
  const init = storageFunc.initStorage('newCart');
  const order = document.body.querySelector('.order');
  const shopList = document.body.querySelector('.shop-list');
  const cart = document.querySelector('.cart');

  function server(id) {
    const db = {
      "a-15": {
        id: "a-15",
        name: " Клюшка для гольфа",
        price: "125",
        qty: "1",
      },
      "a-14": {
        id: "a-14",
        name: "Трусы",
        price: "4",
        qty: "1",
      },
      "a-13": {
        id: "a-13",
        name: "Шапка",
        price: "15",
        qty: "1",
      },
      "a-12": {
        id: "a-12",
        name: "Носки",
        price: "1.5",
        qty: "1",
      }
    }

    if (!db[id]) return;
    return db[id];
  };

  const getGoodsInfo = (e) => {
    if (e.target.tagName !== 'IMG') return;
    const id = e.target.getAttribute('data-id');
    const result = server(id);

    storageFunc.updateStorage('newCart', result);

    addToBasked(result);
  }

  const addToBasked = (goodInfo) => {
    const tmpl = document.querySelector('.row.cart-item-tmpl');

    const copy = tmpl.cloneNode(true);

    copy.dataset.id = goodInfo.id;

    for (const elem of cart.children) {
      if (goodInfo.id === elem.getAttribute('data-id')) {
        elem.children[0].innerText = +elem.children[0].innerText + 1;

        elem.children[2].innerText = +elem.children[2].innerText + +goodInfo.price;

        bill = storageFunc.getTotPrice('newCart');

        return;
      }
    }

    copy.children[0].innerText = 1;

    copy.children[1].innerText = goodInfo.name;

    copy.children[2].innerText = goodInfo.price;

    cart.append(copy);

    if (cart.children.length < 2) {
      cart.addEventListener('click', deleteGoodFromBusket);
    }

    storageFunc.getTotPrice('newCart');
  };

  const deleteGoodFromBusket = (e) => {
    if (e.target.className !== 'xmark') return;

    const li = e.target.closest('li');

    const id = li.getAttribute('data-id');

    storageFunc.deleteFromStorage('newCart', id);

    storageFunc.getTotPrice('newCart');

    li.remove();
  }


  if (init) {
    const serializedData = JSON.parse(init);

    const fragment = document.createDocumentFragment();

    for (const addedGood in serializedData) {
      const tmpl = document.querySelector('.row.cart-item-tmpl');

      const copy = tmpl.cloneNode(true);

      copy.dataset.id = serializedData[addedGood].id;

      copy.children[0].innerText = serializedData[addedGood].qty;

      copy.children[1].innerText = serializedData[addedGood].name;

      copy.children[2].innerText = serializedData[addedGood].price;

      fragment.append(copy);

      if (cart.children.length < 2) {
        cart.addEventListener('click', deleteGoodFromBusket);
      }
    }

    cart.append(fragment);

    storageFunc.getTotPrice('newCart');
  }

  order.addEventListener('click', () => alert('SUCCESSFUL'));

  shopList.addEventListener('click', getGoodsInfo);

})();
