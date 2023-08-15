import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Page = (props: any) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="eco-playground">
        <div className="page">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Page;

// mettre a jour le next config js
// src/api/apolloclient
// exemple form launch challenge (submit new team)