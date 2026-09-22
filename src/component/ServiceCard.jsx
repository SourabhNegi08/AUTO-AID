import {
  Battery,
  CircleGauge,
  Wrench,
  Truck,
} from "lucide-react";

const icons = {
  Battery,
  Tire: CircleGauge,
  Breakdown: Wrench,
  Towing: Truck,
};

function ServiceCard({ title, icon }) {
  const Icon = icons[icon];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-orange-500/50 hover:-translate-y-1 transition">

      <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4">
        <Icon size={24} className="text-orange-500" />
      </div>

      <h3 className="font-semibold">{title}</h3>

      <p className="text-sm text-zinc-500 mt-1"> Get roadside assistance </p>
    </div>
  );
}

export default ServiceCard;