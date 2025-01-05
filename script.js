const taskAdd = document.getElementById("taskAdd");
const deleteTask = document.querySelector("#delete");


function addTask(){
    const taskInput = document.getElementById("task");
    const taskName = taskInput.value.trim();
    console.log(taskName);

    if(taskName){
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("list");

        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "list";
        checkbox.id = 'list';

        const span = document.createElement("span");
        span.textContent = taskName;

        label.appendChild(checkbox);
        label.appendChild(span);
        taskDiv.appendChild(label);

        document.querySelector(".content").appendChild(taskDiv);

        taskInput.value = "";
    }

}

function removeTask(){
   
    const list = document.querySelectorAll(".list");
    list.forEach(list =>{
        const checkbox = list.querySelector('input[type="checkbox"]');

        if(checkbox && checkbox.checked){
            list.remove();
        }
    })
}

taskAdd.addEventListener("click",addTask);
deleteTask.addEventListener("click", removeTask);