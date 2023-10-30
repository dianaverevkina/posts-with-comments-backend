import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { faker } from '@faker-js/faker';

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

const posts = [
  {
    id: 1,
    author_id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    image: "https://preview.redd.it/cute-cartoon-kitten-v0-ji81au16fz2b1.png?auto=webp&s=950b18abd27a29d38b5910cbad16f47ae6aa27ba",
    created: faker.date.past(),
  },
  {
    id: 2,
    author_id: 1,
    title: "reprehenderit est deserunt velit ipsam",
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    image: "https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg",
    created: faker.date.past(),
  },
  {
    id: 3,
    author_id: 1,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    image: "https://preview.redd.it/d1pl56s5rz771.jpg?width=1080&crop=smart&auto=webp&s=a4fbc16a32a3ca29390df9077fa26570d105aef8",
    created: faker.date.past(),
  },
  {
    id: 4,
    author_id: 1,
    title: "accusamus ea aliquid et amet sequi nemo",
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    image: "https://coleandmarmalade.com/wp-content/uploads/2022/03/Empanada-kitten-4.jpg",
    created: faker.date.past(),
  },
];

const comments = [
  {
    id: 1,
    post_id: 1,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    created: faker.date.past(),
  },
  {
    id: 2,
    post_id: 1,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    created: faker.date.past(),
  },
  {
    id: 3,
    post_id: 1,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    created: faker.date.past(),
  },
  {
    id: 4,
    post_id: 1,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    created: faker.date.past(),
  },
  {
    id: 5,
    post_id: 2,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    created: faker.date.past(),
  },
  {
    id: 6,
    post_id: 2,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    created: faker.date.past(),
  },
  {
    id: 7,
    post_id: 2,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    created: faker.date.past(),
  },
  {
    id: 8,
    post_id: 2,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    created: faker.date.past(),
  },
  {
    id: 9,
    post_id: 3,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    created: faker.date.past(),
  },
  {
    id: 10,
    post_id: 3,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    created: faker.date.past(),
  },
  {
    id: 11,
    post_id: 3,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    created: faker.date.past(),
  },
  {
    id: 12,
    post_id: 3,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    created: faker.date.past(),
  },
  {
    id: 13,
    post_id: 4,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    created: faker.date.past(),
  },
  {
    id: 14,
    post_id: 4,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    created: faker.date.past(),
  },
  {
    id: 15,
    post_id: 4,
    author_id: faker.string.uuid(),
    author: faker.internet.userName(),
    avatar: faker.image.avatar(),
    content: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    created: faker.date.past(),
  },
];

app.get("/posts/latest", async (request, response) => {
  response
    .status(200)
    .send(JSON.stringify({ 
      status: "ok",
      data: posts.slice(0, 10),
    }))
    .end();
});

app.get("/posts/:postId/comments/latest", async (request, response) => {
  const { postId } = request.params;
  const postComments = comments.filter((comment) => comment['post_id'] === +postId);
  response
    .status(200)
    .send(JSON.stringify({ 
      status: "ok",
      data: postComments.slice(0, 3),
    }))
    .end();
})

const port = process.env.PORT || 3000;

const bootstrap = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server has been started on http://localhost:${port}`)
    );
  } catch (error) {
    console.error(error);
  }
};

bootstrap();