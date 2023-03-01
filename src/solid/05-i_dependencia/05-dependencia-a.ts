import { PostService } from './05-dependencia-b';
import { JsonDataBaseService, LoacalDataBaseService, WebApiPostService } from './05-dependencia-c';


( async () => {

    //const provider = new LoacalDataBaseService();
    //const provider = new JsonDataBaseService();
    const provider = new WebApiPostService();

     const postService = new PostService(provider);

     const posts = await postService.getPosts();

     console.log({ posts })

})();