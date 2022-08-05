import React from "react";
import battleship from "../assets/portfolio/battleship.jpg";
import blackjack from "../assets/portfolio/blackjack.jpg";
import discord from "../assets/portfolio/discord.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: battleship,
      href: "https://github.com/Sricharan24/BattleShip"
    },
    {
      id: 2,
      src: blackjack,
      href: "https://github.com/Sricharan24/BlackJack"
    },
    {
      id: 3,
      src: discord,
      href: "https://github.com/Sricharan24/ProfanityCheckeer-DiscordBot"
    },
    {
      id: 4,
      src: portfolio,
      href: "https://github.com/Sricharan24/ProfanityCheckeer-DiscordBot"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-blue-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work down below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-lg shadow-purple-700 rounded-lg">
              <img
                src={src}
                alt=""
                className=" inline border-b-2 border-t-2 border-l-2 border-r-2 border-white duration-200 hover:scale-105"
              />
              <div className= "border-b-2 border-t-2 border-l-2 border-r-2 border-white bg-gradient-to-b from-black to-blue-600  flex items-center justify-center">
                <button className= "bg-gradient-to-b from-blue-600 to-black w-1/2 px-6 py-1 m-2 duration-200 hover:scale-105">
                <a href={href} target = "_blank" rel="noreferrer" className="text-white">
                    Code
                </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;