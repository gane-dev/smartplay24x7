import ChessSchedule from "./ChessSchedule";
import PythonSchedule from "./PythonSchedule";

const Schedule = () => {
  return (
    <div className="schedule">
      <div>
        <h2>Basic Python Programming</h2>
        <PythonSchedule></PythonSchedule>
      </div>
      <div>
        <h2>Learn and Practice Chess: An Introduction to the Game</h2>
        <ChessSchedule></ChessSchedule>
      </div>
    </div>
  );
};
export default Schedule;
