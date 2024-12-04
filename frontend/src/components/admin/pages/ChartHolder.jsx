import React from "react";
import PiechartUser from "../components/PiechartUser";
import PiechartRecruiter from "../components/PiechartRecruiter";
import Barchart from "../components/Barchart";

function ChartHolder() {
  return (
    <div>
      <div className="top flex justify-between p-4">
        <div className="left shadow-xl rounded-md w-[48%] p-4">
          <h1 className="font-bold text-xl text-zinc-600">STUDENTS</h1>
          <PiechartUser/>
        </div>
        <div className="right shadow-xl rounded-md w-[48%] p-4">
          <h1 className="font-bold text-xl text-zinc-600">RECRUITERS</h1>
          <PiechartRecruiter/>
        </div>
      </div>
      <div className="bottom shadow-xl rounded-md p-4 m-4">
        <h1 className="font-bold text-xl text-zinc-600">BAR GRAPH</h1>
        <Barchart/>
      </div>
    </div>
  );
}

export default ChartHolder;
