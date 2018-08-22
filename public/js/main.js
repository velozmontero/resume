const btn = document.getElementById('send');

btn.onclick = function(e) {
  e.preventDefault();

  fetch('http://localhost:8000/email-resume', {
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
  })
  .catch(err => {
    document.getElementById('message').innerHTML = err.message;
  });
}