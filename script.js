const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");


updateBigGlass();
smallCups.forEach((smallcup, index) => {
    smallcup.addEventListener("click", () => {
        // console.log(index);
            fillwater(index); 
         
           })
        
})
// function fillwater(index){
// for(i=0; i<=index; i++){
//     smallCups[i].classList.add("full");
// }
// }

function fillwater(index){
    if(smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")){
        index--;
    }

    smallCups.forEach((cup, index2) => {
        if(index2<=index){
            cup.classList.add("full");
        }else{
            cup.classList.remove("full");
        }
        // console.log(index2);
        // console.log(index);
        // cup.addEventListener("click", () => {
            
        //         // console.log(index);
        //         console.log(index2);
        //         cup.classList.toggle("full");
           
        // })
    
    })
    updateBigGlass();
}

function updateBigGlass(){
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0){
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups *100}%`
    }
    // var percent = index / 8 *100;
    // console.log(percent);
    // percentage.style.height = `${index / 8 * 330}px`;
    // percentage.innerText = `${percent}%`;

    if(fullCups === totalCups){
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    }
    else{
        remained.style.visibility = "visible";
        liters.innerText = `${2-(250 * fullCups /1000)}L`;
    }

}