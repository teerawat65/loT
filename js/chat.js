// chat.js
function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  const msgs = document.getElementById('chatMessages');
  const now = new Date();
  const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2,'0');

  // User bubble
  const userRow = document.createElement('div');
  userRow.className = 'msg-row user';
  userRow.innerHTML = `<div class="msg-bubble user-bubble">${text}<div class="msg-time">${time}</div></div>`;
  msgs.appendChild(userRow);
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  // Bot reply
  setTimeout(() => {
    const botRow = document.createElement('div');
    botRow.className = 'msg-row bot';
    botRow.innerHTML = `<div class="bot-avatar">🤖</div><div class="msg-bubble bot-bubble">ขอบคุณสำหรับข้อมูลค่ะ หากต้องการความช่วยเหลือเพิ่มเติมสามารถแจ้งได้เลยนะคะ<div class="msg-time">${time}</div></div>`;
    msgs.appendChild(botRow);
    msgs.scrollTop = msgs.scrollHeight;
  }, 700);
}

function handleKey(e) {
  if (e.key === 'Enter') sendMessage();
}

function openContactModal() {
  document.getElementById('contactModal').style.display = 'flex';
}
function openReportModal() {
  document.getElementById('reportModal').style.display = 'flex';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
