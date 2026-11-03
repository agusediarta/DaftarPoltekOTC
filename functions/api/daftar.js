// Proxy: meneruskan data form ke Google Apps Script (URL GAS tidak terlihat oleh pengunjung)
const GAS_URL = "https://script.google.com/macros/s/AKfycbxaybbQF7WDtxHvjJOAR2p9Or6ZbM-cM8yl6qiDjdVxzzFEDweqCG54uyhl-Bj3CtkBwA/exec";

export async function onRequestPost(context) {
  const body = await context.request.text();
  const res = await fetch(GAS_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body,
  });
  return new Response(await res.text(), {
    headers: { "Content-Type": "application/json" },
  });
}
