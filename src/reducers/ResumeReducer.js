const posts= (posts=[],action)=>{
  switch (action.type) {
    case 'CREATE':
      return[...posts,action.payload]
      
  
    default:
      return posts
  }
}
export default posts