import { useState } from "react";
import plant from "../assets/images/plant.jpg";
import { RiCoinsFill } from "react-icons/ri";
export default function ProductCardWithPoint() {
  const [zoomImageOnHover, setZoomImageOnHover] = useState("");
  return (
    <div className="mx-5">
      <div
        className="w-[280px] border-[1px]   border-gray-200 rounded-xl hover:shadow-md relative"
        onMouseOut={() => {
          setZoomImageOnHover("");
        }}
        onMouseOver={() => {
          setZoomImageOnHover("scale-150");
        }}
      >
        <span>
          <RiCoinsFill />
        </span>
        <a href="#" className="border-none">
          <div className="overflow-hidden ">
            <img
              className={`border-gray-200 hover:border-t-0 rounded-xl ${zoomImageOnHover}  delay-150 duration-100`}
              src={plant}
              alt=""
            />
          </div>
        </a>
        <div className="px-3 pb-5">
          <div className="text-gray-700 ">Category</div>
          <div className="  font-bold">
            Something title of this indoor plant
          </div>
        </div>
      </div>
    </div>
  );
}
