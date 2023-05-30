const Chess = () => {
  return (
    <div className="text-container">
      <p>
        <b>CheckMate</b> - Control an army of chess pieces and checkmate your
        opponent’s King in a time sensitive thought provoking chess game.
      </p>
      <p>
        <b>Materials</b>: We will use{" "}
        <a href="chess.com" target="_blank" rel="noreferrer">
          chess.com.
        </a>
        <p>Assess your proficiency level to decide your group.</p>
      </p>
      <table>
        <tr>
          <td>Introductory</td>
          <td>Need to learn the rules of chess</td>
        </tr>
        <tr>
          <td>Beginner</td>
          <td>
            Log in to Chess.com Navigate to tab: Play - Computer - Beginner
            Select Bot ‘Elani 400’ If you are able to consistently beat Elani
            400 in 3 out of 5 games, then you are an intermediate player. If you
            can't, then you are a beginner.
          </td>
        </tr>
        <tr>
          <td>Intermediate</td>
          <td>
            Log in to Chess.com Navigate to tab: Play- Computer-Intermediate
            Select Bot ‘Emir 1000’ If you are able to consistently beat Emir
            1000 in 3 out of 5 games, then you are an advanced player. If you
            cant, then you are an intermediate player.
          </td>
        </tr>
        <tr>
          <td>Advanced</td>
          <td>
            Log in to Chess.com Navigate to tab: Play- Computer-Advanced Select
            Bot ‘Francis 2300’ If you are able to consistently beat Francis 2300
            in 3 out of 5 games, then you are a Master player. If you can't,
            then you are an intermediate player.
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Chess;
