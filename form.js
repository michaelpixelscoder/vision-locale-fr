const CONVEX_HTTP_URL = "https://colorful-condor-335.convex.site";

async function postToConvex(path, payload) {
  if (!CONVEX_HTTP_URL) return;

  await fetch(`${CONVEX_HTTP_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  });
}

window.submitGuideLead = async function submitGuideLead(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();
  const businessType = String(formData.get("business_type") || "").trim();

  if (!email) {
    form.reportValidity();
    return false;
  }

  trackVisionLocale("CompleteRegistration", { content_name: "guide_2026" });

  try {
    await postToConvex("/lead", {
      email,
      businessType,
      source: "guide_form",
      page: window.location.href,
    });
  } catch (error) {
    console.warn("Lead capture failed", error);
  }

  const params = new URLSearchParams({ email });
  window.location.href = `merci.html?${params.toString()}`;
  return false;
};

window.trackConvexEvent = function trackConvexEvent(name, contentName) {
  postToConvex("/event", {
    name,
    contentName,
    page: window.location.href,
  }).catch(() => {});
};
