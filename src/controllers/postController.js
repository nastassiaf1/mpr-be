import PostService from '../services/postService.js';

class PostController {
    async getPosts(_req, res) {
        try {
            const posts = await PostService.getPosts();

            if (posts) {
                res.json(posts);

                return;
            }

            res.status(404).send('Not found')
         } catch (error) {
            res.status(500).json({error: error})
         }
    }
};

export default new PostController();
