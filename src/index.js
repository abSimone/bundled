import axios from "axios";
function greet(name) {
    let a = "sadsd";
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => console.log(res.data));
    return `Hello, ${name}!`;
}
console.log(greet('World'));
