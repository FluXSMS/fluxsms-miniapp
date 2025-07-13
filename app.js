function getNumber() {
  const code = document.getElementById("country").value;
  Telegram.WebApp.sendData(JSON.stringify({
    action: "get_number",
    code: code
  }));
}

function changeNumber() {
  Telegram.WebApp.sendData(JSON.stringify({
    action: "change_number"
  }));
}

Telegram.WebApp.ready();

// Demo preview for number + OTPs
document.getElementById("assignedNumber").innerText = "+8801234567890";
document.getElementById("otpList").innerHTML = `
  <li>• 478219</li>
  <li>• 836472</li>
  <li>• 129304</li>
`;
