import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

function RequestAssistance() {

  const navigate = useNavigate();

  const [problem, setProblem] = useState("");

  const problems = [
    "Flat Tyre",
    "Battery Issue",
    "Vehicle Breakdown",
    "Towing",
    "Other"
  ];

  const submitRequest = () => {
    if (!problem) return;

    navigate("/mechanics");
  };

  return (
    <div className="min-h-screen bg-[#0b0d0f]">

      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold">
          Request Assistance
        </h1>

        <p className="text-zinc-500 mt-2">
          Tell us what happened to your vehicle.
        </p>

        {/* Location */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-8">

          <h2 className="font-semibold text-lg">
            1. Your Location
          </h2>

          <div className="h-48 bg-zinc-800 rounded-xl mt-4 flex items-center justify-center">
            📍 Current Location
          </div>

          <button className="mt-4 text-orange-500 text-sm">
            Use my current location
          </button>

        </div>

        {/* Vehicle */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-5">

          <h2 className="font-semibold text-lg">
            2. Select Vehicle
          </h2>

          <select className="w-full mt-4 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3">
            <option>Hyundai i20 • DL XX XXXX</option>
            <option>My other vehicle</option>
          </select>

        </div>

        {/* Problem */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-5">

          <h2 className="font-semibold text-lg">
            3. What's wrong?
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">

            {problems.map((item) => (

              <button
                key={item}
                onClick={() => setProblem(item)}
                className={`p-4 rounded-xl border text-left transition ${
                  problem === item
                    ? "border-orange-500 bg-orange-500/10 text-orange-400"
                    : "border-zinc-700 bg-zinc-800 hover:border-zinc-500"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        <button
          onClick={submitRequest}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-semibold"
        >
          Find Nearby Mechanics
        </button>

      </main>

    </div>
  );
}

export default RequestAssistance;