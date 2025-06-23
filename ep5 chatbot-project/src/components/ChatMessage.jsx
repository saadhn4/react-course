import robotProfileImage from "../assets/robot.png";
import userProfileImage from "../assets/user.png";
import "./ChatMessage.css"

function ChatMessage({ message, sender }) {
  // if (sender === "robot") {
  //   return (
  //     <div>
  //       <img src="../robot.png" alt="icon" width="50" />
  //       {message}
  //     </div>
  //   );
  // }

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {/* this is above the {message} because remember we need the img before the chatbots text */}
      {sender === "robot" && (
        <img
          src={robotProfileImage}
          alt="icon"
          className="chat-message-profile"
        />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img
          src={userProfileImage}
          alt="icon"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}

export default ChatMessage;
