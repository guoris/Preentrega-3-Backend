const socket = io();
socket.emit('getProducts');

let tableBody = document.getElementById('tbody');
const formBtn = document.getElementById('formBtn');
const productList = document.getElementById('lista-productos');
const alertNo = document.getElementById('alerta-no-encontrado');

socket.on('productList', (data) => {
  if (!data.error && data.length > 0) {
    const htmlData = data.map((value) => {
      return `
        <tr>
            <td>${value.title}</td>
            <td>${value.price}</td>
            <td><img class='img-thumbnail' style="width: 250px; height: 250px;" src='${value.thumbnail}'> </td>
        </tr> `
    }).join(' ');
    tableBody.innerHTML = htmlData;
  }
});


formBtn.addEventListener('click', () => {
  socket.emit('newProduct');
});
