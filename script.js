/* KAHANI TRAVEL & TOURS: site behaviour */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const wa = (text) => `https://wa.me/${KAHANI.whatsapp}?text=${encodeURIComponent(text)}`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- WhatsApp links ---------- */
  function bindWa(root = document) {
    $$("[data-wa]", root).forEach((a) => {
      a.href = wa(a.dataset.wa);
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  /* ---------- Social links ---------- */
  $$("[data-social]").forEach((box) => {
    box.innerHTML = KAHANI.social
      .map((s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}"><svg class="ic"><use href="#${s.icon}"/></svg></a>`)
      .join("");
  });

  /* ---------- Hero slideshow ---------- */
  const slidesBox = $("#heroSlides"), dotsBox = $("#heroDots"), placeEl = $("#slidePlace");
  HERO_SLIDES.forEach((s, i) => {
    const d = document.createElement("div");
    d.className = "slide" + (i === 0 ? " on" : "");
    d.style.backgroundImage = `url('${img(s.src, 1920)}')`;
    slidesBox.appendChild(d);
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", "Show " + s.place);
    if (i === 0) b.className = "on";
    b.onclick = () => go(i, true);
    dotsBox.appendChild(b);
  });
  placeEl.innerHTML = `<svg class="ic"><use href="#i-pin"/></svg>${esc(HERO_SLIDES[0].place)}`;
  let cur = 0, timer;
  function go(i, manual) {
    const slides = slidesBox.children, dots = dotsBox.children;
    slides[cur].classList.remove("on"); dots[cur].classList.remove("on");
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add("on"); dots[cur].classList.add("on");
    placeEl.innerHTML = `<svg class="ic"><use href="#i-pin"/></svg>${esc(HERO_SLIDES[cur].place)}`;
    if (manual) restart();
  }
  function restart() { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6500); }
  restart();

  /* ---------- Marquee ---------- */
  const names = PACKAGES.map((p) => p.name).concat(["Umrah"]);
  const row = names.map((n) => `<span>${esc(n)}</span><i>✦</i>`).join("");
  $("#marquee").innerHTML = row + row;

  /* ---------- Services ---------- */
  $("#svcGrid").innerHTML = SERVICES.map((s, i) => `
    <article class="svc reveal" style="--d:${(i % 4) * 70}ms">
      <div class="svc-top">
        <span class="svc-ic"><svg class="ic"><use href="#${s.icon}"/></svg></span>
        <span class="svc-num">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
      <a href="${s.link || "#contact"}" class="more" ${s.link ? "" : `data-enquire="${esc(s.title)}"`}>${s.link ? "Discover" : "Enquire"} <svg class="ic"><use href="#i-arrow"/></svg></a>
    </article>`).join("") + `
    <article class="svc svc-cta reveal" style="--d:210ms">
      <p class="eyebrow light">Not sure where to start?</p>
      <h3>Talk to a travel expert today.</h3>
      <a href="#" class="btn btn-wa" data-wa="Hello Kahani Travel, I need some travel advice."><svg class="ic"><use href="#i-wa"/></svg>WhatsApp Us</a>
      <a href="tel:+919946500546" class="svc-call">or call +91 99465 00546</a>
    </article>`;

  /* ---------- Packages ---------- */
  const grid = $("#pkgGrid");
  function renderPackages(cat) {
    grid.innerHTML = PACKAGES.filter((p) => p.category === cat).map((p, i) => `
      <article class="pkg" style="--d:${i * 70}ms" tabindex="0" role="button" aria-label="${esc(p.name)} tour package, ${esc(p.duration)}. View itinerary" data-id="${p.id}">
        <img class="pkg-img" src="${img(p.image, 700)}" alt="${esc(p.name)}: ${esc(p.route)}" loading="lazy" width="700" height="875">
        <span class="pkg-dur">${esc(p.duration)}</span>
        <div class="pkg-body">
          <p class="pkg-route">${esc(p.route)}</p>
          <h3>${esc(p.name)}</h3>
          <p class="pkg-tag">${esc(p.tagline)}</p>
          <ul>${p.highlights.slice(0, 3).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
          <span class="view">View journey <svg class="ic"><use href="#i-arrow"/></svg></span>
        </div>
      </article>`).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => $$(".pkg", grid).forEach((el) => el.classList.add("in"))));
  }
  function setTab(cat) {
    $$(".tab").forEach((t) => {
      const on = t.dataset.tab === cat;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
    });
    renderPackages(cat);
  }
  $$(".tab").forEach((t) => t.addEventListener("click", () => setTab(t.dataset.tab)));
  $$("[data-tab-link]").forEach((a) => a.addEventListener("click", () => {
    setTab(a.dataset.tabLink);
    if (a.dataset.open) setTimeout(() => openPkg(a.dataset.open), 600);
  }));
  grid.addEventListener("click", (e) => { const c = e.target.closest(".pkg"); if (c) openPkg(c.dataset.id); });
  grid.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { const c = e.target.closest(".pkg"); if (c) { e.preventDefault(); openPkg(c.dataset.id); } } });
  setTab("international");

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  let lastFocus, currentPkg;
  function openPkg(id) {
    const p = PACKAGES.find((x) => x.id === id);
    if (!p) return;
    currentPkg = p;
    lastFocus = document.activeElement;
    $("#mHero").style.backgroundImage = `linear-gradient(180deg,rgba(20,27,51,.05),rgba(20,27,51,.88)),url('${img(p.image, 1400)}')`;
    $("#mBadge").textContent = p.duration;
    $("#mTitle").textContent = p.name;
    $("#mRoute").textContent = p.route;
    $("#mItin").innerHTML = p.itinerary.map((d, i) => `<li><span class="day">Day ${i + 1}</span><div><b>${esc(d[0])}</b><p>${esc(d[1])}</p></div></li>`).join("");
    $("#mHigh").innerHTML = p.highlights.map((h) => `<li>${esc(h)}</li>`).join("");
    $("#mInc").innerHTML = p.includes.map((h) => `<li>${esc(h)}</li>`).join("");
    const m = $("#mWa");
    m.href = wa(`Hello Kahani Travel, I'm interested in the ${p.name} package (${p.duration}). Please share the details and price.`);
    m.target = "_blank"; m.rel = "noopener";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock");
    $(".modal-card", modal).scrollTop = 0;
    $(".modal-x", modal).focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lock");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });
  $("#mEnquire").addEventListener("click", () => {
    closeModal();
    prefill("Holiday package", `I'm interested in the ${currentPkg.name} package (${currentPkg.duration}). Please share the details and price.`);
  });

  /* ---------- Dropdowns ---------- */
  const opt = (list) => list.map((n) => `<option>${esc(n)}</option>`).join("");
  const groups = { international: "International", india: "India", kerala: "Kerala" };
  $("#quickDest").innerHTML = `<option value="" disabled selected>Where to?</option>` +
    Object.entries(groups).map(([k, label]) => `<optgroup label="${label}">${opt(PACKAGES.filter((p) => p.category === k).map((p) => p.name))}</optgroup>`).join("") +
    `<optgroup label="More">${opt(EXTRA_DESTINATIONS)}</optgroup>`;
  const serviceSel = $("#serviceSelect");
  serviceSel.innerHTML = opt(["Holiday package", ...SERVICES.map((s) => s.title), "Something else"]);

  /* ---------- Prefill the contact form & scroll to it ---------- */
  function prefill(service, message) {
    if (service) {
      const match = [...serviceSel.options].find((o) => o.text === service);
      if (match) serviceSel.value = match.text;
    }
    if (message) $("#cMessage").value = message;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $("#contactForm [name=name]").focus({ preventScroll: true }), 700);
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-enquire]");
    if (!a) return;
    e.preventDefault();
    prefill(a.dataset.enquire, `Hello, I'd like to know more about ${a.dataset.enquire}.`);
  });

  $("#quickForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    let month = "Flexible";
    if (f.get("month")) {
      const [y, m] = f.get("month").split("-");
      month = new Date(y, m - 1).toLocaleString("en-IN", { month: "long", year: "numeric" });
    }
    prefill("Holiday package", `I'd like a quote.\nDestination: ${f.get("dest")}\nTravel month: ${month}\nTravellers: ${f.get("pax")}`);
  });

  /* ---------- Contact form → email (FormSubmit) ---------- */
  const form = $("#contactForm"), status = $("#formStatus"), btn = $("#cSubmit");
  const toast = $("#toast");
  const showToast = (msg) => { toast.textContent = msg; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 5000); };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status";
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const f = new FormData(form);
    if (f.get("_honey")) return; // spam bot
    const data = {
      name: f.get("name"),
      phone: f.get("phone"),
      email: f.get("email") || "Not given",
      service: f.get("service"),
      message: f.get("message") || "-",
      _subject: `New website enquiry: ${f.get("service")} (${f.get("name")})`,
      _template: "table",
      _captcha: "false"
    };
    if (f.get("email")) data._replyto = f.get("email");
    btn.disabled = true;
    btn.querySelector("span").textContent = "Sending…";
    try {
      const res = await fetch(KAHANI.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || String(out.success) === "false") throw new Error(out.message || "Send failed");
      form.reset();
      status.textContent = "Thank you! Your enquiry has been sent. We'll contact you shortly.";
      status.classList.add("ok");
      showToast("Enquiry sent. Thank you!");
    } catch (err) {
      const body = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nInterested in: ${data.service}\n\n${data.message}`;
      const mailto = `mailto:${KAHANI.email}?subject=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(body)}`;
      status.innerHTML = `Sorry, we couldn't send it automatically. <a href="${mailto}">Email it to us</a> or <a href="${wa("Hello Kahani Travel!\n" + body)}" target="_blank" rel="noopener">send on WhatsApp</a>.`;
      status.classList.add("err");
    } finally {
      btn.disabled = false;
      btn.querySelector("span").textContent = "Send Enquiry";
    }
  });

  /* ---------- Header, menu, scroll ---------- */
  const header = $("#header"), burger = $("#burger"), nav = $("#nav");
  const onScroll = () => {
    header.classList.toggle("scrolled", scrollY > 30);
    document.body.classList.toggle("past-hero", scrollY > innerHeight * 0.6);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    header.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("lock", open);
  };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  $$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  addEventListener("resize", () => { if (innerWidth > 1080 && nav.classList.contains("open")) setMenu(false); });

  // active nav link
  const spy = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) $$(".nav > a").forEach((a) => a.classList.toggle("current", a.getAttribute("href") === "#" + en.target.id && !a.dataset.tabLink));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["about", "services", "attestation", "contact"].forEach((id) => spy.observe(document.getElementById(id)));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.1 });
  $$(".reveal").forEach((el) => io.observe(el));

  bindWa();
  $("#year").textContent = new Date().getFullYear();
})();
