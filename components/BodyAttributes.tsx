"use client";

import { useEffect } from "react";

export function BodyAttributes({
  bodyId,
  bodyClass,
}: {
  bodyId: string;
  bodyClass?: string;
}) {
  useEffect(() => {
    const previousId = document.body.id;
    const previousClass = document.body.className;

    document.body.id = bodyId;
    document.body.className = bodyClass ?? "";

    return () => {
      document.body.id = previousId;
      document.body.className = previousClass;
    };
  }, [bodyId, bodyClass]);

  return null;
}
