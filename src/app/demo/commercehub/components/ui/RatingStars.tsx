import { StarIcon } from "@heroicons/react/24/solid";

export function RatingStars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  const whole = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={`${rating}-${index}`}
          className={`${size} ${index < whole ? "text-amber-400" : "text-slate-300 dark:text-slate-600"}`}
        />
      ))}
      <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">{rating.toFixed(1)}</span>
    </div>
  );
}
