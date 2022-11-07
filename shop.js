class Shop {
    constructor() {
        this.products = new Array;
    }

    //אתחול המערך בפריטים
    inProduct() {
        let p = product.addNewProduct("טבעת רוז לב", 1, "טבעת", 8, 9, "1-8-390x418.png.jpg", "roze")
        let p2 = product.addNewProduct("צמיד רוז חרוזים", 2, "צמיד", 200, 12, "1-11-390x418.png.jpg", "roze")
        let p3 = product.addNewProduct("עגילים לב כסף", 3, "עגילים", 180, 20, "1-12-390x418.png.jpg", "silver")
        let p4 = product.addNewProduct("טבעת כסף קשירה", 4, "טבעת", 150, 9, "1-16-390x418.png.jpg", "silver")
        let p5 = product.addNewProduct("שרשרת כסף לב", 5, "שרשרת", 200, 20, "1-25-390x418.png.jpg", "silver")
        let p6 = product.addNewProduct("טבעת כסף", 6, "טבעת", 8, 9, "r29995sz-1_6.jpg", "silver")
        let p7 = product.addNewProduct("טבעת משובצת רוז", 7, "טבעת", 180, 9, "WEB_188421C04_RGB-390x418.png.jpg", "roze")
        let p8 = product.addNewProduct("טבעת לב רוז", 8, "טבעת", 220, 15, "1-8-390x418.png.jpg", "roze")
        let p9 = product.addNewProduct(" צמיד כסף חוליות", 9, "צמיד", 300, 7, "c24064sz-1_1.jpg", "silver")
        this.products.push(p, p2, p3, p4, p5, p6, p7, p8, p9);

    }

    //הוספת מוצר
    addProduct() {
        let addForm = document.getElementById("add")
        let add = document.createElement('form');
        add.id = "formAdd";
        addForm.appendChild(add);
        add.onsubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(add);
            const data = Object.fromEntries([...formData.entries()]);
            const newProduct = new Product(data.name, data.id, data.category,data.price,data.amount,  data.img, data.color );
            products.push(new Product(data.name, data.id, data.category,data.price,data.amount,  data.img, data.color))
            this.products.push(newProduct);
            newProduct.showProduct();
            add.innerHTML = ''
            addForm.removeChild(add);
        }
        add.innerHTML = `
        <section id="sec">
        <input type="text" id="name" placeholder="name" name="name" class="inputs"/>

         <input type="number" id="id" placeholder="id" name="id" class="inputs"/> 

        <input type="number" id="price" placeholder="price" name="price" class="inputs"/>

        <input type="number" id="amount" placeholder="amount" name="amount" class="inputs"/>

        <input type="file" id="img" placeholder="img" name="img" accept="image/png/jpg" text="img" class="inputs">

        <select name="color" id="color" title="color">
            <option value="silver">כסף</option>
            <option value="gold">זהב</option>
            <option value="roze">roze</option>
        </select>
        
        <label>
            <select name="category" id="category" title="category">
                <option value="צמיד">צמידים</option>
                <option value="שרשרת">שרשראות</option>
                <option value="טבעת">טבעות</option>
            </select>
        </label>
        <input type="submit" id="submit" />
        <input type="button" id="submitEdit" onclick="shop.saveEdit()" value="save edit" class="hidden"/>

        </section>
    `


    }

    //הצגת המוצרים
    showAllProducts() {
        this.inProduct()
        let viewProduct = document.getElementById("itemShop");
        viewProduct.innerHTML = ``;
        this.products.forEach(p => {
            p.showProduct();
        })
    }
    //מחיקת מוצר
    deleteProduct(id1) {
        for (let i of products) {
            if (i.id == id1) {
                products.splice(i, 1);
                break;
            }
        }
        let show = document.getElementById('itemShop');
        let t = document.getElementById(id1);
        let showP = document.getElementsByName('showP');
        show.removeChild(t);
    }

    //הצגת המוצרים לפי קטגוריה
    showProductByKategory(k) {
        this.inProduct()
        var ulItems = document.getElementById("itemShop");
        ulItems.innerHTML = "";
        let l = []
        for (let item of this.products) {
            if (item.category == k) {
                l.push(item)

            }
        }
        for (let i of l) {
            i.showProduct();
        }
    }
    //הצגת מוצרים לפי צבע
    showProductByColor(c) {
        this.inProduct()
        var ulItems = document.getElementById("itemShop");
        ulItems.innerHTML = "";
        let l = []
        for (let item of this.products) {
            if (item.color == c) {
                l.push(item)

            }
        }
        for (let i of l) {
            i.showProduct();
        }
    }

}
window.shop = new Shop(
    products = []
);