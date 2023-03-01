import Image from "../../Shared/Images/Image";
import { Link } from "react-router-dom";

type Props = {
  description: string;
  title: string;
  source?: string|null;
  endAt: string;
  level: string;
  id: string;
};

const List = (props: Props) => {
  const { title, description, source, endAt, level, id } = props;

  return (
    <div className="list">
      <Image source={ source ? source : 'https://picsum.photos/400' } />
      <p className="list-title">{title}</p>
      <p className="list-text">{description}</p>
      <p>se termine le : {endAt}</p>
      <p>Niveau de difficulté du challenge : {level}</p>
      <Link to={`/challenge/${id}`}>Voir plus</Link>
      {/* <p className="list-see-more">Voir plus</p> */}
    </div>
  );
};

export default List;
