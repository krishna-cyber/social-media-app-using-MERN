import axios from "axios";

const uri = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(uri);
