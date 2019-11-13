// {
//   "a-15": {
//     id: "a-15",
//       name: " Клюшка для гольфа",
//         price: "125",
//           qty: "1",
//   },

//   "a-14"; {
//     id: "a-14",
//       name: "Трусы",
//         price: "4",
//           qty: "1",
//   },

//   "a-13": {
//     id: "a-13",
//       name: "Шапка",
//         price: "15",
//           qty: "1",
//   },


//   "a-12": {
//     id: "a-12",
//       name: "Носки",
//         price: "1.5",
//           qty: "1",
//   }
// }

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