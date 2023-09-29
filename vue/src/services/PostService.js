import axios from 'axios';

export default {
    
    getFeed() {
        return axios.get("/")
    },
    
    addPost(post) {
        return axios.post("/post", post);
    }
    getPhotos(){
        return axios.get()
    }



}