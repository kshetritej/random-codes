import dayjs from "dayjs";
import locale from "dayjs/locale";
import { Clock } from "./Clock";
import { useState } from "react";

function App() {
  const [countryName, setCountryName] = useState("");

  const clock = dayjs().format("hh:mm:ss");
  const date = dayjs().format("ddd, d MMM YYYY");
  const locations = locale();
  console.log('locations:', locations)
  location.forEach((element) => {
    if (element.key === "np") {
      setCountryName(element.name);
      console.log(countryName)
    }
    else{
      console.log('no country find.')
    }
  });

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex justify-center align-center bg-red-500">
        <Clock clock={clock} date={date} loc={countryName} />
      </div>
    </>
  );
}

export default App;
