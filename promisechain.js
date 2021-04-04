const getComments = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);

      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Cannot fetch data");
      }
    });

    request.open("GET", resource);

    request.send();
  });
};

getComments("comments/demo1.json")
  .then((data) => {
      console.log("Promise 1 Resolved", data);
      return getComments("comments/demo2.json")
  }).then((data) => {
      console.log('Promise 2 Resolved', data);
      return getComments("comments/demo3.json");
  }).then((data) => {
      console.log('Promise 3 Resolved', data);
  })
  .catch((err) => {
    console.log(err);
  });
