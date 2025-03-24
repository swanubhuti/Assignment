// Select DOM elements
const fetchButton = document.getElementById('fetchbtn');
const dataContainer = document.getElementById('data-container');

function fetchData() {
  // Clear previous data
  dataContainer.innerHTML = '';

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.json(); 
    })
    .then(data => {
      data.forEach(item => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <hr>
        `;
        dataContainer.appendChild(postElement);
      });
    })
    .catch(error => {
      // Display error message
      dataContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

fetchButton.addEventListener('click', fetchData);
