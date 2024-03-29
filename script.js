"use strict"
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const contentRed = document.createElement("p");
contentRed.classList.add("content");
contentRed.textContent = "Hey I'm red!";
container.appendChild(contentRed);
contentRed.style.color = "red";

const contentBlue = document.createElement("h3");
contentBlue.classList.add("content");
contentBlue.textContent = "I'm a blue h3!";
container.appendChild(contentBlue);
contentBlue.style.color = "blue";

const contentPink = document.createElement("div");
contentPink.classList.add("content");
container.appendChild(contentPink);

const contentInside = document.createElement("h1");
contentInside.classList.add("content");
contentInside.textContent = "I'm in a div";
contentPink.appendChild(contentInside);

const contentToo = document.createElement("p");
contentToo.classList.add("content");
contentToo.textContent = "ME TOO";
contentPink.appendChild(contentToo);