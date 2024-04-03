import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../assets/images/logo.jpg";
import flag from "../assets/images/flag.jpg";
export default function NavBar() {
  const category = [
    { wonen: ["woonac", "planteen", "tafeleen", "textiel"] },
    { koken: ["pannen", "mooinen", "kookbonen", "something", "randomText"] },
    { wonen: ["woonac", "planteen", "tafeleen", "textiel"] },
    { koken: ["pannen", "mooinen", "kookbonen", "something", "randomText"] },
    { wonen: ["woonac", "planteen", "tafeleen", "textiel"] },
    { koken: ["pannen", "mooinen", "kookbonen", "something", "randomText"] },
    { wonen: ["woonac", "planteen", "tafeleen", "textiel"] },
    { koken: ["pannen", "mooinen", "kookbonen", "something", "randomText"] },
    { wonen: ["woonac", "planteen", "tafeleen", "textiel"] },
    { koken: ["pannen", "mooinen", "kookbonen", "something", "randomText"] },
  ];
  const cat = [
    "wonen",
    "koken",
    "wonen",
    "koken",
    "wonen",
    "koken",
    "wonen",
    "koken",
  ];

  return (
    <>
      <div className="w-full bg-[#F2F7F5] h-[100px]">
        <div className="flex justify-end">
          <div className=" text-black opacity-75 me-3 text-[16px]">English</div>
          <div className=" mx-1 text-black opacity-75 text-[16px]">NL</div>
          <div className="one">
            <img src={flag} alt="" width={"40"} />
          </div>
        </div>

        <div className="flex justify-start w-[85%] items-center mt-[-20px]">
          <div className="font-semibold text-4xl p-5 mr-32">
            <img src={logo} alt="" width="300px" />
          </div>
          <div className="w-[600px]">
            <input
              type="search"
              name=""
              id=""
              className=" w-full bg-white h-10 text-black rounded-2xl  "
            />
          </div>

          <div className="flex">
            <div className="mx-5 mt-[5px]">
              <MdOutlineShoppingCart />
            </div>
            <div className="mx-5 ">cart</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="">
        <ul className="flex justify-between">
          {cat.map((cat, index) => {
            return <li key={index}>{cat}</li>;
          })}
        </ul>
      </div>
      <hr />
    </>
  );
}
