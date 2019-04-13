import axios from 'axios'

function postArticleCall(title, description, body, tagList) {
    return axios
      .post(
        "http://localhost:5000/articles",
        {
          article: {
            title: title,
            description: description,
            body: body,
            tagList: tagList
          }
        },
      )
      .then(response => response.data)
      .catch(error => {
        console.log(error);
      });
}

export default postArticleCall;