import "./App.css";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { MdModeComment } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
import { RiShareForwardFill } from "react-icons/ri";
import HoverActions from "./HoverActions";
function App() {
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState("");
  const [rxn, setRxn] = useState({
    name: "Like",
    icon: <FaThumbsUp />,
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-blue-500 font-bold flex  m-10 ">Linked 
       <div className="bg-blue-600 p-4 text-white rounded-md ml-2">
        Out
        </div> 
        </h1>
        <div className="flex">
          {modal ? (
            <HoverActions
              setRxn={setRxn}
              setColor={setColor}
              setModal={setModal}
            />
          ) : (
            console.log("classic")
          )}
          <div className=" border flex gap-1 rounded-lg p-2 ">
            <button
              onMouseOver={() => {
                setModal(true);
              }}
              className={`text-${color}-500 p-4 flex gap-2 justify-between rounded-md content-center items-baseline  hover:bg-slate-50`}
            >
              {rxn.icon} {rxn.name}
            </button>
            <button className="hover:bg-slate-50  p-4 flex gap-3 justify-between rounded-md content-center items-baseline">
              <MdModeComment />
              Comment
            </button>
            <button className=" hover:bg-slate-50 p-4 flex gap-3 justify-between rounded-md content-center items-baseline">
              <BiRepost />
              Repost
            </button>
            <button className=" hover:bg-slate-50 p-4 flex gap-3 justify-between rounded-md content-center items-baseline">
              <RiShareForwardFill />
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
