const posts = [
    { titile: 'Post one', body: 'This is post one' },
    {title: 'Post two', body: 'This is post two'}
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.map((post, index) =>
            output += `<li>${post.body}</li>`
        )
        document.body.innerHTML = output;
    },1000);
    
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000)
    
}

anotherpost = { title: 'Hello World', body: 'I am Post Three' }

createPost(anotherpost, getPosts);
