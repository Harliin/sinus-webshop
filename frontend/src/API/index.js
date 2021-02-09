export async function getAllProducts(){
    let req = await fetch('http://localhost:5000/api/products/')
    let body = await req.json()
    return body
}