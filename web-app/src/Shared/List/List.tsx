import Image from "../../Shared/Images/Image";
import { Link } from "react-router-dom";

type Props = {
  description: string;
  title: string;
  source?: string | null;
  endAt: string;
  level: string;
  id?: string;
};

const List = (props: Props) => {
  const { title, description, source, endAt, level, id } = props;

  return (
    <div className="list">
      <Image source={source ? source : "https://picsum.photos/400"} />
      <h3 className="list-title">{title}</h3>
      <p className="list-text-subtitle">
        {endAt ? endAt : "Aucune date de fin"}
      </p>
      <p className="list-text-subtitle">{level}</p>
      <p className="list-text">{description}</p>
      <div className="list-div">
        {id && (
          <Link className="list-see-more" to={`/challenge/${id}`}>
            Voir plus
          </Link>
        )}
      </div>
    </div>
  );
};

export default List;
