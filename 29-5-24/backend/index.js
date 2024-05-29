import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({ origin:"*"}));

const posts = [
    {
        id: 1,
        title: 'Post 1000',
        description: 'This is the first post!'
    },
    {
        id: 2,
        title: 'Post 2',
        description: 'This is the second post!'
    }
]

app.get('/hello', (req, res) => {
    res.json('Hello dsforld!');
});

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});