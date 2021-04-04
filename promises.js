const posts = [
  { titile: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.map((post, index) => (output += `<li>${post.body}</li>`));
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
    return new Promise((resolve, reject) => {
      
  })
}

anotherpost = { title: "Hello World", body: "I am Post Three" };

createPost(anotherpost, getPosts);