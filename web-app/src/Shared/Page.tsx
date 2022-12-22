import Header from "./Header/Header";

const Page = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="eco-playground">
        <div className="page">{children}</div>
      </main>
    </>
  );
};

export default Page;
