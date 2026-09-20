const app = document.getElementById('app');
const message = document.getElementById('message');
const deleteAll = document.getElementById('deleteAll');
const getAll = document.getElementById('getAll');
const template = document.getElementById('userTemplate');

function renderUsers(usersArray) {
  app.innerHTML = '';
  message.textContent = '';

  usersArray.forEach(user => {
    const card = template.content.cloneNode(true);

    card.querySelector('.userName').textContent = `${user.name} ${user.surname}`;
    card.querySelector('.userEmail').textContent = `Email: ${user.email}`;
    card.querySelector('.userAge').textContent = `Возраст: ${user.age}`;

    const deleteButton = card.querySelector('.deleteButton');

    deleteButton.addEventListener('click', () => {
      const currentUsers = localStorage.getItem('users');
      const data = JSON.parse(currentUsers);
      const newUsers = data.users.filter(item => item.id !== user.id);

      localStorage.setItem('users', JSON.stringify({ users: newUsers }));

      const cardElement = deleteButton.closest('.card');
      cardElement.remove();
    });

    app.append(card);
  });
}

deleteAll.addEventListener('click', () => {
  localStorage.setItem('users', JSON.stringify({ users: [] }));
  app.innerHTML = '';
  message.textContent = '';
});

getAll.addEventListener('click', () => {
  const currentUsers = localStorage.getItem('users');

  if (currentUsers === null) {
    message.textContent = 'Данных в localStorage нет';
    return;
  }

  const data = JSON.parse(currentUsers);

  if (data.users.length === 0) {
    message.textContent = 'Нет карточек для отображения';
    return;
  }

  const cards = document.querySelectorAll('.card');

  if (data.users.length === cards.length) {
    message.textContent = 'Все карточки уже отображены';
    return;
  }

  renderUsers(data.users);
});

const users = localStorage.getItem('users');

if (users === null) {
  fetch('users.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка при загрузке данных');
      }

      return response.json();
    })
    .then(data => {
      setTimeout(() => {
        localStorage.setItem('users', JSON.stringify(data));
        renderUsers(data.users);
      }, 3000);
    })
    .catch(error => {
      const newError = new Error('Ошибка при загрузке данных');
      app.textContent = newError.message;
      console.log(newError);
    });
} else {
  const data = JSON.parse(users);
  renderUsers(data.users);
}