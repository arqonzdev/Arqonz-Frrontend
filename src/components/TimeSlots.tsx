"use client";

interface Props {
  selected: string;
  setSelected: (v: string) => void;
}

const slots = [
  "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
  "11:00 AM","11:30 AM","12:00 PM","12:30 PM"
];

export default function TimeSlots({ selected, setSelected }: Props) {
  return (
    <div className="space-y-2">
      {slots.map(time => (
        <button
          key={time}
          onClick={() => setSelected(time)}
          className={`
            w-full py-2 rounded-lg border 
            ${selected===time ? "bg-emerald-900 text-white" : "bg-white"}
          `}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
