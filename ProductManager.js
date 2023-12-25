class ProductManager {

    constructor() {
      //arreglo vacio que almacena los objetos 
      this.products = [];
    }
  
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const newProduct = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
       
      };
  
      // realiza un push al metodo constructor para crear objetos
      // Verifica si el arreglo esta vacio, sino hace un mapeo del mismo en busca de un mismo code(id) 

      if(this.products !== null){

        const foundProduct = this.products.find(product => product.code === code);
        if (foundProduct) {
          console.log('ERROR! Producto repetido, no se puede agregar');
        } else {
            this.products.push(newProduct);
            console.log('Producto agregado');
        }

      }

     
    }


    

    getProducts() {
      console.log('Listado de productos:');
      this.products.forEach(product => {
        console.log(product);
      });
    }
  
    // Método para buscar un producto por su código
    getProductByCode(code) {
      const foundProduct = this.products.find(product => product.code === code);
      if (foundProduct) {
        console.log('Producto encontrado:', foundProduct);
      } else {
        console.log('Not found');
      }
    }
  }
  
  const productManager = new ProductManager();
  
  // Agregar productos
  productManager.addProduct('Panela', 'Descripción 1', 17.300, 'thumbnail1.jpg', '001', 12);
  productManager.addProduct('Arroz', 'Descripción 2', 5.200, 'thumbnail2.jpg', '002', 15);
  productManager.addProduct('Agua', 'Descripción 2', 5.200, 'thumbnail2.jpg', '001', 15);
  
  // Mostrar todos los productos
  productManager.getProducts();
  
  // Buscar un producto por código
  productManager.getProductByCode('001');
  productManager.getProductByCode('004');
  