const Get_Api = async() => 
{
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    let data = await res.json()

    document.querySelector("#dog_image").innerHTML=""
    let Dog_Image = document.createElement("img");
    Dog_Image.src=data.message
    let DIV = document.createElement("div");
    DIV.append(Dog_Image)
    document.querySelector("#dog_image").append(DIV)
}
document.querySelector("#dog_api").addEventListener("click",()=>Get_Api())