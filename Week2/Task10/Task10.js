//Create a program that makes an API call and displays all the retrieved data on a web page.
//Choose a public API (e.g., JSONPlaceholder, OpenWeatherMap) and use the fetch function to make the API request. Also implement error handling

const fetchButton = document.getElementById('fetchbtn');
const dataContainer = document.getElementById('data-container');

async function fetching(){
    try{
        dataContainer.innerHTML = '';
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach(item => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
              <h3>${item.title}</h3>
              <p>${item.body}</p>
              <hr>
            `;
            dataContainer.appendChild(postElement);
          });
        } catch (error) {
          // Display error message
          dataContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        }
      }
      
fetchbtn.addEventListener('click', fetching)