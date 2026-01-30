import { client } from "@/lib/sanityClient";

export const fetchSanityData = async <T = unknown>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T> => {
  try {
    if (typeof window === "undefined") {
      return await client.fetch<T>(query, params);
    }

    const response = await fetch("/api/sanity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        params,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("❌ [fetchSanityData] Error:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Failed to fetch Sanity data: ${String(error)}`);
  }
};