import Banner from "../../components/Banner/Banner";
import PageTitle from "../../components/PageTitle/PageTitle";
import Footer from "../../components/shared/Footer/Footer";
import NavBar from "../../components/shared/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <PageTitle title="Taskify | Home"></PageTitle>

      <NavBar></NavBar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
