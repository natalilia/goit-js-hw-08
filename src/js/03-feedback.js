import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageTextarea = document.querySelector("textarea");

const storedFormState =
  JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};
emailInput.value = storedFormState.email ?? "";
messageTextarea.value = storedFormState.message ?? "";

//console.log(storedFormState);

const formState = {
  email: emailInput.value ?? "",
  message: messageTextarea.value ?? "",
};

const updateFormState = throttle(() => {
  localStorage.setItem("feedback-form-state", JSON.stringify(formState));
}, 500);

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formState[name] = value;
  updateFormState();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === "" || message === "") {
    return alert("Please fill in all the fields!");
  }

  localStorage.removeItem("feedback-form-state");
  emailInput.value = "";
  messageTextarea.value = "";

  console.log(formState);
});