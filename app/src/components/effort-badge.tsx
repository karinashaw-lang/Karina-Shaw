export default function EffortBadge({
  hours,
  reshoots,
  minutesCut,
}: {
  hours: number | null;
  reshoots: number | null;
  minutesCut: number | null;
}) {
  const parts: string[] = [];
  if (hours !== null) parts.push(`${hours} hour${hours === 1 ? "" : "s"} to make`);
  if (reshoots !== null) parts.push(`${reshoots} reshoot${reshoots === 1 ? "" : "s"}`);
  if (minutesCut !== null) parts.push(`${minutesCut} min cut`);

  if (parts.length === 0) return null;

  return (
    <p className="mt-2 text-xs text-zinc-500">
      {parts.join(" · ")}
    </p>
  );
}
