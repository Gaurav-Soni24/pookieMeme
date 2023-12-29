const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".img img");
const generateTitle = document.querySelector(".meme-title");
const generateAuthor = document.querySelector(".meme-author");


const updateDetails = (url) =>{
    memeImage.setAttribute('src',url);
}

const generateMeme = () => {
    fetch(" https://meme-api.com/gimme")
    .then(Response => Response.json())
    .then(data => {
        document.getElementById("txt").innerHTML = "";
        memeImage.style.borderRadius = "13px";
        memeImage.style.height = "50vh";
        memeImage.style.width = "30vw";
        updateDetails(data.url);
    });
}

generateMemeBtn.addEventListener('click', generateMeme)