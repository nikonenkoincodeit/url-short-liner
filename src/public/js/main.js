const formRef = document.querySelector(".js-form");

formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = Object.fromEntries(new FormData(e.target));
  sendData(result).then(console.log).catch(console.log);
});

function sendData(data) {
  return fetch("http://localhost:3000/link/short", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
}

function getData() {
  return fetch("http://localhost:3000/").then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
}
