(() => {

 interface Product {

    id: number;
    name: string;
 }

 class ProductService {

    getProduct(id: number){
       console.log('Product: ', {id,name: 'LED Tv'});
    }

    saveProduct(product: Product){
       console.log('Guardando na base de dados', product);
    }
}

class Mailer {

   private masterEmail: string = 'higino@user.com';

   sendEmail(emailList: string[], template: 'to-clients' | 'to-admins'){
       console.log('Enviando correo a los clientes');
   }
} 



 class ProductBloc {

    private productService: ProductService;
    private mailer: Mailer;


    constructor(productService: ProductService, mailer: Mailer){
        this.productService = productService;
        this.mailer = mailer;
    }

    loadProduct(id: number) {
       this.productService.getProduct(id)
    }

    saveProduct(product: Product){
       this.productService.saveProduct( product )
    }

    notifyClients(){
        this.mailer.sendEmail(['higini@user.com'], 'to-clients')
    }
 }

 


 class CartBloc {

    addtToCart(productId: number){
        console.log('Agregando al acrrito', productId);
    }
 }

 const productService = new ProductService();
 const mailer = new Mailer();

 const productBloc = new ProductBloc( productService, mailer);
 const cartBloc = new CartBloc();


 productBloc.loadProduct(10);
 productBloc.saveProduct({id: 10, name: 'OLED TV'});
 productBloc.notifyClients();
 cartBloc.addtToCart(10);


})