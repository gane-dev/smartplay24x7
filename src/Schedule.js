import ChessSchedule from "./ChessSchedule";
import PythonSchedule from "./PythonSchedule";

const Schedule = () => {
  return (
    <div className="schedule">
      <div>
        <h2>Python</h2>
        <PythonSchedule></PythonSchedule>
      </div>
      <div>
        <h2>CheckMate</h2>
        <ChessSchedule></ChessSchedule>
      </div>
    </div>
  );
};
export default Schedule;
