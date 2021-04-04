const getComments = (resource, callback) => {
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

  request.open("GET", resource);

  request.send();
};

getComments("comments/demo1.json", (err, data) => {
  console.log("callback1 Fired");
  console.log(data);

  getComments("comments/demo2.json", (err, data) => {
    console.log("callback2 fired");
    console.log(data);

    getComments("comments/demo3.json", (err, data) => {
      console.log("callback3 fired");
      console.log(data);
    });
  });
});
