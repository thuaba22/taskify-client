import Footer from "../../components/shared/Footer/Footer";
import NavBar from "../../components/shared/NavBar/NavBar";
import packagesData from "./Packages.json";

const Packages = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section className="bg-[#F3F0FF] py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Choose Your Package
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.map((packageItem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  {packageItem.name}
                </h3>
                <ul className="list-disc ml-6 text-gray-600">
                  {packageItem.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <p className="mt-4 text-2xl font-semibold">
                  ${packageItem.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Packages;
