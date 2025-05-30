import { useEffect, useState } from "react";

function useLocalStorage(
  key: string,
  initial: string
):[string, (value: string) => void]{
  let [pass, setPass] = useState(initial);

  useEffect(() => {
    let value = window.localStorage.getItem(key);
   
    if (value) {
      setPass(value);
    }
  }, []);
  function setValue(value: string) {
   
    setPass(value);
    window.localStorage.setItem(key, value);
  }

  return [pass, setValue];
}

export default useLocalStorage;
