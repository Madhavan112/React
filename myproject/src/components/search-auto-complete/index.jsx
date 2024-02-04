import { useEffect, useState } from "react";
import Suggestion from "./suggestion";
import c from "./style.module.css"
export default function SearchAuto() {
  const [suggestion, setSuggestion] = useState(false);
  const [searchName, setSearchName] = useState([]);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [errHandle, setErrHandle] = useState(null);
  function handleChangeInput(e) {
    const queryUserName = (e.target.value).toLowerCase();
    setUsername(e.target.value);
    if (queryUserName.length>0) {
      const filterData = userData.filter((Name) => 
      ((Name.firstName).toLowerCase()).includes(queryUserName)
      );
      setSearchName(filterData);
      setSuggestion(true)
    }
    else{
      setSuggestion(false)

    }
  }
  function onHandleSelectName(name){
    setUsername(name)
    setSuggestion(false)
    setSearchName([])


  }
  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUserData(data.users);
    } catch (err) {
      console.log(err);
      setErrHandle(err.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (errHandle) {
    return <p>Error has Occured</p>;
  }
  return (
    <div className={c.wrapper}>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => {
          handleChangeInput(e);
        }}
      />
      {suggestion && <Suggestion onHandleSelectName={onHandleSelectName}  searchName={searchName}/>}
    </div>
  );
}
