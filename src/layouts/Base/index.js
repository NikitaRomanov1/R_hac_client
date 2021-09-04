import Navbar from "../../components/Navbar";

export const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* <footer>Футер</footer> */}
    </div>
  );
};
