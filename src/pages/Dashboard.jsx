import Navbar from "../component/Navbar";
import ServiceCard from "../component/ServiceCard";
import MechanicCard from "../component/MechanicCard";
import { Link } from "react-router-dom";

const mechanics = [
  {
    id: 1,
    name: "QuickFix Auto Care",
    rating: 4.8,
    distance: "1.2 km away",
    time: "Arrives in ~15 min"
  },
  {
    id: 2,
    name: "Sharma Auto Service",
    rating: 4.6,
    distance: "2.1 km away",
    time: "Arrives in ~20 min"
  },
  {
    id: 3,
    name: "RoadRescue Garage",
    rating: 4.7,
    distance: "2.8 km away",
    time: "Arrives in ~25 min"
  }
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0b0d0f]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-5">

          <div>
            <p className="text-zinc-500">Welcome back</p>
            <h1 className="text-3xl font-bold mt-1">
              Need vehicle assistance?
            </h1>
          </div>

          <Link
            to="/request"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold h-fit"
          >
            🚨 Request Assistance
          </Link>

        </div>

        <section className="mt-10">

          <h2 className="text-xl font-semibold mb-5">
            Quick Services
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <ServiceCard title="Battery" icon="Battery" />
            <ServiceCard title="Flat Tyre" icon="Tire" />
            <ServiceCard title="Breakdown" icon="Breakdown" />
            <ServiceCard title="Towing" icon="Towing" />

          </div>

        </section>

        <section className="mt-12">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-semibold">
              Nearby Mechanics
            </h2>

            <Link
              to="/mechanics"
              className="text-orange-500 text-sm"
            >
              View all
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {mechanics.map((mechanic) => (
              <MechanicCard
                key={mechanic.id}
                mechanic={mechanic}
              />
            ))}

          </div>

        </section>

        <section className="mt-10">

          <div className="h-[350px] bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden">

            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#777 1px, transparent 1px), linear-gradient(90deg, #777 1px, transparent 1px)",
                backgroundSize: "45px 45px"
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="bg-orange-500 rounded-full p-4">
                📍
              </div>

            </div>

            <div className="absolute top-8 left-8 bg-zinc-950 px-4 py-3 rounded-xl border border-zinc-700">
              📍 Your Location
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;