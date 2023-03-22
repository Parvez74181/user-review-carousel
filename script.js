const img = document.querySelector(".image-box img");
const userName = document.querySelector(".content .user-name");
const desc = document.querySelector(".content .desc");
const nextButton = document.querySelector(".buttons #next");
const previousButton = document.querySelector(".buttons #previous");

const user = [
  {
    userImg: `https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    userName: `John Doe`,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, cum quae iste ipsa tenetur blanditiis .`,
  },
  {
    userImg: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    userName: `Ritik`,
    desc: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .`,
  },
  {
    userImg: `https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    userName: `Rio`,
    desc: `Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit .`,
  },
];

let currentItem = 0;

const review = (person) => {
  let item = user[person];
  img.src = item.userImg;
  userName.innerText = item.userName;
  desc.innerText = item.desc;
};

window.addEventListener("DOMContentLoaded", () => {
  review(currentItem);
});

// nextbutton click event
nextButton.addEventListener("click", () => {
  currentItem++;
  // if currentItems value is greater then the user object length, then return
  if (currentItem > user.length - 1) {
    currentItem = user.length - 1;
    alert("no reviews are left to see!");
    return;
  }

  review(currentItem);
});

// previousButton click event
previousButton.addEventListener("click", () => {
  currentItem--;
  // if currentItems value is less then 0, then return
  if (currentItem < 0) {
    currentItem = 0;
    alert("no reviews are left to see!");
    return;
  }
  review(currentItem);
});

setInterval(() => {
  currentItem++;
  review(currentItem);
}, 3000);
