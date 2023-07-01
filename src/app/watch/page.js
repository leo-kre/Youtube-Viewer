"use client";

import { useSearchParams } from "next/navigation";

export default function Watch() {
      const searchParams = useSearchParams();

      const search = searchParams.get("v");

      return (
            <main>
                  <h1>{search}</h1>
            </main>
      );
}
