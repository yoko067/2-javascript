const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = [];
for(let i = 1; i <= 5 ; i++){
pictures.push("pic" + i + ".jpg");
}

/* Declaring the alternative text for each image file */
const alternative = ["Eye", "texture of something", "Flower", "Egypt", "Moth"];
/*
// オブジェクトによるalternative 
const alternative = {
    pic1.jpg: Eye,
    pic2.jpg: texture of something,
    pic3.jpg: Flower,
    pic4.jpg: Egypt,
    pic5.jpg: Moth,
};
*/


/* Looping through images */
function switchPicture(e){ 
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}

for(let i = 0 ; i <= 5 ; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + pictures[i]);
    newImage.setAttribute('alt', alternative[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",switchPicture);
}

/* Wiring up the Darken/Lighten button */

function changeTheBrightness(e){
    if(btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = `rgba(0, 0, 0 ,0)`;
    }
}
btn.addEventListener("click", changeTheBrightness);

