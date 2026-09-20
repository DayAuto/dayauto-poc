export type EventSource = "seed" | "google";
export type SlotType = "micro" | "focus" | null;

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  source: EventSource;
  slotType: SlotType;
}