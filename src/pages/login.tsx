import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const handleInputChange = (e: any) => {
    setInput((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(input);
    const response = await axios.post("/api/users/login", input);
    console.log("RESPONSE: ", response.data);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" onChange={handleInputChange} />
          <input type="text" name="password" onChange={handleInputChange} />
          <button>enter</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
