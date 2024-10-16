import Image from "next/image";

interface CardProps {
  image: string; 
}

const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md overflow-clip">
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-full">
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col  ">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-yellow to-teal text-transparent bg-clip-text font-sans">Welcome to FlickFusion</h1>
            <p className="text-lg">A Movie Streaming Service</p>
          </div>
        </div>
        <div className="rounded-md overflow-clip w-full">
          <img src="image/thumb-1.jpeg" alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}
