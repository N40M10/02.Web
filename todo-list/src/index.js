import "./reset.scss";
import "./fonts.scss";
import "./base.scss";
import "./index.scss";

//#### 1. Ocultar las secciones main y footer
//
const setPrimaryElements = () => {
  const getCore = document.querySelector(".main");
  const getFooter = document.querySelector(".footer");
  if (getCore.children[0].childElementCount <= 0) {
    getCore.hidden = true;
    getFooter.hidden = true;
  } else {
    getFooter.hidden = false;
    getCore.hidden = false;
  }
};
setPrimaryElements();

//#### 2. Crear una nueva tarea
//
const emptyAlert = () =>
  alert(`
    No pueden existir tareas sin texto!!!,
    escirbe un texto para esta tarea
  `);

const taskTemplate = ({ id, title, completed }) => {
  const state = completed === true ? `completed` : `pending`;
  const isCheked = completed === true ? "checked" : "";
  const view = `
  <li id="${id}" class="${state}">
    <div class="view">
      <input class="toggle" type="checkbox" ${isCheked} />
      <label>${title}</label>
    </div>
    <input class="edit" value="${title}" />
  </li>
  `;

  return view;
};

const todoList = document.querySelector(".todo-list");

const addToContainer = ({ id, title, completed }) => {
  todoList.insertAdjacentHTML(
    "beforeend",
    taskTemplate({ id, title, completed })
  );
  getInput.value = "";
  setPrimaryElements();
};

const getInput = document.querySelector(".new-todo");
getInput.setAttribute("autofocus", true);

getInput.addEventListener("keydown", (event) => {
  const getText = event.target.value;
  event.code === "Enter"
    ? getText != ""
      ? addToContainer({ id: 0, title: getText, completed: false })
      : emptyAlert()
    : event.code === "Escape"
    ? (getInput.value = "")
    : "";
});

//#### 3. Una tarea (interactive) & 4. Editando una tarea
//
let getClicks = 1;

const titleMutation = (event) => {
  const getEdit = event.target.parentElement.nextElementSibling;
  const getParent = event.target.parentElement;

  const closeEdit = () => {
    getParent.style.display = "flex";
    getEdit.style.display = "none";
    getEdit.removeEventListener("keydown", () => {});
  };

  const closeEditNew = (getEditNewText) => {
    getEdit.previousElementSibling.children[1].innerText = getEditNewText;
    getParent.style.display = "flex";
    getEdit.style.display = "none";
    getEdit.removeEventListener("keydown", () => {});
  };

  const openEdit = () => {
    getParent.style.display = "none";
    getEdit.style.display = "flex";
    getEdit.focus();
    getEdit.addEventListener("keydown", (event) => {
      const newText = getEdit.value.trim();
      event.code === "Escape"
        ? closeEdit()
        : event.code === "Enter"
        ? closeEditNew(newText)
        : "";
    });
    getClicks = 1;
  };

  const interactiveEdit = () => {
    getClicks >= 2 ? openEdit() : closeEdit();
  };

  getClicks >= 2 ? interactiveEdit() : getClicks++;
};

const stateMutation = (event) => {
  const item = event.target;

  const setPending = () => {
    item.parentNode.parentNode.className = "pending";
  };

  const setCompleted = () => {
    item.parentNode.parentNode.className = "completed";
  };

  event.target.checked === true ? setCompleted() : setPending();
};

todoList.addEventListener("click", (event) => {
  event.target.nodeName === "LABEL" && titleMutation(event);
  event.target.nodeName === "INPUT" && stateMutation(event);
});

//#### 5. Contador
//
const getCounter = document.querySelector(".todo-count");

const setCounter = () => {
  let pendingCount = 0;

  for (const iterator of todoList.children) {
    iterator.className === "pending" && pendingCount++;
  }

  const textCount = pendingCount < 2 ? "item" : "items";

  const view = `<strong>${pendingCount}</strong> ${textCount} left`;
  getCounter.innerHTML = view;
};

const config = { attributes: true, childList: true, subtree: true };

const callback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      setCounter();
    } else if (mutation.type === "attributes") {
      setCounter();
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(todoList, config);

//####  6. Boton de limpiar
//
const getClean = document.querySelector(".clear-completed");

getClean.addEventListener("click", () => {
  for (const iterator of todoList.children) {
    iterator.className === "completed" && iterator.remove();
  }
});

//#### 7. Persistencia
//
////////////////////////
//  Guardar
////////////////////////
//
let makeList = [];

const makePersistence = () => {
  for (const iterator of todoList.children) {
    const getTitle = iterator.firstElementChild.children[1].outerText;
    const getCompleted = iterator.className;

    const randomNum = (Math.random() + 1).toString(36).substring(8);
    const setTitle = getTitle;
    const setCompleted = getCompleted === "completed" ? true : false;

    const Obj = { id: randomNum, title: setTitle, completed: setCompleted };
    makeList.push(Obj);
  }
};

const setPersistence = () =>
  localStorage.setItem("mydayapp-js", JSON.stringify(makeList));

const persistence = () => {
  makeList = [];
  makePersistence();
  setPersistence();
};

const configPersistence = { attributes: true, childList: true, subtree: true };

const callbackPersistence = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      persistence();
    } else if (mutation.type === "attributes") {
      persistence();
    }
  }
};

const observerPersistence = new MutationObserver(callbackPersistence);

observerPersistence.observe(todoList, configPersistence);

////////////////////////
//  Cargar
////////////////////////

const setElements = () => {
  let getPersistence = JSON.parse(localStorage.getItem("mydayapp-js"));

  getPersistence.map((item) => {
    addToContainer({
      id: item.id,
      title: item.title,
      completed: item.completed,
    });
  });
};
setElements();

//#### 8. Filtros y rutas
//
const setFilter = () => {
  const getUrl = location.hash;

  for (const element of todoList.children) {
    getUrl === "" || getUrl === "#/"
      ? (element.style.display = "flex")
      : getUrl.slice(2) === element.className
      ? (element.style.display = "flex")
      : (element.style.display = "none");
  }
};

window.addEventListener("hashchange", setFilter);
