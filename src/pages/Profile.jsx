import Navbar from "../component/Navbar";

function Profile() {

  return (
    <div className="min-h-screen bg-[#0b0d0f]">

      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 mt-8">

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold">
              SN
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Sourabh Negi
              </h2>

              <p className="text-zinc-500">
                sourabh@example.com
              </p>
            </div>

          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">

            <div className="bg-zinc-800 rounded-xl p-4">
              <p className="text-zinc-500 text-sm">
                Phone
              </p>
              <p className="mt-1">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-4">
              <p className="text-zinc-500 text-sm">
                Email
              </p>
              <p className="mt-1">
                sourabh@example.com
              </p>
            </div>

          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 mt-5">

          <div className="flex justify-between">

            <h2 className="text-xl font-semibold">
              My Vehicles
            </h2>

            <button className="text-orange-500">
              + Add Vehicle
            </button>

          </div>

          <div className="bg-zinc-800 rounded-xl p-5 mt-5">

            <p className="font-semibold">
              🚗 Hyundai i20
            </p>

            <p className="text-zinc-500 text-sm mt-1">
              Petrol • DL XX XXXX
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Profile;