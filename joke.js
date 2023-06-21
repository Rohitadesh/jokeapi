
let jokes=document.querySelector('.joke')
let button=document.querySelector('#btn')

const jokes_display= async ()=>{
    try{
        const joke_header = {
            headers: {
                Accept: "application/json"
            }
        }
        let url="https://icanhazdadjoke.com/"
        let response=await fetch(url,joke_header);
        let data= await response.json();
        console.log(data)
        jokes.innerHTML=data.joke;
    
    }catch(error){
        console.log(error)
    }
}
button.addEventListener('click',jokes_display)