
import { useState } from "react";
import "./ReactionButton.css";

const ReactionButton = () => {
  const [reaction, setReaction] = useState("None");

  const reactions = ["Like", "Love", "Celebrate"];

  return (
    <div className="reaction-container">
      <h2>React to this Post</h2>

      {reactions.map((item) => (
        <button
          key={item}
          onClick={() => setReaction(item)}
          className={reaction === item ? "active" : ""}
        >
          {item}
        </button>
      ))}

      <p>
        <strong>Selected Reaction:</strong> {reaction}
      </p>
    </div>
  );
};

export default ReactionButton;



// import { useState } from "react";
// const ReactionButton = () => {
//      const [reaction, setReaction] = useState("None");
//      const [isLoveActive, setIsLoveActive] = useState(true);
     
//     const reactions = ["Like", "Love", "Celebrate"];
//   return (
//     <>
//         {/* <button onClick={() => setReaction("Love")}>
//             Love
//         </button>

//         <button onClick={() => setReaction("Like")}>
//             Like
//         </button>

//         <button onClick={() => setReaction("Celebrate")}>
//             Celebrate
//         </button>

//         <p>Selected Reaction: {reaction}</p> */}
//         {reactions.map((item) => (
//                 <button
//                     key={item}
//                     onClick={() => setReaction(item)}
//                 >
//                     {item}
//                 </button>
    
// ))}
// <p>Selected Reaction: {reaction}</p>
//     </>
//   )
//         }

// export default ReactionButton


