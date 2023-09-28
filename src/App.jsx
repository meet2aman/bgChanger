import { useState } from "react";

function App() {
  const [color, setColor] = useState("aqua");

  return (
    <div
      className="h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      {/* <div className="flex fixed top-7 mt-4 text-2xl justify-center inset-x-0  rounded-xl px-4 shadow-lg bg-transparent "> */}
      <div className="w-full flex text-4xl justify-center">
        <button className="flex fixed top-10 mt-4 justify-center rounded-full outline-none px-10 bg-white py-2 tracking-wide shadow-lg">
          Color Changer
        </button>
      </div>

      {/* </div> */}
      <div className="flex flex-wrap fixed bottom-20 mb-10 justify-center inset-x-0 mx-10 rounded-xl px-4 shadow-lg bg-white">
        <div className="flex fixed flex-wrap justify-center gap-5 shadow-xl rounded-2xl px-4 py-2 bg-white text-white text-xl ">
          <button
            onClick={() => {
              setColor("tomato");
            }}
            className="rounded-full outline-none px-4 w-24 py-1 shadow-lg"
            style={{ backgroundColor: "tomato" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("yellowgreen");
            }}
            className="rounded-full outline-none px-3 py-1 w-24  shadow-lg"
            style={{ backgroundColor: "yellowgreen" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="rounded-full outline-none px-3 w-24  py-1 shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("mediumseagreen");
            }}
            className="rounded-full outline-none px-3 w-24  py-1 shadow-lg"
            style={{ backgroundColor: "mediumseagreen" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("slateblue");
            }}
            className="rounded-full outline-none px-3 w-24  py-1 shadow-lg"
            style={{ backgroundColor: "slateblue" }}
          >
            Violet
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="rounded-full outline-none px-3 w-24  py-1 shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="rounded-full outline-none px-3 w-24  py-1 shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => {
              setColor("crimson");
            }}
            className="rounded-full outline-none px-3 w-24  py-1 shadow-lg"
            style={{ backgroundColor: "crimson" }}
          >
            crimson
          </button>
          <button
            onClick={() => {
              setColor("dodgerblue");
            }}
            className="rounded-full outline-none px-3 w-24  py-1 shadow-lg"
            style={{ backgroundColor: "dodgerblue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="rounded-full outline-none px-3 w-24  py-1 shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
