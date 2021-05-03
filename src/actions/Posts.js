import * as api from '../api'

export const createPost = (post,history)=>async (dispatch)=>{
  try {
     const {data} = await api.createPost(post) 
     dispatch({type:'CREATE',payload:data})
     history.push("/")

  } catch (error) {
      console.log(error)
  }
}