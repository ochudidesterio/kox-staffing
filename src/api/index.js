import axios from 'axios'

const url ='https://koxstaffing.com/contact-us.php'
export const createPost = (newPost)=>axios.post(url,newPost)
