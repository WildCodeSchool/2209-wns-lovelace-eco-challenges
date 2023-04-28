type Props = {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
};

const HeaderProfil = (props: Props) => {
  const { firstName, lastName, city, country } = props;

  return (
    <div className="flex flex-row items-center shadow-lg rounded-lg p-2 mb-8">
      <div className="rounded-full w-32 h-32 md:w-40 md:h-40 bg-gray-200 overflow-hidden">
        <img className="w-full h-full object-cover" src="https://picsum.photos/700/300" alt="Photo de profil" />
        {/* photo à rajouter dans le back */}
      </div>
      <div className="md:ml-4 mt-4 md:mt-0 flex flex-col justify-center">
        <div className="flex flex-row items-center mb-2">
          <h1 className="text-2xl md:text-4xl font-bold mr-4">{firstName} {lastName}</h1>
          <button className="bg-green-600 hover:bg-green-400 text-white px-4 py-2 rounded-md font-medium">
            Modifier le profil
          </button>
        </div>
        <div className="flex flex-row items-center mb-2">
          <p className="text-lg">{city}, {country}</p>
        </div>
        <div className="flex flex-row items-center mb-2">
          <p className="text-base">Je suis une description</p>
          {/* {ptite bio a rajouter dans le back} */}
        </div>
      </div>
    </div>

  )
}



export default HeaderProfil