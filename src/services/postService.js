import Posts from "./../db/models/post.model.js";

class PostService {
    async getPosts() {
        return Posts.findAll();
    }
}

export default new PostService();
