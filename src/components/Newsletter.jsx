import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white py-16 w-full px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-bold">
            Want tips and tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter to stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input type="email" className="w-full text-black flex p-3 rounded-md" placeholder="Enter Email" />
            <button className="bg-cyan-400 w-[200px] rounded-md font-medium my-6 mx-4 py-3 text-black">Notify Me</button>
          </div>
          <p>We care about protection of your data. Read our <span className="text-cyan-300">Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
