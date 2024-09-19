function showAdvice(event) {
  let advice = document.querySelector("#advice");
  event.preventDefault();
  new Typewriter("#advice", {
    strings: "Help me write an application for a job...",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}
//let submitForm = document.querySelector("#zenn-bot-form");
window.addEventListener("load", showAdvice);
