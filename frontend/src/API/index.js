export async function getAllProducts() {
    let req = await fetch('http://localhost:5000/api/products/')
    let body = await req.json()
    return body
}

export async function Login(userCredentials) {
    console.log(userCredentials);
    let req = await fetch('http://localhost:5000/api/auth/', {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(userCredentials)
    });
    console.log(req);
    

}

