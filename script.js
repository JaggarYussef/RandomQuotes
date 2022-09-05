const insta = document.getElementById('insta');
const git= document.getElementById('git');
const link= document.getElementById('linked');
const box= document.getElementById('box');

insta.addEventListener('mouseover', () => {
    insta.src= 'assets/icons8-instagram.gif'
})

insta.addEventListener('mouseout', ( ) => {
     insta.src= "assets/icons8-instagram-jpeg.jpg"
    
})


//GIT ICON

git.addEventListener('mouseover', () => {
    git.src= "assets/icons8-github.gif"
})



git.addEventListener('mouseout', () => {
    git.src= "assets/icons8-github-jpeg.jpg"
})


//LinkedIN Icon 
link.addEventListener('mouseover', ()=> {
    link.src="assets/icons8-linkedin-circled.gif"
})

link.addEventListener('mouseout', ()=> {
    link.src= "assets/icons8-linkedin-circled-jpeg.jpg"
})

// box.addEventListener('mouseover', ()=> {
//     box.style.marginBottom= "20px"
//     insta.style.visibility= "visible"
//     link.style.visibility= "visible"
//     git.style.visibility= "visible"
    
// })

// box.addEventListener('mouseout', ()=> {
//     box.style.marginBottom= "-20px"
//     insta.style.visibility= 'hidden'
//     link.style.visibility= "hidden"
//     git.style.visibility= "hidden"
// })