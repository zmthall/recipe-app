import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const { url } = getQuery(event);

  if (!url || typeof url !== "string") {
    return { error: "URL is required" };
  }

  const html = await $fetch<string>(url);

  const $ = cheerio.load(html);

  const jsonLdRaw = $('script[type="application/ld+json"]').first().html();

  if (!jsonLdRaw) {
    return { error: "JSON-LD script not found" };
  }

  let jsonLd;
  try {
    jsonLd = JSON.parse(jsonLdRaw);
  } catch (err) {
    return {
      error: "Failed to parse JSON-LD",
      details: (err as Error).message,
    };
  }

  return jsonLd[0];
});
