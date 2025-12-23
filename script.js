// function countCards(list){
//     for card in list:
//         if "id" in card:
//             count += 1
//     return count

// function memberCards(list){
//     return `<div class="card">${card.description}</div>`
// }

// api = "https://api.trello.com/1/boards/smth/lists"
// fetch(api)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.error('Error:', error)
// })
// data.forEach(list => {
//     console.log(list.name).innerHTML
//     console.log(countCards(list.cards))
//     console.log(memberCards(list.cards))
// })

// function numbers(){
//     let text = "";
//     for (let i = 0; i < 10; i++){
//         // console.log(`number ${i}`)
//         text += `number ${i}`
//     }
//     return text
// }
// const x = document.getElementById('count');
// x.innerHTML = numbers();




// // This code sample uses the 'node-fetch' library:
// // https://www.npmjs.com/package/node-fetch
// const fetch = require('node-fetch').default;
// fetch('https://api.trello.com/1/boards/{id}/memberships?key=APIKey&token=APIToken', {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json'
//   }
// })
//   .then(response => {
//     console.log(
//       `Response: ${response.status} ${response.statusText}`
//     );
//     return response.text();
//   })
//   .then(text => console.log(text))
//   .catch(err => console.error(err));
require('dotenv').config(); // loads .env

const boardid = process.env.id;
const APIKEY = process.env.APIKEY;
const APITOKEN = process.env.APITOKEN;

console.log(boardid)
console.log(APIKEY)
console.log(APITOKEN)

fetch(`https://api.trello.com/1/boards/${boardid}/memberships?key=${APIKEY}&token=${APITOKEN}`, {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(`Response: ${response.status} ${response.statusText}`);
  return response.json();
})
.then(data => console.log(data))
.catch(err => console.error(err));
