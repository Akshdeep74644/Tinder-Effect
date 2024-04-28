var user = [
  {
    profilepic:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "hero.png",
    pendingMessage: 3,
    location: "Delhi, India",
    name: "Akshdeep",
    age: "18",
    interest: [
      {
        icon: `ri-music-line`,
        text: "music",
      },
      {
        icon: `ri-file-code-line`,
        text: "coding",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis voluptas dolorum ipsa atque ea.",
    isFriend: null,
  },
  {
    profilepic:
      "https://plus.unsplash.com/premium_photo-1675129361415-0b674fc8959d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://plus.unsplash.com/premium_photo-1675129779554-dc86569708c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 8,
    location: "Mumbai, India",
    name: "Harsh",
    age: "22",
    interest: [
      {
        icon: `ri-film-line`,
        text: "movie",
      },
      {
        icon: `ri-paint-line`,
        text: "painting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis voluptas dolorum ipsa atque ea.",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 3,
    location: "Toronto, Canada",
    name: "Harshita",
    age: "26",
    interest: [
      {
        icon: `ri-restaurant-2-line`,
        text: "coding",
      },
      {
        icon: `ri-music-line`,
        text: "music",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis voluptas dolorum ipsa atque ea.",
    isFriend: null,
  },
  {
    profilepic:
      "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 3,
    location: "Delhi, India",
    name: "shivani",
    age: "19",
    interest: [
      {
        icon: `ri-film-line`,
        text: "movie",
      },
      {
        icon: `ri-paint-line`,
        text: "painting",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis voluptas dolorum ipsa atque ea.",
    isFriend: null,
  },
];

var currentUser = 0;
var isAnimate = false;

function select(elem) {
  return document.querySelector(elem);
}

function setData(index) {
  select(".profile_icon img").src = user[index].profilepic;
  select(".badge_text").textContent = user[index].pendingMessage;
  select(".address_text").textContent = user[index].location;
  select(".user_name").textContent = user[index].name;
  select(".user_age").textContent = user[index].age;
  select(".bio_para").textContent = user[index].bio;

  var clutter = "";
  user[index].interest.forEach((elem) => {
    clutter += `<div class="tag flex gap-4 items-center bg-[#333] py-3 px-4 rounded-full">
        <i class="text-lg ${elem.icon}"></i>
        <h1 class="text-lg">${elem.text}</h1>
    </div>`;
  });
  select(".box_02").innerHTML = clutter;
}

function setInitial() {
  select(".main_card img").src = user[currentUser].displaypic;
  select(".upcoming_card img").src = user[currentUser + 1].displaypic;
  setData(currentUser);

  currentUser = 2
}

setInitial();

function imageChanger() {
  if (!isAnimate) {
    isAnimate = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimate = false;
        let mainCard = select(".main_card");
        let incomingCard = select(".upcoming_card");

        incomingCard.classList.remove("z-[2]");
        incomingCard.classList.add("z-[3]");
        incomingCard.classList.remove("upcoming_card");

        mainCard.classList.remove("z-[3]");
        mainCard.classList.add("z-[2]");
        gsap.set(mainCard, {
          scale: 1,
          opacity: 1,
        });
        if (currentUser === user.length) currentUser = 0;
        select(".main_card img").src = user[currentUser].displaypic;
        currentUser++;
        mainCard.classList.remove("main_card");
        incomingCard.classList.add("main_card");
        mainCard.classList.add("upcoming_card");
      },
    });

    tl.to(
      ".main_card",
      {
        scale: 1.2,
        opacity: 0,
        ease: Circ,
        duration: 0.7,
      },
      "a"
    ).from(
      ".upcoming_card",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

var deny = select(".deny");
var accept = select(".accept");

deny.addEventListener("click", function () {
  imageChanger();
  setData(currentUser-1);
  gsap.from(".details .box", {
    y: "100%",
    stagger: 0.05,
    ease: Power4.easeInOut,
    duration: 1,
    opacity: 0,
  });
});
accept.addEventListener("click", function () {
  imageChanger();
  setData(currentUser-1);
  gsap.from(".details .box", {
    y: "100%",
    stagger: 0.05,
    ease: Power4.easeInOut,
    duration: 1,
    opacity: 0,
  });
});


(function detailsCreator() {
  document.querySelectorAll(".box").forEach(function (elem) {
    let div = document.createElement("div");
    div.classList.add(`${elem.classList[1]}container`, "overflow-hidden");
    div.appendChild(elem);
    select(".details").appendChild(div);
  });
})();