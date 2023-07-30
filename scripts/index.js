import { Modal } from "../scripts/modal.js";
import { messageAlertError } from "../scripts/alertError.js";
import { calculateIMC, notNumber } from "../scripts/utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const initialValue = {
  inputHeight: "",
  inputWeight: "",
};

form.onsubmit = (e) => {
  e.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    messageAlertError.open();
    return;
  }

  messageAlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result)
  

  inputWeight.value = initialValue.inputWeight;
  inputHeight.value = initialValue.inputHeight;
};

inputWeight.oninput = () => messageAlertError.close();
inputHeight.oninput = () => messageAlertError.close();

function displayResultMessage(result){
  const message = `Seu IMC é de ${result.toFixed(2)}`;
  Modal.message.innerText = message;
  Modal.open();
}
