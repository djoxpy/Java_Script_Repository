(() => {
  const ls = localStorage;
  const totalPrice = document.body.querySelector('.tot-price');

  const initStorage = (key) => {
    if (ls[key]) return ls[key];
    ls.setItem(key, JSON.stringify({}));
  };

  const mergeData = (currentCart, payload) => {
    return {
      ...currentCart,
      [payload.id]: {
        ...currentCart[payload.id],
        qty: +currentCart[payload.id].qty + +payload.qty,
        price: +currentCart[payload.id].price + +payload.price,
      },
    }
  }

  const getTotPrice = (key) => {
    let currentCart = JSON.parse(ls[key]);

    let price = 0;
    if (Object.keys(currentCart).length) {
      for (const good in currentCart) {
        price += +currentCart[good].price;
      }
    }
    else {
      price = 0;
    }

    ls.setItem(key, JSON.stringify(currentCart));
    totalPrice.innerText = price;

    return price;
  }

  const deleteFromStorage = (key, id) => {
    let currentCart = JSON.parse(ls[key]);

    delete currentCart[id];

    ls.setItem(key, JSON.stringify(currentCart));
  }

  const updateStorage = (key, data) => {
    let currentCart = JSON.parse(ls[key]);

    const updatedCart = !currentCart[data.id]
      ? currentCart = {
        ...currentCart,
        [data.id]: { ...data }
      }
      : mergeData(currentCart, data);

    ls.setItem(key, JSON.stringify(updatedCart));
  };


  window.storageFunc = {
    initStorage,
    updateStorage,
    getTotPrice,
    deleteFromStorage,
  };

})();
