function showAnswer(response) {
  new Typewriter("#advice", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function getApiInfo(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "1e34ff4f3f045a566c8e39at1b7beo2f";
  let prompt = `Please give your answer based on what the user is asking, ${userInput.value}`;
  let context =
    "You are an AI assistant that is very smart and give informatiom about any topic you are asked. Provide the user with the information that they want. Please be clear and CONCISE! And ADD 'Zenn.' inside a <strong></strong> element at the end of the answer, on a NEW LINE.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showAnswer);

  let advice = document.querySelector("#advice");
  advice.classList.remove("hidden");
  advice.innerHTML = `<div class="generating">⏳ Generating your answer on: ${userInput.value}`;
}

let submitForm = document.querySelector("#zenn-bot-form");
submitForm.addEventListener("submit", getApiInfo);
