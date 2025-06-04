
function buttonItems(selector, itemdivSelector){
const but = document.querySelector(selector);
const itemdiv = document.querySelector(itemdivSelector);


let count = 0;

but.addEventListener('click', () =>{

 //let count = 0;
 count++   
 let insideText = but.innerText;
 let num =  "<p>" +  count + "</p>";
 itemdiv.innerHTML += num;

resetbut.addEventListener("click", () =>{


})
 

}
)
        
}

buttonItems(".but1", ".itemdiv1")
buttonItems(".but2", ".itemdiv2")
buttonItems(".but3", ".itemdiv3")
buttonItems(".but4", ".itemdiv4")



const resetBut = document.querySelector(".reset");
const items = document.querySelectorAll(".item");
resetBut.addEventListener("click", () =>{
    for (const item of items){
        item.innerHTML = "";
    }


})
 

