import { FC } from "react";
import { useFormattedTimestamp } from "./useFormattedTimestamp";

export interface TimestampProps {
  date: string;
}

export const Timestamp: FC<TimestampProps> = ({ date }) => {
  const humanReadableTime = useFormattedTimestamp(date);
  return <time dateTime={date}>{humanReadableTime}</time>;
};
