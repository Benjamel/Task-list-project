import clearTasks from "./index";

describe("clearTasks", () => {
  let taskList;

  beforeEach(() => {
    // Create a task list with some items
    taskList = document.createElement("ul");
    taskList.innerHTML = `
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    `;
    document.body.appendChild(taskList);
  });

  afterEach(() => {
    // Remove the task list and clear local storage
    taskList.parentNode.removeChild(taskList);
    localStorage.clear();
  });

  it("clears the task list", () => {
    clearTasks(taskList);
    expect(taskList.innerHTML).toEqual("");
  });

  it("removes all child nodes of the task list", () => {
    clearTasks(taskList);
    expect(taskList.childNodes.length).toEqual(0);
  });

  it("clears tasks from local storage", () => {
    // Add some tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(["Task 1", "Task 2"]));

    // Call the function
    clearTasks(taskList);

    // Expect the tasks to be cleared from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    expect(tasks).toBeNull();
  });
});
