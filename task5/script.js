const url = "https://jsonplaceholder.typicode.com/posts"
const id = "5"

const findId = async (url, id) => {
    let data = await fetch(url)
        .then(response => response.json());

    let idObject = data.filter(x => x.id == id)

    console.log(...idObject)

    return idObject
}

findId(url, id)