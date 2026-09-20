export type EventSource = "seed" | "google";
export type SlotType = "micro" | "focus" | null;

export type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  source: EventSource;
  slotType: SlotType;
};