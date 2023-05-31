import Button from "./Button";
const Events = ({ image, text }) => {
  return (
    <div className="events">
      <p>
        July 29th Saturday - will be our last day of this season. We plan to
        host in-person tournament events with all our participants.
      </p>
      <p> Time: 6:00 - 7:30 pm in Clarksburg</p>
      <p>
        <b>Tournaments</b>
      </p>
      <p> Live in-person speed cubing contest (bring your own cube)</p>
      <p> Live in-person chess contest </p>
      <p>Live in-person Origami making sessions</p>

      <p>
        <b>Rewards</b>
      </p>
      <p>All participants will get a participation certificate.</p>
      <p> Prizes for tournament winners !!!</p>
      <p>Pizza on us!!!</p>
      <Button label="Signup" url="https://forms.gle/WAm6joPnqpxmAEby7" />
    </div>
  );
};
export default Events;
