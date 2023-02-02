import clsx from "clsx";
import { useMemo } from "react";

type Props = {
  name: string;
  type: string;
  icon?: any;
};

const Button = (props: Props) => {
  const { name, type, icon = null } = props;

  const buttonClassName = useMemo(
    (): string =>
      clsx({
        button: true,
        "button-primary": type === "button-primary" ?? true,
        "button-secondary": type === "button-secondary" ?? true,
      }),
    [type]
  );

  return (
    <button className={buttonClassName}>
      {name}
      {icon ?? <i>{icon}</i>}
    </button>
  );
};

export default Button;
