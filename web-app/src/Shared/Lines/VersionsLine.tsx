import Check from "../../assets/logos/Check";

import { PRIMARY } from "../../Shared/Constants/Color";

type Props = {
  text: string;
};

const VersionsLine = (props: Props) => {
  const { text } = props;

  return (
    <>
      <p className="flex items-center mb-3">
        <i className="mr-5">
          <Check width="30px" height="30px" fill={PRIMARY} />
        </i>
        {text}
      </p>
    </>
  );
};

export default VersionsLine;
