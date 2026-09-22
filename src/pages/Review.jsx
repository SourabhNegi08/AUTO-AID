import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Star } from "lucide-react";

function Review() {

  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0d0f]">

      <Navbar />

      <main className="max-w-xl mx-auto px-6 py-16">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">

          <div className="text-5xl">
            ✓
          </div>

          <h1 className="text-2xl font-bold mt-5">
            Service Completed
          </h1>

          <p className="text-zinc-500 mt-2">
            How was your experience?
          </p>

          <div className="flex justify-center gap-3 mt-8">

            {[1, 2, 3, 4, 5].map((star) => (

              <button
                key={star}
                onClick={() => setRating(star)}
              >
                <Star
                  size={34}
                  className={
                    star <= rating
                      ? "text-orange-500 fill-orange-500"
                      : "text-zinc-600"
                  }
                />
              </button>

            ))}

          </div>

          <textarea
            placeholder="Write your review..."
            className="w-full mt-8 h-32 bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none focus:border-orange-500 resize-none"
          />

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full mt-5 bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold"
          >
            Submit Review
          </button>

        </div>

      </main>

    </div>
  );
}

export default Review;