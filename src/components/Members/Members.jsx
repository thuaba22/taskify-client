import userTypes from "./members.json"; // Import the JSON file

const Members = () => {
  return (
    <section className="bg-[#F3F0FF] py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Meet Our Users
        </h2>

        <div className="grid w-[90%] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {userTypes.map((userType) => (
            <div
              key={userType.type}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={userType.image}
                alt={`${userType.type} Member`}
                className="mb-4 w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{userType.type}</h3>
              <ul className="list-disc ml-6 text-gray-600">
                {userType.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
