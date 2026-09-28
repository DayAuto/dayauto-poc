"use client";

import { useMemo, useState } from "react";
import { Calendar, dateFnsLocalizer, type View } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ko } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

import type { CalendarEvent } from "@/lib/types";
import styles from "./calendar-view.module.css";

const locales = { ko };

const VIEWS: View[] = ["week"];

const INITIAL_DATE = new Date("2026-08-12T12:00:00+09:00");

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: Date) => startOfWeek(date, { locale: ko }),
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
  const [doneIds, setDoneIds] = useState<Set<string>>(new Set());
  const [calendarDate, setCalendarDate] = useState<Date>(INITIAL_DATE);
  
  const rbcEvents = useMemo(
    () => initialEvents.map(toRbcEvent),
    [initialEvents],
  );

  function handleSelectEvent(event: RbcEvent) {
    setDoneIds((prev) => {
      const next = new Set(prev);

      if (next.has(event.id)) {
        next.delete(event.id);
      } else {
        next.add(event.id);
      }

      return next;
    });
  }

  function handleReset() {
    setDoneIds(new Set());
  }

  function eventPropGetter(event: RbcEvent) {
    const { source, slotType } = event.resource;
    const classNames: string[] = [];

    if (source === "google") {
      classNames.push(styles.eventGoogle);
    } else if (slotType === "focus") {
      classNames.push(styles.eventFocus);
    } else if (slotType === "micro") {
      classNames.push(styles.eventMicro);
    }

    if (doneIds.has(event.id)) {
      classNames.push(styles.eventDone);
    }

    return {
      className: classNames.join(" "),
    };
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <button
          type="button"
          className={styles.resetButton}
          onClick={handleReset}
        >
          초기 상태로 리셋
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={rbcEvents}
        defaultView={VIEWS[0]}
        views={VIEWS}
        date={calendarDate}
        onNavigate={setCalendarDate}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventPropGetter}
        onSelectEvent={handleSelectEvent}
        culture="ko"
        style={{ height: "calc(100vh - 160px)" }}
      />

      <ul className={styles.legend}>
        <li>
          <span className={styles.legendDotFocus} />
          집중 학습 (focus)
        </li>
        <li>
          <span className={styles.legendDotMicro} />
          마이크로 학습 (micro)
        </li>
        <li>
          <span className={styles.legendDotGoogle} />
          외부 일정 (google)
        </li>
      </ul>
    </div>
  );
}