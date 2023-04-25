type Prop = {
  children: string;
};
const TiltedLabel = ({ children } : Prop ) => {
  return (
    <p className="text-primary
    font-bold
    border-4
    border-primary
    rounded-lg
    w-fit
    p-2
    -rotate-3
    mb-5">{children}</p>
  )
}

export default TiltedLabel