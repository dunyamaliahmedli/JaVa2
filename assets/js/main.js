const input = document.querySelector("input")
const btn = document.querySelector("button")

input.onblur =function(){
  if (this.value.trim()== "") {
      this.nextElementSibling.classList.remove("d-none")
  }
  else{
      this.nextElementSibling.classList.add("d-none")
  }
}

btn.onclick=function(e){
    e.preventDefault();
    copy(input)
  
}

// input.onchange=()=>{
//     console.log("change");
// }

input.onkeyup=()=>{
    copy(this)
}

input.onkeydown=()=>{
    copy(this)
}

function copy(nese){
    if (input.value.trim()=="") {
        input.nextElementSibling.classList.remove("d-none")
    }
    else{
        input.nextElementSibling.classList.add("d-none")
    }
}

const ul = document.querySelector('ul')

btn.onclick = function(e){
    if(input.value.trim()!="")
    {

        e.preventDefault();
        let li=document.createElement("li");
    let i = document.createElement("i")
    i.classList.add('fa-solid','fa-trash-can','float-end');
        li.innerText = input.value;
        li.classList.add("list-group-item")
         li.append(i);
        ul.append(li);
        i.onclick = function(){
            this.parentElement.remove();
        }

    }
    li.addEventListener("click",function(){

        for (let i = 0; i < this.parentElement.children.length; i++) {
            this.parentElement.children[i].classList.remove("active");
            
        }
        this.classList.add("active");
    })
    e.preventDefault();
}