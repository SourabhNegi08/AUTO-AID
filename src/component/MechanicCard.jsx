import { Link } from "react-router-dom";
import { MapPin, Star, Clock } from "lucide-react";

function MechanicCard({ mechanic }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

      <div className="flex justify-between">

        <div>
          <h3 className="font-semibold text-lg">
            {mechanic.name}
          </h3>

          <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
            <Star size={15} fill="currentColor" />
            {mechanic.rating}
          </div>
        </div>

        <span className="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full h-fit">
          Available
        </span>

      </div>

      <div className="mt-4 space-y-2 text-sm text-zinc-400">

        <p className="flex items-center gap-2">
          <MapPin size={15} />
          {mechanic.distance}
        </p>

        <p className="flex items-center gap-2">
          <Clock size={15} />
          {mechanic.time}
        </p>

      </div>

      <Link
        to={`/mechanic/${mechanic.id}`}
        className="block text-center mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl font-medium transition"
      >
        View Details
      </Link>

    </div>
  );
}

export default MechanicCard;