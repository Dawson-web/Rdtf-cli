"use client";

export const Button = (props: any) => {
  return (
    <button className="bg-blue-600 px-2 py-1 rounded-md text-white hover:bg-blue-700 transition-colors duration-300 drop-shadow-2xl	">
      {props.children}
    </button>
  );
};
