import { LoacalDataBaseService, JsonDataBaseService, PostProvider } from './05-dependencia-c';


export interface Post {
    body   : string;
    id     : number;
    title  : string;
    userId : number;
}


export  class PostService {

    private posts: Post[] = [];

    constructor( private postProvider: PostProvider ){}

    async getPosts(){
       // const jsonBD = new LoacalDataBaseService();
       //const jsonDB = new JsonDataBaseService();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}