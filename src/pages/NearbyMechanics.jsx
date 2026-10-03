import Navbar from "../component/Navbar";
import MechanicCard from "../component/MechanicCard";

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
  },
  {
    id: 4,
    name: "City Motors",
    rating: 4.5,
    distance: "3.4 km away",
    time: "Arrives in ~30 min"
  }
];

function NearbyMechanics() {
  return (
    <div className="min-h-screen bg-[#0b0d0f]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold">
          Nearby Mechanics
        </h1>

        <p className="text-zinc-500 mt-2">
          Mechanics available near your location
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <div className="space-y-4">

            {mechanics.map((mechanic) => (
              <MechanicCard
                key={mechanic.id}
                mechanic={mechanic}
              />
            ))}

          </div>

          <div className="h-162.5 bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden lg:sticky lg:top-24">

            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#777 1px, transparent 1px), linear-gradient(90deg, #777 1px, transparent 1px)",
                backgroundSize: "45px 45px"
              }}
            />

            <div className="absolute top-1/2 left-1/2 text-3xl">
              📍
            </div>

            <div className="absolute top-20 left-24 text-2xl">
              🔧
            </div>

            <div className="absolute bottom-32 right-24 text-2xl">
              🔧
            </div>

            <div className="absolute bottom-6 left-6 bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3">
              📍 Your current location
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default NearbyMechanics;