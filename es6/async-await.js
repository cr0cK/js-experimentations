'use strict';

async function getStuff() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('here the stuff');
    }, 500);
  });

  return await promise;
}

async function displayStuff() {
  try {
    console.log('before...');
    let stuff = await getStuff();
    console.log('after...');
    console.log(stuff);
  } catch (err) {
    console.log('error', err);
  }
}

displayStuff();
