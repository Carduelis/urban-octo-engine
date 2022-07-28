import { useEffect, useState } from "react";

const timestampFormatter = (date: string) => {
  const dateInstance = new Date(date);
  try {
    return new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    }).format(dateInstance);
  } catch {
    return dateInstance.toDateString();
  }
};

export const useFormattedTimestamp = (date: string) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return timestampFormatter(date);
  }
  return null;
};
