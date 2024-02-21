import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

async function getRandomDogImage() {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random');
  return response.data.message;
}
app.get('/', async (req, res) => {
  try {
    const dogImage = await getRandomDogImage();
    res.render('index', { dogImage });

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
