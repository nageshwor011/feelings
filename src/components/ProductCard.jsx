import { useState } from "react";
import plant from "../assets/images/homeImg.jpg";

export default function ProductCard() {
  const [hoverColor, setHoverColor] = useState("");
  return (
    <div className="m-5">
      <div
        className="w-[280px] border   border-gray-300 hover:border-gray-400 rounded-xl hover:shadow-md shadow-gray-400  overflow-hidden"
        onMouseOut={() => setHoverColor("bg-gray-300")}
        onMouseOver={() => setHoverColor("bg-gray-400")}
      >
        <div className="h-[100%] w-full">
          <img
            className=" border-gray-200 hover:border-t-0 w-full"
            src={plant}
            alt=""
          />
        </div>
        <div
          className={` flex justify-center py-3 ${hoverColor} hover:bg-gray-400 font-serif`}
        >
          Tulin & Klussen
        </div>
      </div>
    </div>
  );
}
