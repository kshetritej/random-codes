import { FaEdit } from "react-icons/fa"
const Clock = ({clock, loc, date}) => {
  return (
    <div>
      
        <div className=" flex justify-center items-center align-center">
          <div className="bg-slate-300 p-12 rounded-lg">
            <div className="flex  items-center gap-3">
              {loc}
              <span>
                <FaEdit />
              </span>
            </div>

            <div> {clock} </div>

            <div> {date}</div>
          </div>
        </div>
    </div>
  )
}

export {Clock};