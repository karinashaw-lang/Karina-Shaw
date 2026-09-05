export default function LiveBadge() {
  return (
    <span className="flex items-center gap-1 rounded bg-red-600 px-1.5 py-0.5 text-xs font-medium text-white">
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      LIVE
    </span>
  );
}
