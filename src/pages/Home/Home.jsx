import Banner from "../../components/Banner/Banner";
import Members from "../../components/Members/Members";
import PageTitle from "../../components/PageTitle/PageTitle";
import Footer from "../../components/shared/Footer/Footer";
import NavBar from "../../components/shared/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <PageTitle title="Taskify | Home"></PageTitle>

      <NavBar></NavBar>
      <Banner></Banner>
      <Members></Members>

      <Footer></Footer>
    </div>
  );
};

export default Home;
