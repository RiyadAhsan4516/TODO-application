const form = document.querySelector(".submit-form");
const button = document.querySelector(".delete");

const addTask = async (data) => {
  try {
    await fetch("http://127.0.0.1:3000/api/v1/tasks", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    window.setTimeout(() => {
      location.assign("/landing");
    }, 300);
  } catch (err) {
    alert("something went wrong!");
  }
};

const deleteTask = async (sl) => {
  try {
    await fetch(`http://127.0.0.1:3000/api/v1/tasks/${sl}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    window.setTimeout(() => {
      location.assign("/landing");
    }, 300);
  } catch (err) {
    alert("something went wrong!");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const Date = document.getElementById("deadline").value;
  const Description = document.getElementById("taskname").value;
  addTask({ Date, Description });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  let sl = document.querySelector(".tasktext").textContent;
  sl = sl.split(" ")[0][0];
  deleteTask(sl);
});
