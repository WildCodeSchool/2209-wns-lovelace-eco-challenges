import Image from "../../Shared/Images/Image";
import Button from "../../Shared/Buttons/Button";

type Props = {
  source: string;
  description: string;
  text: string;
  title: string;
  type?: string;
};

const List = (props: Props) => {
  const { source, title, description, text, type } = props;

  return (
    <div className="list">
      {type === "pin" && (
        <div className="pin">
          <Button
            type="button-primary"
            name="Ajouter"
            size="w-fit"
          />
        </div>
      )}
      <Image source={source} description={description} />
      <p className="list-title">{title}</p>
      <p className="list-text">{text}</p>
      <p className="list-see-more">Voir plus</p>
    </div>
  );
};

export default List;
