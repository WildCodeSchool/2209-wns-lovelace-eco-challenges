import React from "react";

type Props = {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
};

const HeaderProfil = (props: Props) => {
  const { firstName, lastName, city, country } = props;

  return (
    <div className="flex flex-col items-center shadow-lg rounded-lg p-2 mb-8">
      <div className="rounded-full overflow-hidden w-40 h-40 md:w-40 md:h-40 mt-12">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/700/300"
          alt="Photo de profil"
        />
        {/* photo à rajouter dans le back */}
      </div>
      <div className="profil md:ml-4 mt-4 md:mt-0 flex flex-col">
        <div className="bio flex">
          <div className="flex items-center justify-around mb-2">
            <h1 className="text-2xl md:text-4xl font-bold mr-4">{firstName} {lastName}</h1>
          </div>
          <div className="flex flex-row items-center justify-around mb-2">
            <p className="text-lg">{city}, {country}</p>
          </div>
          <div className="flex flex-row items-center justify-around">
            <p className="text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            {/* {ptite bio a rajouter dans le back} */}
          </div>
        </div>
        <div className="center flex justify-center">
          <button className="bg-green-600 hover:bg-green-400 text-white px-4 py-2 rounded-md font-medium">
            Modifier le profil
          </button>
        </div>
      </div>

      <style jsx>{`
    .rounded-full {
      border-radius: 50%;
    }

    @media (max-width: 1024px) {
      .height {
        height: 772px;
      }

      .flex-col {
        flex-direction: column;
      }
      button {
        width: 70%;
      }
      .bio {
        flex-direction: column;
        max-height: 20vh;
      }
      .text-base {
        margin-bottom: 2vh;
      }
    }
    
    @media (min-width: 1024px) {
      .bio {
        height: 470px;
        flex-direction: column;
      }
      .flex-col {
        flex-direction: column;
        height: 787px;
      }
      button {
        width: 80%;
      }
      .profil {
        max-width: 70%
      }
    }
  `}</style>
    </div>



  );
};

export default HeaderProfil;
