import { useEffect, useState } from "react";

export function useFakeProgress() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading && progress < 100) {
      const t = setTimeout(() => setProgress(p => p + 2), 35); // ← mais lento!
      return () => clearTimeout(t);
    }
    if (progress >= 100) {
      setTimeout(() => setLoading(false), 600); // pode aumentar para dar "respiro"
    }
  }, [progress, loading]);

  return { progress, loading };
}
