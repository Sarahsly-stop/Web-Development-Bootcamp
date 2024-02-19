import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.set('view engine', 'ejs');



app.use(express.urlencoded({ extended: true }));

let posts = [];
const categories = ['travel', 'music', 'cooking', 'other',];

app.get('/', (req, res) => {
  res.render('index', { posts, categories });
});

app.get('/new', (req, res) => {
  res.render('new', { categories });
});

app.post('/create', (req, res) => {
  const { title, content, category } = req.body;
  const post = { title, content, category };
  posts.push(post);
  res.redirect('/');
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = posts[id];
  res.render('show', { post });
});

app.get('/random/:category', (req, res) => {
  const categoryName = req.params.category;
  const filteredPosts = posts.filter(post => post.category === categoryName);
  
  if (filteredPosts.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredPosts.length);
    const randomPost = filteredPosts[randomIndex];
    res.render('randomPost', { post: randomPost });
  } else {
    res.send('No posts in this category yet.');
  }
});

// New route to view a random post by category
app.get('/random', (req, res) => {
  const categoryName = req.query.category;
  res.redirect(`/random/${categoryName}`);
});

// New route to handle the submission form
app.get('/submit', (req, res) => {
  res.render('submit', { categories });
});

// New route to display a specific post based on its index
app.get('/view/:id', (req, res) => {
  const id = req.params.id;
  const post = posts[id];
  res.render('show', { post });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
