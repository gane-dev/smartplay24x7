import ChessSchedule from "./ChessSchedule";
import OrigamiSchedule from "./OrigamiSchedule";
import SpeedSchedule from "./SpeedSchedule";

const Schedule = () => {
  return (
    <div className="schedule">
      <div >
        <h2>Speedcubing</h2>
        <SpeedSchedule></SpeedSchedule>
      </div>
      <div >
        <h2>CheckMate</h2>
        <ChessSchedule></ChessSchedule>
      </div>
      
    </div>
  );
};
export default Schedule;
