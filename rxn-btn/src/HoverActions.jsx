import { FcLike } from "react-icons/fc";
import { LiaFistRaisedSolid } from "react-icons/lia";
import { AiFillLike } from "react-icons/ai";
import { FaRegLaughSquint } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FcIdea } from "react-icons/fc";
const HoverActions = ({ setRxn, setModal, setColor }) => {
  const reactions = [
    {
      name: "Like",
      icon: <AiFillLike />,
      color: "blue",
    },
    {
      name: "Love",
      icon: <FcLike />,
      color: "red",
    },
    {
      name: "Support",
      icon: <LiaFistRaisedSolid />,
      color: "green",
    },
    {
      name: "Funny",
      icon: <FaRegLaughSquint />,
      color: "purple",
    },
    {
      name: "Celebrate",
      icon: <LuPartyPopper />,
      color: "orange",
    },
    {
      name: "Insightful",
      icon: <FcIdea />,
      color: "yellow",
    },
  ];
  return (
    <div className="absolute top-[84px]  p-4">
      <ul
        className="bg-slate-200 px-2 rounded-full list-none flex"
        onMouseLeave={() => setModal(false)}
      >
        {reactions.map((react) => {
          return (
            <button
              key={react.name}
              onClick={() => {
                setRxn(react);
                setModal(false);
                setColor(react.color);
              }}
              className="text-2xl"
            >
              <div className="hover:scale-150 hover:transition ease-linear hover:-translate-y-2 p-2">
                {react.icon}
              </div>
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default HoverActions;
