import axios from "axios"

function greet(name: string): string {
    let a = "sadsd"
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res: any) => console.log(res.data))
    return `Hello, ${name}!`;
}

console.log(greet('World'));