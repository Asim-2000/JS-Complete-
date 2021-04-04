const getComments = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);

    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Cannot fetch data", undefined);
    }
  });

  request.open("GET", "demo.json");

  request.send();
};

//confirming non-blocking/ async nature of HTTP request

console.log(1);
console.log(2);

getComments((err, data) => {
  console.log("callback Fired");

  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
