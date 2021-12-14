// console.log($)

$(()=> {

  const createPost = (post) => {
    // const $title = $(`<h2>`).text('title')
    const $title = $(`<h2>${post.title}</h2>`)
    const $body = $(`<p>${post.body}</p>`)
    const $post = $('<article>')
    $post.append($title, $body)
    return $post
  }

  const createPosts = posts => {
    $container = $('#postsContainer')
    posts.forEach(post => {
      const $post = createPost(post)
      $container.prepend($post)
    })
  }

  const fetchPosts = () => {
    $.ajax({
      method: "GET",
      dataType: "json",
      url: "/api/posts",
      success: posts => {
        console.log(posts)
        createPosts(posts)
      },
      error: error => console.error(error)
    })
  }
  fetchPosts()

  const form = $('#createPostForm');
    form.on('submit', function(event) {

        event.preventDefault();
        console.log(event)
        const serializedData = $(this).serialize();
        console.log(serializedData);

        // $.post('api/posts', serializedData, () => {}, () => {});
        $.post('api/posts', serializedData)
         .then((resp) => {
             console.log(resp);
             fetchPosts();
         });

        this.reset()
    });


    console.log("Hello!")

});