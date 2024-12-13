const apiUrl = 'http://localhost:5000/items';

// Fetch all items and display them
function fetchItems() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const itemList = document.getElementById('itemList');
      itemList.innerHTML = '';
      data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>${item.name}: ${item.description}</span>
          <button class="delete" onclick="deleteItem('${item._id}')">Delete</button>
        `;
        itemList.appendChild(listItem);
      });
    });
}

// Add item
document.getElementById('itemForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, description })
  })
    .then(response => response.json())
    .then(() => {
      fetchItems();
      document.getElementById('name').value = '';
      document.getElementById('description').value = '';
    })
    .catch(err => console.error('Error adding item:', err));
});

// Delete item
function deleteItem(id) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      fetchItems();
    })
    .catch(err => console.error('Error deleting item:', err));
}

// Initial fetch of items
fetchItems();
