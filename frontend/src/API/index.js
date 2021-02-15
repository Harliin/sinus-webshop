export async function getAllProducts() {
    let req = await fetch('http://localhost:5000/api/products/')
    let body = await req.json()
    return body
}

export async function Login(userCredentials) {
    let req = await fetch('http://localhost:5000/api/auth/', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userCredentials)
    });
    let data = await req.json()
    return [req, data]
}

export async function Register(newUser){
    try {
        console.log(newUser);
        let req = await fetch('http://localhost:5000/api/register/', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        });
        let data = await req.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }

}

export async function SendOrder(Order) {
    console.log("Api sending order");
    console.log(Order.user);
    try{
        let req = await fetch('http://localhost:5000/api/orders/', {
            method: "POST",
            headers: {"Content-Type": "application/json",
                      "Authorization": `Bearer ${Order.user}`},
            body: JSON.stringify(Order)
        });
        let data = await req.json()
        console.log(data);
        return [req, data]
    }
    catch(ex){
        console.log(ex);
    }   
}

export async function EditProduct(Action, User, Product) {
    console.log("Api sending order");
    console.log(Action, User, Product);
    try{
        let req = await fetch('http://localhost:5000/api/products/' + Product._id, {
            method: Action,
            headers: {"Content-Type": "application/json",
                      "Authorization": `Bearer ${User}`},
            body: JSON.stringify(Product)
        });
        let data = await req.json()
        console.log(data);
        return [req, data]
    }
    catch(ex){
        console.log(ex);
    }   
}

export async function DeleteProduct(User, ProductId) {
    console.log("Deleting product");
    console.log(User, ProductId);
    try{
        let req = await fetch('http://localhost:5000/api/products/' + ProductId, {
            method: "DELETE",
            headers: {"Content-Type": "application/json",
                      "Authorization": `Bearer ${User}`},
        });
        let data = await req.json()
        console.log(data);
        return [req, data]
    }
    catch(ex){
        console.log(ex);
    }   
}



