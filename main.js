window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input"); // Add a dot (.) before "new-task-input"
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        // Instead of creating a div for task content, directly use the input element
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Remove";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        // Append the input element and action buttons directly to the task element
        task_el.appendChild(task_input_el);
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', () => {
          if (task_edit_el.innerText.toLowerCase()=="edit") {
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText = "Save";
        } else {
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = "Edit";
        }
        })

        // Apply styles to the newly created task
        task_el.querySelector(".text").style.fontSize = "1.5rem";

        task_delete_el.addEventListener('click', ()=>{
            list_el.removeChild(task_el);
        });
    });
});

// Add this code to the existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const list_el = document.querySelector("#tasks");

    list_el.addEventListener('click', (e) => {
        const clickedTask = e.target.closest('.task');
        if (clickedTask) {
            clickedTask.classList.toggle('completed');
        }
    });
});


