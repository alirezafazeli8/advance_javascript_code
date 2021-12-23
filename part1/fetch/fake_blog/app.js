"use strict";

const URL = "http://localhost:3000/users";

let counter = 1;

async function fakeBlog() {
  try {
    const update = {
      title: "A blog post by Kingsley",
      body: "Brilliant post on fetch API",
      userId: (counter += 1),
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    };

    const postUser = await fetch(URL, options);
  } catch (err) {
    console.log(err);
  }
}

// fakeBlog();

async function showTheUser(id) {
  const users = await fetch(URL);
  const allUser = await users.json();

  const filterSpecificUser = allUser.filter((user) => {
    return user.id == id;
  });

  console.log(filterSpecificUser);
}

showTheUser(prompt("pleas enter your user"));
