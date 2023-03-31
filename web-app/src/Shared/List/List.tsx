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
    <div className="w-10/12
    pb-6
    mb-4
    relative
    last:pb-0
    md:pb-0
    md:w-[26%]">
      <Image source={source ? source : "https://picsum.photos/400"} />
      <h3 className="text-center
          font-bold
          text-2xl
          xl:text-start">{title}</h3>
      <p className="text-center
          italic
          font-extralight
          text-gray-400
          xl:text-start">
        {endAt ? endAt : "Aucune date de fin"}
      </p>
      <p className="text-center
          italic
          font-extralight
          text-gray-400
          xl:text-start">{level}</p>
      <p className="text-center
          xl:text-start">{description}</p>
      <div className="text-blue-600">
        {id && (
          <Link className="custom-flex-center
          xl:block" to={`/challenge/${id}`}>
            Voir plus
          </Link>
        )}
      </div>
    </div>
  );
};

export default List;
