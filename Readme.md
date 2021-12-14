# Ajax with jQuery

Video Link: https://youtu.be/jHUthdUWbrM
Repo: https://github.com/jbarson/ajax

### AJAX

- **A**synchronous **J**avaScript **A**nd **X**ML
- Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
- Thanks to AJAX, web applications can send and receive data asynchronously without requiring a browser refresh
- The widespread use of AJAX was one of the factors that led to Web 2.0
- Originally retrieved data sent using `XML`, but modern applications use `JSON` instead


### jQuery AJAX

- jQuery gives us an API for making AJAX requests

```js
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  method: "GET",
  dataType: "json",
  success: (data) => {
    console.log("this request succeeded and here's the data", data);
  },
  error: (error) => {
    console.log("this request failed and this was the error", error);
  },
});
```

### jQuery Shorthand Methods

- jQuery has several shorthand methods so that we don't have to use the full `.ajax` method every time

```js
// make a get request to the specified endpoint
$.get("https://jsonplaceholder.typicode.com/posts");

// make a get request for JSON data
$.getJSON("https://jsonplaceholder.typicode.com/posts");

// make a post request
$.post("https://jsonplaceholder.typicode.com/posts", {
  /* form data */
});
```

### Useful Links

- [Blog post coining AJAX](https://web.archive.org/web/20160305044414/http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
- [Wikipedia: AJAX](<https://en.wikipedia.org/wiki/Ajax_(programming)>)
- [MDN: XMLHttpRequest (XHR)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- jQuery [AJAX](http://api.jquery.com/jquery.ajax/), [getJSON](https://api.jquery.com/jquery.getjson/), and [post](https://api.jquery.com/jquery.post/) methods