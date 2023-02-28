import clsx from "clsx";
import { useMemo } from "react";

type Props = {
  name: string;
  type: string;
  icon?: any;
  size?: string;
};

const Button = (props: Props) => {
  const { name, type, icon = null, size = 'min-w-[180px]' } = props;

  const buttonClassName = useMemo(
    (): string =>
      clsx({
        button: true,
        "button-primary": type === "button-primary" ?? true,
        "button-secondary": type === "button-secondary" ?? true,
        "flex items-center justify-between": !!icon,
        [String(size)]: true,
      }),
    [type, icon, size]
  );

  return (
    <button className={buttonClassName}>
      {name}
      {icon ?? <i>{icon}</i>}
    </button>
  );
};

export default Button;
