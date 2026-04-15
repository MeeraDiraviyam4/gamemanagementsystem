import Button from "../UI/Button.jsx";
import { isPlayerLoggedIn } from "../../utils/authHelpers.js";


function GameRow({ match, onRsvp }) {
  const match = { id, sport, opponent, date, time, location, rsvpStatus } ;


  const getButtonVariant = (status) => {
    if (status === "accepted") return "success";
    if (status === "denied") return "danger";
    return "secondary";
  };


  const getButtonText = (status) => {
    if (status === "accepted") return "Going ✓";
    if (status === "denied") return "Declined ✗";
    return "Decline";
  };
 
  const loggedIn = isPlayerLoggedIn();
  return (
    <tr className={`match-row ${match.rsvpStatus || ""}`}>
      <td>{sport}</td>
      <td>{player1}</td>
      <td>{player2}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{location}</td>
      <td> 

        <Button
          variant={rsvpStatus === "accepted" ? "success" : "secondary"}
          onClick={() => onRsvp(id, "accepted")}
          disabled={rsvpStatus === "denied"}
        >
          {rsvpStatus === "accepted" ? "Going ✓" : "Going"}
        </Button>
        <Button
          variant={rsvpStatus === "denied" ? "danger" : "secondary"}
          onClick={() => onRsvp(id, "denied")}
          disabled={rsvpStatus === "accepted"}
        >
          {rsvpStatus === "denied" ? "Decline ✗" : "Decline"}
        </Button>
      </td>
    </tr>
  );
}


export default GameRow;