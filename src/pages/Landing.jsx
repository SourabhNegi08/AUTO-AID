import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ShieldCheck, Wrench } from "lucide-react";

function Landing() {
  return (
    <div className="min-h-screen bg-[#0b0d0f]">

      {/* Navbar */}

      <nav className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <Link to="/" className="text-2xl font-bold">
            Auto<span className="text-orange-500">Aid</span>
          </Link>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 text-zinc-300 hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2.5 bg-orange-500 rounded-xl font-medium hover:bg-orange-600"
            >
              Register
            </Link>
          </div>

        </div>
      </nav>

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm mb-6">
            <MapPin size={16} />
            Roadside assistance near you
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Roadside help,
            <br />
            <span className="text-orange-500">whenever you need.</span>
          </h1>

          <p className="text-zinc-400 text-lg mt-6 max-w-xl">
            Find nearby mechanics, garages and towing services quickly
            when your vehicle needs assistance.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              to="/request"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3.5 rounded-xl font-semibold"
            >
              Find a Mechanic
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/register"
              className="border border-zinc-700 hover:border-zinc-500 px-6 py-3.5 rounded-xl"
            >
              Get Started
            </Link>

          </div>

        </div>

        {/* Hero visual */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <div className="h-[420px] rounded-2xl bg-zinc-800 relative overflow-hidden">

            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#777 1px, transparent 1px), linear-gradient(90deg, #777 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="bg-orange-500 p-4 rounded-full shadow-lg shadow-orange-500/30">
                <MapPin size={28} />
              </div>

            </div>

            <div className="absolute top-20 left-20 bg-zinc-900 border border-zinc-700 p-3 rounded-xl">
              🔧
            </div>

            <div className="absolute bottom-24 right-20 bg-zinc-900 border border-zinc-700 p-3 rounded-xl">
              🔧
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/90 backdrop-blur border border-zinc-700 p-4 rounded-xl">
              <p className="text-sm text-zinc-400">
                Nearby mechanic
              </p>

              <div className="flex justify-between mt-1">
                <strong>QuickFix Auto Care</strong>
                <span className="text-green-400">1.2 km</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">

          <p className="text-orange-500 font-medium">
            WHY AUTOAID
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Help when you need it
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: MapPin,
              title: "Nearby Providers",
              text: "Find mechanics and roadside service providers near your location."
            },
            {
              icon: Wrench,
              title: "Quick Assistance",
              text: "Send an assistance request without calling multiple mechanics."
            },
            {
              icon: ShieldCheck,
              title: "Trusted Service",
              text: "View provider information, ratings and reviews before requesting help."
            }
          ].map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7"
              >
                <Icon className="text-orange-500" size={30} />

                <h3 className="text-xl font-semibold mt-5">
                  {item.title}
                </h3>

                <p className="text-zinc-500 mt-3">
                  {item.text}
                </p>
              </div>
            );

          })}

        </div>

      </section>

    </div>
  );
}

export default Landing;