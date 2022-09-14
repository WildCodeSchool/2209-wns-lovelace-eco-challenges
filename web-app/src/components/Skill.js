const Skill = ({ name, numberOfVotes }) => {
  return (
    <>
      {name}
      <span className="votes">{numberOfVotes}</span>
    </>
  );
};

export default Skill;
