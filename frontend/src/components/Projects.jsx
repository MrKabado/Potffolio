import React from "react";

function Projects(props) {
  return (
    <div className="w-full border p-3 rounded-xl bg-[#1E293B] flex flex-col justify-between">
      <span>
        <h1
          className={`flex items-center text-lg font-semibold ${props.titleColor} md:text-xl`}
        >
          {props.title}
          <props.Icon className={`w-7 inline-block ${props.iconColor} md:w-9`} />
        </h1>

        <p className="text-sm text-gray-300 md:text-lg">{props.description}</p>
      </span>
      <img
        className={`border-2 border-transparent transition duration-200 rounded-md mt-3 hover:cursor-pointer active:cursor-wait ${props.imgClass} hover:border-white`}
        onClick={props.onClick}
        src={props.image}
        alt={props.alt}
        title="visit"
      />
    </div>
  );
}

export default Projects;
