import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice";

const reactionsEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}
 
const ReactionButtons = ({post}) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionsEmoji).map(([name, value]) => {
    return ( 
        <button
            key={name}
            type= "button"
            className= "reactionButton"
            onClick= {()=>
                dispatch(reactionAdded({postId: post.id, reaction: name}))
            }
        > 
         {value} {post.reactions[name]}
        </button>
    )
  })
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons