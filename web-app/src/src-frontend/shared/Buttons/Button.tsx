import clsx from "clsx";
import { useMemo } from "react";

type Props = {
  name: string;
  type: string;
  icon?: any;
  size?: string;
  onClickEvent?:() => void;
};

const Button = (props: Props) => {
  const { name, type, icon = null, size = 'min-w-[180px]', onClickEvent } = props;

  const buttonClassName = useMemo(
    (): string =>
      clsx({
        "rounded-lg p-2 min-h-[42px] flex items-center justify-center shadow-xl": true,
        "text-white bg-primary": type === "button-primary" ?? true,
        "text-primary bg-white": type === "button-secondary" ?? true,
        "flex items-center justify-between": !!icon,
        [String(size)]: true,
      }),
    [type, icon, size]
  );

  return (
    <button onClick={onClickEvent} className={buttonClassName}>
      {name}
      {icon ?? <i>{icon}</i>}
    </button>
  );
};

export default Button;
