const btn = document.getElementById('send');

btn.onclick = function(e) {
  e.preventDefault();

  btn.setAttribute("disabled", true);
  document.getElementById('message').innerHTML = 'Sending email...';

  fetch('http://142.93.207.204:8000/email-resume', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: "include",
    body: JSON.stringify({
      from: document.getElementById('from').value,
      destination: document.getElementById('dest_email').value,
      subject: document.getElementById('subject').value
    })
  })
  .then(result => result.json())
  .then(result => {
    document.getElementById('message').innerHTML = result.message;
    btn.removeAttribute("disabled");
    document.getElementById("form").reset();
  })
  .catch(err => {
    document.getElementById('message').innerHTML = err.message;
    btn.removeAttribute("disabled");
  });
}