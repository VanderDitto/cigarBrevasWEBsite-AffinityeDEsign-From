import * as React from "react";

const Btn_select = () => ["yes", "no"].map((option) => (
  <button
    key={option}
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
  >
    {option}
  </button>
));


export default Btn_select;