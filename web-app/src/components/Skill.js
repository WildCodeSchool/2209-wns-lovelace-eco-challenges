const Skill = ({ skillName, numberOfVotes }) => {
  return (
    <>
      {skillName}
      <span className="votes">{numberOfVotes}</span>
    </>
  );
};

export default Skill;
