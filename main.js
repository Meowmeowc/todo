let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let taskContainer = document.querySelector(".tasks-content");
let taskCompleted = document.querySelector(".tasks-completed span");
let tasksCount = document.querySelector(".tasks-count span");

window.onload = function () {
	theInput.focus();
}
theAddButton.onclick = function () {
	if (theInput.value === "") {
		Swal.fire("Поле для ввода не может быть пустым");
	} else {
		let noTasksMsg = document.querySelector(".no-tasks-message");
		if (document.body.contains(document.querySelector(".no-tasks-message"))) {
			noTasksMsg.remove();
		}
		let mainSpan = document.createElement("span");
		let text = document.createTextNode(theInput.value);
		mainSpan.appendChild(text);
		taskContainer.appendChild(mainSpan);
		mainSpan.setAttribute("class", "task-box");
		let deleteElement = document.createElement("span");
		let deleteText = document.createTextNode("Delete");
		deleteElement.appendChild(deleteText);
		mainSpan.appendChild(deleteElement);
		deleteElement.setAttribute("class", "delete");
		theInput.value = "";
		theInput.focus();
		calculateTasks();
	}
};


document.addEventListener("click", function (e) {
	if (e.target.className == "delete") {
		e.target.parentNode.remove();
		if (taskContainer.childElementCount == 0) {
			createTaskNo();
		}
		calculateTasks();
	}
	if (e.target.classList.contains("task-box")) {
		e.target.classList.toggle("finished");
	}
	calculateTasks();
});

function createTaskNo() {
	let msgSpan = document.createElement("span");
	let msgText = document.createTextNode("No Tasks To Show");
	msgSpan.appendChild(msgText);
	msgSpan.className = "no-tasks-message";
	taskContainer.appendChild(msgSpan);
}

function calculateTasks() {
	tasksCount.innerText = document.querySelectorAll(
		".tasks-content .task-box"
	).length;
	taskCompleted.innerText = document.querySelectorAll(
		".tasks-content .finished"
	).length;
	let key = tasksCount.textContent;
	localStorage.setItem('count', key)
	let key2 = taskCompleted.textContent;
	localStorage.setItem('Completed', key2)

}


