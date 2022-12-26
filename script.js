
 if(localStorage.getItem("savepage")!=null){
    document.getElementsByClassName("container")[0].innerHTML = localStorage.getItem("savepage")
 }

 var list_no = 0
const saveList = (x)=>{
    let save = document.getElementById("list").innerHTML
    localStorage.setItem(`listNo_${x}`,save)
    let webpage = document.getElementsByClassName("container")[0].innerHTML
    localStorage.setItem("savepage" , webpage)

}
setInterval(()=>{
     let webpage = document.getElementsByClassName("container")[0].innerHTML
    localStorage.setItem("savepage" , webpage)
} , 2000)
var check = 0
const mainfunc = (x) => {
   
    if(localStorage.getItem(`listNo_${x}`)!=null)
   { console.log("hi")
    console.log(x)
    let currentList = localStorage.getItem(`listNo_${x}`)
    console.log(currentList)
    document.getElementById("list").innerHTML = currentList}
    else
   { document.getElementById("list").innerHTML =
        ` <div id = "listNo_${x}" class = "content">
        <div class="addItems" id="addItems">
                <div class="add item" id="additembtn" onclick = "addItemlist(${x})">
                    Add Items To List<img src="lightpluslogo.png" height="25" width="25"></img>
                </div>
          </div>
          <div class="todolist">
            <div class="name">List</div>
          </div>
          <img height = "50" width = "50" style = "position : absolute; top: 48px; cursor : pointer" src = "savelogo.png" onclick = "saveList(${x})"></img>
          </div>`
          
}
    
}
const delete_list = (event) => {
    document.getElementById("list").innerHTML = "<h1>Welcome to To Do List Add your first list</h1>";
    event.stopPropagation();
    list_no--
}

const addItem = () => {
    list_no++
    let sidebar = document.getElementById("sidebar")
    let listItem = document.createElement("div")
    let listName = prompt("Enter name of New list", "list")
    if (listName == null) {
        alert("Please Add a Name !!")
    }
    else {
        listItem.innerHTML = `<div class="add" id = ${list_no} onclick = "mainfunc(${list_no})">${listName}<img src="crosslogo.png" id = "deletebtn" height="25" width="25" onclick="delete_list(event); this.parentElement.remove(); localStorage.removeItem('listNo_${list_no}')"></img></div>`
        // let obj = {
        //     "name" : `${listName}`
        // }
        // console.log(JSON.stringify(obj))
        // localStorage.setItem(`listNo_${list_no}`, listName)
        sidebar.insertAdjacentElement("beforeend", listItem)
    }
}
var item_no = 0
const addItemlist = (x) => {
    item_no++
    let addItem = document.getElementById("addItems")
    let listItem = document.createElement("div")
    let itemName = prompt("Enter name of Item", `item`)
    if (itemName == null) {
        alert("Please Add a Name !!")
    }
    else {
        listItem.innerHTML = `<div class="add item" id = ${item_no}>${itemName}<img src="lightcrosslogo.png" id = "deletebtn" height="25" width="25" onclick="this.parentElement.remove(); itemNo_${item_no}.remove()"></div>`
        // let thislist = JSON.parse(localStorage.getItem(`listNo_${x}`))
        // thislist[`${item_no}`] = itemName
        // localStorage.setItem(`listNo_${list_no}`, JSON.stringify(thislist))
        addItem.insertAdjacentElement("beforeend", listItem)
    }
    let todoitem = document.createElement("div")
    todoitem.id =`itemNo_${item_no}`
    todoitem.innerHTML = `<h1 onclick = "this.classList.toggle('strike');">${itemName}</h1>`
    todoitem.classList.add("pointer")
    // todoitem.onclick = ()=>{
    //     todoitem.classList.toggle("strike")
    //     console.log("f")
    // }
    document.getElementsByClassName("todolist")[0].insertAdjacentElement("beforeend",todoitem)
}

let addbtn = document.getElementById("addbtn")
addbtn.addEventListener("click", addItem)




