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


// pls install dotenv with your id apikey and apitoken declared within it
// pls install npm
// pls install nodefetch??
// require('dotenv').config(); // loads .env
import 'dotenv/config';

const id = process.env.id;
const APIKey = process.env.APIKEY;
const APIToken = process.env.APITOKEN;

console.log(id)
console.log(APIKey)
console.log(APIToken)

// // get board memberships?

// fetch(`https://api.trello.com/1/boards/${id}/memberships?key=${APIKey}&token=${APIToken}`, {
//   method: "GET",
//   headers: {
//     "Accept": "application/json"
//   }
// })
// .then(response => {
//   console.log(`Response: ${response.status} ${response.statusText}`);
//   return response.json();
// })
// .then(data => console.log(data))
// .catch(err => console.error(err));


// get board fr this time

// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch

// fetch(`https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${APIToken}`, {
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


//   fetch(`https://api.trello.com/1/boards/${id}/lists?key=${APIKey}&token=${APIToken}`, {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json'
//   }
// })
//   .then(response => {
//     console.log(
//       `Response: ${response.status} ${response.statusText}`
//     );
//     // var smth = parse(text)
//     return response.text();
//   })
//   .then(text => console.log(text))
//   .catch(err => console.error(err));
  
// console.log(smth);

// get list

// fetch(`https://api.trello.com/1/lists/${id}?key=${APIKey}&token=${APIToken}`, {
//   method: 'GET'
// })
//   .then(response => {
//     console.log(
//       `Response: ${response.status} ${response.statusText}`
//     );
//     return response.text();
//   })
//   .then(text => console.log(text))
//   .catch(err => console.error(err));


async function getLists(boardId) {
  const res = await fetch(
    `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}

const lists = await getLists(id);
console.log(lists);

