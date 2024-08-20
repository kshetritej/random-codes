import { useState } from "react";
const Login = () => {
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="border p-4 w-[400px]  h-[600px] m-auto justify-center flex flex-col gap-6 ">
      <div className="logo text-center text-xl font-bold ">
        <span className="flex justify-center">
          <img
            className="w-[80px] h-[80px] object-cover"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodix.com%2Flogo%2F2004161.png&f=1&nofb=1&ipt=6b0536c81e24b3095543a2770f86e76a1234ad1d951417d207036b855ac5ffa1&ipo=images"
            alt="dummy-logo"
          />
        </span>
        Meetcode
      </div>
      <input
        type="text"
        placeholder="Username"
        className="border p-4"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-4"
        onChange={(e) => setPwd(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail address"
        className="border p-4"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-gray-400 text-white p-4">Register</button>
    </div>
  );
};

export default Login;
