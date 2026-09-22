import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
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
            Welcome back
          </h1>

          <p className="text-zinc-500 mt-2">
            Login to access AutoAid
          </p>

          <form onSubmit={handleLogin} className="mt-7 space-y-5">

            <div>
              <label className="text-sm text-zinc-400">
                Email
              </label>

              <input
                type="email"
                required
                className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">
                Password
              </label>

              <input
                type="password"
                required
                className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold"
            >
              Login
            </button>

          </form>

          <p className="text-center text-zinc-500 text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-orange-500">
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;