const Chess = () => {
  return (
    <div>
      <p>
        <b>CheckMate</b> - Lead a battalion of chess pieces strategically to checkmate your opponent's King in a time-sensitive and thought-provoking chess match.
      </p>
      <p>
        <b>Materials</b>:
      <a href="http://www.chess.com" target="_blank" rel="noreferrer">
          {" "}
        We will utilize Chess.com throughout our workshops.
        </a>
        <p>Assess your proficiency level to decide your group.</p>
      </p>
      <table>
        <tr>
          <td><center>Beginner</center></td>
          <td>
<center>If you're new to the world of chess and find yourself unfamiliar with its rules and intricacies, you're embarking on a journey of discovery and learning. As a novice to this timeless game, you have yet to unravel the complexities of its strategies and tactics, but your curiosity and eagerness to delve into this intellectual pursuit are boundless.</center></td>
        </tr>
        <tr>
          <td><center>Intermediate</center></td>
          <td>
            
<center>With a foundational understanding of the rules of chess, you've taken your initial steps into the intricate world of this timeless game. However, despite your familiarity with the basics, you find yourself hesitating, lacking the confidence to fully trust your abilities on the board. Your journey is one of growth and exploration, as you seek to build upon your existing knowledge and develop the skills necessary to navigate the complexities of chess with assurance and poise.</center>
          </td>
        </tr>
        <tr>
          <td><center>Advanced</center></td>
          <td>
          <center>With a wealth of knowledge accumulated through dedicated study and practical experience, you possess a robust understanding of chess. Your confidence on the board is unwavering as you deftly navigate through the complexities of the game. Whether analyzing positions, formulating strategies, or executing moves, your proficiency shines through, reflecting your deep-rooted confidence in your abilities. Your journey is one of continual growth and refinement, as you embrace new challenges and strive for excellence in every game you play.</center>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Chess;
