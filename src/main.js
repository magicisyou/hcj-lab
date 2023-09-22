document.getElementById("input-html").oninput = () => {
  render();
};

document.getElementById("input-css").oninput = () => {
  render();
};

document.getElementById("input-js").oninput = () => {
  render();
};

function changeResultVisibility() {
  let inputTexts = document.getElementsByTagName("textarea");
  let result = document.getElementById("result");
  if (inputTexts[0].value || inputTexts[1].value || inputTexts[2].value)
    result.style.visibility = "visible";
  else result.style.visibility = "hidden";
}

function render() {
  const inputHtml = document.getElementById("input-html").value;
  const inputCss = document.getElementById("input-css").value;
  const inputJs = document.getElementById("input-js").value;
  const prefix =
    '<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"/>';
  const resultString = `${prefix}<style>${inputCss}</style></head><body>${inputHtml}<script>${inputJs}</script></body></html>`;
  const finalResult = document.getElementById("result");
  finalResult.srcdoc = resultString;
  changeResultVisibility();
}

function clearScreen() {
  document.getElementById("input-html").value = "";
  document.getElementById("input-css").value = "";
  document.getElementById("input-js").value = "";
  render();
}
