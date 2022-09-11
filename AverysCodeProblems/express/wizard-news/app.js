const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");

const app = express();
app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.static('files'));

app.get("/", (request, response) => {
  const posts = postBank.list();

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="/posts/${post.id}/">${post.title}</a>
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
  ).join('')}
    </div>
  </body>
</html>`;

  response.send(html);
});

app.get("/posts/:id", (request, response) => {
  const id = request.params.id;
  const post = postBank.find(id);

  if (!post.id) {
    throw new Error('Not found.');
  }

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
        <div class='news-item'>
          <p>
            ${post.title}
            <small>(by ${post.name})</small>
          </p>
          <p>${post.content}</p>
        </div>
    </div>
  </body>
</html>`

  response.send(html);
  ;
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} `);
});