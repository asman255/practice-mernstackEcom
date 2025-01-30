import React from "react";

const NewsletterBox = () => {


    const onSubmitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-grey-800">
        Subscribe to our newsletter
      </p>
      <p className="text-grey-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam rem
        reiciendis accusamus in officia eos enim veniam debitis, doloremque
        perferendis saepe obcaecati, similique reprehenderit natus sunt, sint
        nulla repellendus maiores.
      </p>

      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          {" "}
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
