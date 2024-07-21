
const inputBox = document.getElementById("text");
const Button = document.getElementById("btn");

const listContainer = document.getElementById("list-container");

Button.addEventListener("click", function(){
    if (inputBox.value === ""){
        alert("you must input something")
    }else{
     let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);  
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    span.addEventListener("click", function(){
        listContainer.removeChild(li);
        saveData();   
    })

    }
    inputBox.value = "";
    saveData();
});
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    addRemoveFunctionality();

}

function addRemoveFunctionality() {
    const spans = document.querySelectorAll("#list-container li span");
    spans.forEach(span => {
        span.addEventListener("click", function() {
            const li = this.parentElement;
            listContainer.removeChild(li);
            saveData();
        });
    });
}




showTask();




