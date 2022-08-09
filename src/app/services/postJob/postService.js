import axios from "axios";

const client = axios.create({
    baseURL: "https://api.carelobby.flux.i.ng/v1/" 
  });

addPosts = (title, body) => {
    client
       .post('jobs', {
          title: title,
          body: body,
       })
       .then((response) => {
          setPosts([response.data, ...posts]);
       });
    setTitle('');
    setBody('');
 };

 export default authService;