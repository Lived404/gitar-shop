class LocalStorageutill {
    constructor() {
        this.keyName = 'products'
    }

    getProducts() {
        const productsLocaleStorage = localStorage.getItem(this.keyName);
        if (productsLocaleStorage !== null) {
            return JSON.parse(productsLocaleStorage);
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts()
        let pushProduct = false;
        const index = products.indrxOf(id);

        if(index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, -1);
        }



        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProduct, products}
    }
}

const localStorageutill = new LocalStorageutill();
