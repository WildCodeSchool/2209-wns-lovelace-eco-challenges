const Button = (props: any) => {
  const {onClick, name, type, icon = null } = props;

  return (
    <button onClick={onClick} className={type}>
      {name}
      {icon ?? <i>{icon}</i>}
    </button>
  );
};

export default Button;
