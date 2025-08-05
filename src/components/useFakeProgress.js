import { useEffect, useRef, useState } from "react";

export function useFakeProgress() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const completionTimeoutId = useRef();

  useEffect(() => {
    let tickTimeoutId;

    if (loading && progress < 100) {
      tickTimeoutId = setTimeout(() => setProgress(p => p + 2), 35); // ← mais lento!
    }
    if (progress >= 100) {
      completionTimeoutId.current = setTimeout(
        () => setLoading(false),
        600,
      ); // pode aumentar para dar "respiro"
    }

    return () => {
      clearTimeout(tickTimeoutId);
      clearTimeout(completionTimeoutId.current);
    };
  }, [progress, loading]);

  return { progress, loading };
}
