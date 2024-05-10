function generateTemplate() {
  var variable = document.getElementById("variableInput").value;
  var template = `Hello ${variable},

I hope this email finds you well.

Sincerely,
[Your Name]`;

  document.getElementById("output").innerText = template;
}

function copyToClipboard() {
  var output = document.getElementById("output");
  var range = document.createRange();
  range.selectNode(output);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Copied to clipboard!");
}
