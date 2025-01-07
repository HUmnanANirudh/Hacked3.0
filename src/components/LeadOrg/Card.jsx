const Card = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full max-w-xs md:max-w-sm lg:max-w-md bg-gray-900 rounded-3xl ">
      <div className="absolute -top-10">
        <img
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          className="w-20 h-20 object-cover rounded-full shadow-xl shadow-gray-600"
          loading="lazy"
          alt=""
        />
      </div>

      <div className="text-center flex flex-col justify-start pt-4">
        <span className="text-red-600 text-5xl md:text-6xl lg:text-7xl leading-none pt-10">&ldquo;</span>
        <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Name</h1>
        <p className="text-base md:text-lg lg:text-xl">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="flex justify-center h-36 md:h-40 lg:h-44 pt-2">
        <img
          src="https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg"
          className="object-cover w-full rounded-3xl"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};
export default Card;
