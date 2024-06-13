console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const postArticle = document.createElement("article");
postArticle.classList.add("post");
document.body.append(postArticle);

const postText = document.createElement("p");
postText.innerText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
postText.classList.add("post__content");
postArticle.append(postText);

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
postArticle.append(postFooter);

const postUser = document.createElement("span");
postUser.innerText = "@username";
postUser.classList.add("post__username");
postFooter.append(postUser);

const postButton = document.createElement("button");
postButton.innerText = "♥ Like";
postButton.classList.add("post__button");
postFooter.append(postButton);

postButton.addEventListener("click", handleLikeButtonClick);
