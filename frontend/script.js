const backendURL = "http://127.0.0.1:5000";

async function loadPosts() {
  const res = await fetch(`${backendURL}/posts`);
  const posts = await res.json();
  document.getElementById("posts").innerHTML = posts.map(
    p => `<div><h3>${p.title}</h3><p>${p.content}</p><hr></div>`
  ).join("");
}

document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  await fetch(`${backendURL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
  loadPosts();
});

loadPosts();
