let prevBbtn = document.getElementById("prev-btn");
let nextBbtn = document.getElementById("next-btn")
let slider = document.getElementById("image-style");
let text = document.getElementById("text")
let cards = document.getElementById("cards")
// let search = document.getElementById("search");
// let searchBtn = document.getElementById("searchBtn")

const client_id ="zOTsy4hAQlrtBMLR3UCM3m_W3blUZLmE4_BiM7C379c"
const query = prompt("Which type of images do you want to see")/*'phone'*/;
const orientation = "landscape";
const count = 30;


fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&orientation=${orientation}&count=${count}`)
.then(res=> res.json())
.then((data)=>{
  console.log(data.results);
  
  let index = 0;
  slider.src = `${data.results[0].urls.regular}` ;


  prevBbtn.addEventListener("click", () => {
    index--;
    if(index < 0) {
        index = data.results.length-1;
    }
    slider.src = `${data.results[index].urls.regular}`;

  })  



  nextBbtn.addEventListener("click", () => {

    index++;
    if(index >= data.results.length) {
        index = 0;
    }
    
    slider.src = `${data.results[index].urls.regular}` ;

  })

  data.results.map((item)=>{
    cards.innerHTML += `<div class="card" >
    <img src=${item.urls.regular} alt="" srcset="" class="card-image">
    <h3 class:"ppl d-flex">By: ${item.user.name}</h3>
    <div>Likes:${item.likes}</div>
</div>`;
});


  const interval = setInterval(function() {
    start();
  }, 3000);

  start = () => {

    slider.src = `${data.results[index++].urls.regular}`;
    if(index > data.results.length-1 ){
    index = 0;
  }

  //card script starts here


}

}).catch(err => {console.log(err)});





 
  // toggle script
  const toggleBtn = document.getElementsByClassName('toggle')[0];
  const listStyle = document.getElementsByClassName('list-style')[0];
  const section1 = document.getElementsByClassName('section-1')[0];
  const btn = document.getElementsByClassName("btn")[0];
  const btn2 = document.getElementsByClassName("btn")[1];
  const bar1 = document.getElementsByClassName("bar1")[0];
  const bar2 = document.getElementsByClassName("bar2")[0];
  const bar3 = document.getElementsByClassName("bar3")[0];
  toggleBtn.addEventListener("click", () =>{
    listStyle.classList.toggle("active")
    section1.classList.toggle("active")
    btn.classList.toggle("active")
    btn2.classList.toggle("active")
    bar1.classList.toggle("active")
    bar2.classList.toggle("active")
    bar3.classList.toggle("active")
  })



