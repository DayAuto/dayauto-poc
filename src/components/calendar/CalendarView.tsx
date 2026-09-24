"use client";

import { useMemo } from "react";
import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ko } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

import type { CalendarEvent } from "@/lib/types";
import styles from "./calendar-view.module.css";

const locales = { ko };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: ko }),
  getDay,
  locales,
});

type RbcEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource: CalendarEvent;
};

function toRbcEvent(event: CalendarEvent): RbcEvent {
  return {
    id: event.id,
    title: event.title,
    start: new Date(event.start),
    end: new Date(event.end),
    resource: event,
  };
}

type CalendarViewProps = {
  initialEvents: CalendarEvent[];
};

export default function CalendarView({ initialEvents }: CalendarViewProps) {
  const rbcEvents = useMemo(
    () => initialEvents.map(toRbcEvent),
    [initialEvents]
  );

  return (
    <div className={styles.wrapper}>
      <Calendar
        localizer={localizer}
        events={rbcEvents}
        defaultView={"week" as View}
        defaultDate={new Date("2026-08-12T12:00:00+09:00")}
        views={["week"]}
        startAccessor="start"
        endAccessor="end"
        culture="ko"
        style={{ height: "calc(100vh - 120px)" }}
/>
    </div>
    );}