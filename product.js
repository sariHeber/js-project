class Product {

    constructor(name, id, category, price, amount, img, color) {
        this.name = name;
        this.id = id;
        this.category = category;
        this.price = price;
        this.amount = amount;
        this.img = img;
        this.color = color;
    }

    addNewProduct(name, id, category, price, amount, img, color) {
        const product = new Product(name, id, category, price, amount, img, color)
        return product;
    }

    //עריכת מוצר
    editProduct() {
        let editForm = document.getElementById("edit");
        let edit = document.createElement('form');
        editForm.appendChild(edit);
        let editBtn = document.createElement('button');
        editBtn.type = "submit";
        editBtn.textContent = "saveEdit";
        edit.appendChild(editBtn);
        edit.onsubmit = (e) => {
            e.preventDefault();
            this.name = e.target["name"].value;
            this.id = e.target["id"].value;
            this.price = e.target["price"].value;
            this.amount = e.target["amount"].value;
            this.kategory = e.target["category"].value;
            this.color = e.target["color"].value;
            this.img = e.target["img"].value;
            editForm.removeChild(edit);
            this.showProduct();
            edit.className = "card";
        }
        edit.innerHTML = `
        
            <input type="text" id="name" placeholder=${this.name} name="name" />
    
                <input type="number" id="id" placeholder=${this.id} name="id" /> 
    
                <input type="number" id="price" placeholder=${this.price} name="price" />
    
                <input type="number" id="amount" placeholder=${this.amount} name="amount" />
    
                <select name="color" id="color">
                    <option value="silver">כסף</option>
                    <option value="gold">זהב</option>
                    <option value="roze">roze</option>
                </select>
                <input type="file" id="img" placeholder="img" name="img">
                <label>
                    <select name="category" id="category">
                        <option value="צמיד">צמידים</option>
                        <option value="שרשרת">שרשראות</option>
                        <option value="טבעת">טבעות</option>
                    </select>
                </label>
    
                <input type="submit" id="submit" />
            `

    }

    //הצגת מוצר
    showProduct() {
        let viewProduct = document.getElementById("itemShop");
        let showP = document.createElement('div');
        viewProduct.appendChild(showP);
        showP.id = this.id;
        showP.className = "card";
        showP.innerHTML = `
        <h1 id="nameProduct">${this.name}</h1>
        <img src="imgs/${this.img}".jpg style="width: 40%;
        height: 28%;
        margin: 0%;"  >
                <br/>
            <p class="price"> ₪ ${this.price}</p>
            <p>נותרו עוד ${this.amount} פריטים במלאי</p>
            <p id="btn-edit-delete">
            <button class="delete-btn" onclick="shop.deleteProduct(${this.id})"><img class="delete-icon" src="imgs/delete.png" style="width: 30px; height:30px"/></button>
        </p>

`
        let editBtn = document.createElement('button');
        editBtn.className = "edit-btn";
        showP.appendChild(editBtn);
        editBtn.onclick = () => { this.editProduct(); }
        let img = document.createElement('img');
        img.src = "imgs/עריכה.png";
        img.className = 'edit-icon';
        img.style = "width: 30px; height:30px"
        editBtn.appendChild(img);

    }

}
window.product = new Product();
