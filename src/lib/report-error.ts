/** Lightweight client error reporter for root error boundaries. */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[CARS]", error, context);
}
