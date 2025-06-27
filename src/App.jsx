import { use, useCallback, useEffect, useState } from "react";

function App() {
  const [len, setLen] = useState(8); //*tkey=password *//
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [key, setKey] = useState("");

  //* useCallback(func,[])*//
  const keyGenertor = useCallback(() => {
    let tkey = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&";

    for (let i = 1; i < len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      tkey += str.charAt(char);
    }
    setKey(tkey);
  }, [len, num, char, setKey]);

  useEffect(() => {
    keyGenertor();
  }, [len, num, char, keyGenertor]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        {key}
      </div>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 text-emerald-50">
        {/*  */}

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={key}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            // ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              onChange={(e) => {
                setLen(e.target.value);
              }}
              type="range"
              min={6}
              max={40}
              value={len}
              className="cursor-pointer"
            />
            <label>Length:{len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>

            {}
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="character"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="character">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
