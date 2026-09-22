import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0b0d0f] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <Link to="/" className="block text-center text-3xl font-bold mb-10">
          Auto<span className="text-orange-500">Aid</span>
        </Link>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h1 className="text-2xl font-bold">
            Create your account
          </h1>

          <p className="text-zinc-500 mt-2">
            Start using AutoAid today
          </p>

          <form onSubmit={handleRegister} className="mt-7 space-y-4">

            <input
              required
              placeholder="Full Name"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

            <input
              required
              type="email"
              placeholder="Email"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

            <input
              required
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

            <input
              required
              type="password"
              placeholder="Password"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

            <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold">
              Create Account
            </button>

          </form>

          <p className="text-center text-zinc-500 text-sm mt-6">
            Already registered?{" "}
            <Link to="/login" className="text-orange-500">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;