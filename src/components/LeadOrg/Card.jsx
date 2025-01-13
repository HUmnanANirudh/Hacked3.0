import { MdPhone, MdEmail } from "react-icons/md";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"


const Card = ({ img, name,number,email }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [0, 1], ["12.5deg", "-12.5deg"]);
  const rotateY = useTransform(mouseX, [0, 1], ["-12.5deg", "12.5deg"]);

  const move = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();
    const width = pos.width;
    const height = pos.height;

    const posX = e.clientX - pos.left;
    const posY = e.clientY - pos.top;

    const Xpct = posX / width;
    const Ypct = posY / height;

    x.set(Xpct);
    y.set(Ypct);
  };

  const leave = () => {
    x.set(0.5); 
    y.set(0.5); 
  };

  return (
    <motion.div
      className="relative flex flex-col justify-between items-center w-full h-full max-w-xs md:max-w-sm lg:max-w-md rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600/20 to-blue-800/20"
      style={{
        transform: "translateZ(100px)",
        transformStyle: "preserve-3d",
        perspective: 1000, 
        rotateX,
        rotateY,
      }}
      onMouseMove={move}
      onMouseLeave={leave}
      whileHover={{ translateZ: 100,}}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <div className="absolute top-4 left-4 flex justify-center items-center">
        <h1
          className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-white/50 whitespace-nowrap z-0 tracking-wider uppercase"
        >
          {name}
        </h1>
      </div>
       <motion.div
        className="relative w-full z-10"
        style={{
          transform: "translateZ(100px)", 
          rotateX, 
          rotateY,
        }}
        onMouseMove={move}
        onMouseLeave={leave}>
        <img
          src={img}
          className="w-full h-auto object-cover"
          loading="lazy"
          alt={name}
        />
      </motion.div>
      <div
        className="relative w-full flex flex-col justify-center items-center text-center bg-[#37375e]/30 py-4 z-20 text-white space-y-2"
        style={{
          transform: "translateZ(15px)",
          transformStyle: "preserve-3d",
        }}
      >
      <a
          href={` https://wa.me/{number}`} 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-300"
        >
          <MdPhone size={20} />
          <span className="text-lg font-bold">{number}</span>
        </a>

        <a
          href={`mailto:${email}`} 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-300 transition-colors duration-300"
        >
          <MdEmail size={20} />
          <span className="text-sm">{email}</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
