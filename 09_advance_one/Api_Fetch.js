const URL = "https://cat-fact.herokuapp.com/facts"

let getData = async ()=>{
    let response = await fetch(URL);
    let data = response.json();
    console.log(data)

}