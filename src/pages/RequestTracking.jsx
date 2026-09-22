import Navbar from "../component/Navbar";
import { Check, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

function RequestTracking() {

  const steps = [
    "Request Sent",
    "Provider Found",
    "Provider Accepted",
    "Mechanic Arriving",
    "Completed"
  ];

  return (
    <div className="min-h-screen bg-[#0b0d0f]">

      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12">

        <div className="text-center">

          <p className="text-orange-500 text-sm">
            REQUEST #123
          </p>

          <h1 className="text-3xl font-bold mt-2">
            Assistance in progress
          </h1>

          <p className="text-zinc-500 mt-2">
            Your mechanic is on the way.
          </p>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 mt-10">

          <div className="space-y-6">

            {steps.map((step, index) => (

              <div
                key={step}
                className="flex items-center gap-4"
              >

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index < 3
                      ? "bg-orange-500"
                      : "bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {index < 3 ? <Check size={18} /> : index + 1}
                </div>

                <div>
                  <p className="font-medium">
                    {step}
                  </p>

                  {index === 2 && (
                    <p className="text-sm text-green-400">
                      Completed
                    </p>
                  )}
                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 mt-5">

          <h2 className="text-xl font-semibold">
            Your Mechanic
          </h2>

          <div className="flex justify-between items-center mt-5">

            <div>
              <p className="font-semibold">
                QuickFix Auto Care
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                ⭐ 4.8 • 1.2 km away
              </p>
            </div>

            <div className="text-green-400">
              ETA 15 min
            </div>

          </div>

          <div className="flex gap-3 mt-6">

            <button className="flex-1 bg-zinc-800 py-3 rounded-xl flex justify-center gap-2">
              <Phone size={18} />
              Call
            </button>

            <button className="flex-1 bg-zinc-800 py-3 rounded-xl flex justify-center gap-2">
              <MessageCircle size={18} />
              Message
            </button>

          </div>

        </div>

        <Link
          to="/review/123"
          className="block text-center mt-6 text-orange-500"
        >
          Complete service & leave a review →
        </Link>

      </main>

    </div>
  );
}

export default RequestTracking;