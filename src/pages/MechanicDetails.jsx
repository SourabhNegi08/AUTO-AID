import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Star, MapPin, Phone, Clock, CheckCircle } from "lucide-react";

function MechanicDetails() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0d0f]">

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">

        <Link
          to="/mechanics"
          className="text-zinc-500 hover:text-white"
        >
          ← Back to mechanics
        </Link>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 mt-6">

          <div className="flex flex-col md:flex-row justify-between gap-5">

            <div>

              <h1 className="text-3xl font-bold">
                QuickFix Auto Care
              </h1>

              <div className="flex gap-4 mt-3 text-sm">

                <span className="flex items-center gap-1 text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  4.8
                </span>

                <span className="text-zinc-500">
                  126 reviews
                </span>

                <span className="text-green-400">
                  Available
                </span>

              </div>

            </div>

            <div className="text-right">

              <p className="text-zinc-500 text-sm">
                Distance
              </p>

              <p className="font-semibold">
                1.2 km
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">

            <div className="bg-zinc-800 rounded-xl p-4">
              <MapPin size={20} className="text-orange-500" />
              <p className="text-zinc-500 text-sm mt-2">
                Location
              </p>
              <p className="mt-1">1.2 km away</p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-4">
              <Clock size={20} className="text-orange-500" />
              <p className="text-zinc-500 text-sm mt-2">
                Arrival
              </p>
              <p className="mt-1">~15 minutes</p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-4">
              <Phone size={20} className="text-orange-500" />
              <p className="text-zinc-500 text-sm mt-2">
                Contact
              </p>
              <p className="mt-1">Available</p>
            </div>

          </div>

          <h2 className="text-xl font-semibold mt-10">
            Services
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mt-4">

            {[
              "Battery Jumpstart",
              "Tyre Repair",
              "Engine Repair",
              "Towing"
            ].map((service) => (

              <div
                key={service}
                className="flex items-center gap-3 bg-zinc-800 p-4 rounded-xl"
              >
                <CheckCircle
                  size={18}
                  className="text-green-400"
                />

                {service}
              </div>

            ))}

          </div>

          <div className="mt-8 bg-zinc-800 rounded-xl p-5">

            <p className="text-zinc-500">
              Estimated charges
            </p>

            <p className="text-2xl font-bold mt-1">
              ₹300 – ₹800
            </p>

          </div>

          <button
            onClick={() => navigate("/request/123")}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-semibold"
          >
            🚨 Request Assistance
          </button>

        </div>

      </main>

    </div>
  );
}

export default MechanicDetails;