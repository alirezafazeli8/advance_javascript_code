"use strict";

const apiURL = "https://jsonplaceholder.typicode.com/users";

// call fetch
async function usersApi() {
  try {
    // fetch the api
    const apiPromise = await fetch(apiURL);

    if (apiPromise.ok) {
      // call json method for convert api to json
      const responseJson = await apiPromise.json();

      // log name of users
      const names = responseJson.map((persons) => persons.name);

      console.log(names);
    } else {
      console.wr("You Bro What Are You Doing ? 👎💥💥");
    }
  } catch (errorCatch) {
    console.error(`You Have Error My Bro 🪐 ${errorCatch} `);
  }
}

usersApi();
