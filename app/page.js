import Image from "next/image";
import CardComponent from "./components/CardComponent";

export default function Home() {
  return (
    <div className=" h-screen">
      <img
        src="/bg.jpg"
        alt="Descriptive text for screen readers"
        layout="responsive"
        className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
      />
      <CardComponent />
    </div>
  );
}
