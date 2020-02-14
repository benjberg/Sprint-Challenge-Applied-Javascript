// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response =>{
    console.log('first',response);
    const keys = Object.keys(response.data.articles);
    console.log('second' , keys);
    keys.map( topic => {
        response.data.articles[topic].map(article =>{
            artEntry.append(newArticle(article,topic));
        })     
   });
}).catch(error =>{
    console.log(error);
})


function newArticle(array){
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgCont = document.createElement('div'),
          img = document.createElement('img'),
          name = document.createElement('span');

          card.classList.add('card');
          author.classList.add('author');
          imgCont.classList.add('img-container');
          headline.classList.add('headline');

          card.append(headline);
          card.append(author);
          author.append(imgCont);
          imgCont.append(img);
          card.append(name);

         headline.textContent = array.headline;
         img.src = array.authorPhoto;
         name.textContent =  `By ${array.authorName}`;

          return card;

}
const artEntry = document.querySelector('.cards-container');
// artEntry.append(newArticle(obj));