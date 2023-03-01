import localPosts from '../../../data/local-database.json';
import { Post } from './05-dependencia-b';

export abstract class PostProvider {

   abstract getPosts(): Promise<Post[]>

}



export class LoacalDataBaseService implements PostProvider {


    async getPosts(){
        return [
            {
                'userId': 1, 
                'id': 1,
                'title': 'hjjhhjxjhxhjhjdhjshsgshshsjshshshshshjshjshjshjshjshjshjshjshjshjshj',
                'body': '4e5ew57787ddshjds8dsnbgjds78980eqgj0878r68r87ryrruyrghnmcidjkvb vhjvbdfnfdkmv dfjvn mddhvbndkshcdbfyttruyeruyererkjjhjdfhdfjhmncxnmcxnmxccvcvoppodfiduiuiruirruts',
            },
            {
                'userId': 1, 
                'id': 2,
                'title': 'Here is sir',
                'body': '4e5ew57787ddshjduuururururfhfhfhfhgsgsgsgsvsvsvvssvsvsvsvsvsvsvs8dsnbgjds78980eqgj0878r68r87ryrruyrghnmcidjkvb vhjvbdfnfdkmv dfjvn mddhvbndkshcdbfyttruyeruyererkjjhjdfhdfjhmncxnmcxnmxccvcvoppodfiduiuiruirruts',
            },
        ]
    }

}

export class JsonDataBaseService implements PostProvider {

  async getPosts () {
    return localPosts;
  }


}

export class WebApiPostService implements PostProvider {

   async getPosts(): Promise<Post[]> {
       const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
       return await resp.json();
    }

}