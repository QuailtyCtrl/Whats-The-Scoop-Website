import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import flavorStrawberry from "@/assets/flavor-strawberry.jpg";
import flavorMint from "@/assets/flavor-mint.jpg";
import flavorCaramel from "@/assets/flavor-caramel.jpg";
import heroCone from "@/assets/wts-hero.png";
import wtsLogo from "@/assets/wts-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "What's The Scoop? — Handcrafted Ice Cream in Innisfil, ON" },
      {
        name: "description",
        content:
          "Handcrafted ice cream, non-dairy scoops and frozen treats on Innisfil Beach Road. Open daily through the summer season.",
      },
      { property: "og:title", content: "What's The Scoop? — Innisfil's favourite ice cream" },
      {
        property: "og:description",
        content: "Handcrafted ice cream, non-dairy scoops and frozen treats in Innisfil, Ontario.",
      },
      { property: "og:image", content: heroCone },
    ],
  }),
  component: Index,
});

const flavors = [
  {
    name: "Strawberries 'N' Cream",
    note: "Fresh local berries swirled with sweet cream",
    img: flavorStrawberry,
  },
  {
    name: "Mint Chocolate Chip",
    note: "Cool peppermint with dark cocoa flakes",
    img: flavorMint,
    tint: "bg-mint/15",
  },
  {
    name: "Salty Caramel",
    note: "Sea salt meets buttery golden caramel",
    img: flavorCaramel,
  },
];

const categories = [
  {
    eyebrow: "01",
    title: "Flavours",
    body: "50+ flavours of small-batch ice cream made in Canada — from classics like Vanilla and Chocolate to fan favourites like Moon Mist and Tiger Tail.",
  },
  {
    eyebrow: "02",
    title: "Non-Dairy",
    body: "Sorbets and sherbets so everyone gets a scoop — including Blue Raspberry, Rainbow, and Watermelon.",
  },
  {
    eyebrow: "03",
    title: "Frozen Treats",
    body: "Floats, milkshakes, ice cream sandwiches, and cold drinks to round out your visit.",
  },
];

const menuFlavors = [
  { name: "Algonquin Canoe", emoji: "🛶", tint: "bg-mint/15" },
  { name: "Banana Fudge", emoji: "🍌", tint: "bg-cream" },
  { name: "Big Foot", emoji: "🦶", tint: "bg-cocoa/10" },
  { name: "Birthday Cake", emoji: "🎂", tint: "bg-strawberry/15" },
  { name: "Black Raspberry Cheesecake", emoji: "🫐", tint: "bg-strawberry/15" },
  { name: "Black Sweet Cherry", emoji: "🍒", tint: "bg-strawberry/15" },
  { name: "Blue Bubblegum", emoji: "🫧", tint: "bg-mint/15" },
  { name: "Blueberry Bliss", emoji: "🫐", tint: "bg-mint/15" },
  { name: "Butterscotch Ripple", emoji: "🍯", tint: "bg-cream" },
  { name: "Cappuccino No Sugar Added", emoji: "☕", tint: "bg-cocoa/10" },
  { name: "Captain Cyclone", emoji: "🌀", tint: "bg-mint/15" },
  { name: "Chocolate", emoji: "🍫", tint: "bg-cocoa/10" },
  { name: "Chocolate Chip Cookie Dough", emoji: "🍪", tint: "bg-cream" },
  { name: "Chocolate Fudge Brownie", emoji: "🍫", tint: "bg-cocoa/10" },
  { name: "Chocolate Salty Caramel", emoji: "🍬", tint: "bg-cocoa/10" },
  { name: "Cinnamon Bunz", emoji: "🥐", tint: "bg-cream" },
  { name: "Coconut", emoji: "🥥", tint: "bg-cream" },
  { name: "Cookies 'N' Cream", emoji: "🍪", tint: "bg-cream" },
  { name: "Cotton Candy", emoji: "🍭", tint: "bg-strawberry/15" },
  { name: "Dutch Apple Pie", emoji: "🍎", tint: "bg-cream" },
  { name: "Espresso Flake", emoji: "☕", tint: "bg-cocoa/10" },
  { name: "French Vanilla Light", emoji: "🍦", tint: "bg-cream" },
  { name: "French Vanilla with Bean", emoji: "🍦", tint: "bg-cream" },
  { name: "Grand Slam", emoji: "⚾", tint: "bg-strawberry/15" },
  { name: "Grapenut", emoji: "🌾", tint: "bg-cream" },
  { name: "Lavender Lemonade", emoji: "💜", tint: "bg-mint/15" },
  { name: "Lemon Chiffon", emoji: "🍋", tint: "bg-cream" },
  { name: "Mango", emoji: "🥭", tint: "bg-cream" },
  { name: "Mango Frozen Dessert", emoji: "🥭", tint: "bg-mint/15" },
  { name: "Maple Walnut", emoji: "🍁", tint: "bg-cream" },
  { name: "Milk Chocolate Caramel Rollover", emoji: "🍫", tint: "bg-cocoa/10" },
  { name: "Mint Chocolate Chip", emoji: "🌿", img: flavorMint, tint: "bg-mint/15" },
  { name: "Monster Cookie", emoji: "🍪", tint: "bg-cream" },
  { name: "Moon Mist", emoji: "🌙", tint: "bg-mint/15" },
  { name: "Peanut Butter Chocolate", emoji: "🥜", tint: "bg-cocoa/10" },
  { name: "Peanut Butter Pretzel", emoji: "🥨", tint: "bg-cream" },
  { name: "Pistachio Almond", emoji: "🌰", tint: "bg-mint/15" },
  { name: "Pralines 'N' Cream", emoji: "🍮", tint: "bg-cream" },
  { name: "Reese's Pieces", emoji: "🍬", tint: "bg-cream" },
  { name: "Rocky Road", emoji: "🏔️", tint: "bg-cocoa/10" },
  { name: "Rum Runnin' Raisin", emoji: "🍇", tint: "bg-cocoa/10" },
  { name: "S'more G'lore", emoji: "🔥", tint: "bg-cocoa/10" },
  { name: "Salty Caramel", emoji: "🍯", img: flavorCaramel },
  { name: "Strawberries 'N' Cream", emoji: "🍓", img: flavorStrawberry },
  { name: "Strawberries Frozen Dessert", emoji: "🍓", tint: "bg-strawberry/15" },
  { name: "Strawberries Matcha", emoji: "🍵", tint: "bg-mint/15" },
  { name: "Tiger Tail", emoji: "🐯", tint: "bg-cream" },
  { name: "True North Cherry Cheesecake", emoji: "🍒", tint: "bg-strawberry/15" },
  { name: "Vanilla", emoji: "🍦", tint: "bg-cream" },
];

const menuNonDairy = [
  { name: "Blue Raspberry Sorbet", emoji: "🫐", tint: "bg-mint/15" },
  { name: "Lemon Lime Sorbet", emoji: "🍋", tint: "bg-cream" },
  { name: "Lime Sherbet", emoji: "🍈", tint: "bg-mint/15" },
  { name: "Orange Sherbet", emoji: "🍊", tint: "bg-cream" },
  { name: "Peach Sorbet", emoji: "🍑", tint: "bg-cream" },
  { name: "Rainbow Sherbet", emoji: "🌈", tint: "bg-strawberry/15" },
  { name: "Raspberry Sherbet", emoji: "🫐", tint: "bg-strawberry/15" },
  { name: "Strawberry Sorbet", emoji: "🍓", tint: "bg-strawberry/15" },
  { name: "Vanilla", emoji: "🍦", tint: "bg-cream" },
  { name: "Watermelon Sherbet", emoji: "🍉", tint: "bg-mint/15" },
];

const menuFrozenTreats = [
  { name: "Floats — Any Flavour + Pop", emoji: "🥤", tint: "bg-cream" },
  { name: "Ice Cream Sandwiches — Any Flavour + Cookie", emoji: "🍪", tint: "bg-cocoa/10" },
  { name: "Milkshakes — 2% or Oat Milk", emoji: "🥛", tint: "bg-cream" },
  { name: "Water", emoji: "💧", tint: "bg-mint/15" },
  { name: "Coke / Diet Coke", emoji: "🥤", tint: "bg-cocoa/10" },
  { name: "Ginger Ale", emoji: "🫧", tint: "bg-cream" },
  { name: "Orange Crush / Grape Crush", emoji: "🍊", tint: "bg-strawberry/15" },
  { name: "Root Beer / Cream Soda", emoji: "🍺", tint: "bg-cocoa/10" },
  { name: "Iced Tea", emoji: "🍵", tint: "bg-cream" },
  { name: "Apple Juice", emoji: "🍎", tint: "bg-cream" },
];

const scoopPrices = [
  { size: "Kiddie Scoop", price: "$4.00" },
  { size: "One Scoop", price: "$6.26" },
  { size: "Two Scoops", price: "$13.75" },
  { size: "Three Scoops", price: "$16.75" },
  { size: "Five Scoops", price: "$20.25" },
  { size: "Waffle Cone +", price: "$1.00" },
];

const treatPrices = [
  { size: "Floats (Any Flavour + Pop)", price: "$9.95" },
  { size: "Ice Cream Sandwiches (Any Flavour + Cookie)", price: "$9.95" },
  { size: "Milkshakes (2% or Oat Milk)", price: "$13.75" },
  { size: "Drinks (Water, Pop, Juice…)", price: "$2.00" },
];

type MenuItem = { name: string; emoji: string; img?: string; tint?: string };

function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.name} className="space-y-2">
          <div
            className={`w-full aspect-square ${it.tint ?? "bg-cream"} rounded-2xl overflow-hidden ring-1 ring-cocoa/5 grid place-items-center text-4xl`}
          >
            {it.img ? (
              <img src={it.img} alt={it.name} className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <span aria-hidden>{it.emoji}</span>
            )}
          </div>
          <div className="text-sm font-semibold leading-tight">{it.name}</div>
        </div>
      ))}
    </div>
  );
}

function PriceBoard({ title, rows }: { title: string; rows: { size: string; price: string }[] }) {
  return (
    <div className="bg-cream rounded-2xl p-5 ring-1 ring-cocoa/5">
      <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-strawberry mb-3">
        {title}
      </div>
      <ul className="divide-y divide-cocoa/10">
        {rows.map((r) => (
          <li key={r.size} className="flex justify-between py-2 text-sm">
            <span className="text-cocoa/75">{r.size}</span>
            <span className="font-semibold">{r.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<"flavours" | "nondairy" | "treats">("flavours");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const tabs: { id: typeof tab; label: string }[] = [
    { id: "flavours", label: "Flavours" },
    { id: "nondairy", label: "Non-Dairy" },
    { id: "treats", label: "Frozen Treats" },
  ];

  const items =
    tab === "flavours" ? menuFlavors : tab === "nondairy" ? menuNonDairy : menuFrozenTreats;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full menu"
      className="fixed inset-0 z-50 grid place-items-center p-4 bg-cocoa/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-white text-cocoa rounded-[2rem] shadow-2xl ring-1 ring-cocoa/10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-4 right-4 size-10 rounded-full bg-cream hover:bg-strawberry hover:text-white grid place-items-center text-xl font-semibold transition-colors z-10"
        >
          ×
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry">
            Our Menu
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            What's on the board today
          </h3>

          <div className="flex flex-wrap gap-2 mb-6 border-b border-cocoa/10 pb-3">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-colors ${
                  tab === t.id
                    ? "bg-cocoa text-cream"
                    : "bg-cream text-cocoa/70 hover:text-cocoa"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <MenuGrid items={items} />

          <div className="mt-8">
            {tab === "treats" ? (
              <PriceBoard title="Frozen Treats Pricing" rows={treatPrices} />
            ) : (
              <PriceBoard title="Scoop Pricing" rows={scoopPrices} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cream text-cocoa font-sans">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-cocoa/5">
        <a href="#top" className="flex items-center" aria-label="What's The Scoop? home">
          <img src={wtsLogo} alt="What's The Scoop?" className="h-12 md:h-14 w-auto" />
        </a>
        <div className="hidden md:flex gap-8 font-semibold uppercase text-xs tracking-[0.18em]">
          <a href="#flavours" className="hover:text-strawberry transition-colors">Our Menu</a>
          <a href="#treats" className="hover:text-strawberry transition-colors">Socials</a>
          <a href="#visit" className="hover:text-strawberry transition-colors">About Us</a>
        </div>
        <a
          href="#visit"
          className="bg-cocoa text-cream px-5 py-2.5 rounded-full font-semibold text-xs tracking-widest uppercase hover:bg-strawberry transition-colors"
        >
          Find Us 🗺️
        </a>
      </nav>

      {/* Hero */}
      <section id="top" className="px-6 md:px-10 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry">
              INNISFIL BEACH ROAD · OPEN DAILY 📍
            </span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.92] font-semibold">
              Sweet joy,<br />
              <span className="text-strawberry italic font-medium">one scoop</span> at a time. 🍦
            </h1>
            <p className="text-lg md:text-xl text-cocoa/75 max-w-md leading-relaxed">
              Handcrafted in Canada with local dairy and a whole lot of love.
              Discover your new favourite flavour today.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#flavours"
                className="bg-mint text-cocoa px-7 py-4 rounded-2xl font-semibold text-base shadow-lg shadow-mint/30 hover:-translate-y-1 transition-transform"
              >
                See Today's Flavours 📰
              </a>
              <a
                href="#visit"
                className="border-2 border-cocoa/10 px-7 py-4 rounded-2xl font-semibold text-base hover:bg-white transition-colors"
              >
                Find Us 🗺️
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-square bg-mint/15 rounded-[3.5rem] overflow-hidden ring-1 ring-cocoa/5">
              <img
                src={heroCone}
                alt="Triple-scoop waffle cone with strawberry, mint and vanilla"
                width={1200}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-4 border border-cream">
              <div className="size-12 rounded-full bg-strawberry grid place-items-center text-white font-display text-lg font-semibold">
                50+
              </div>
              <div>
                <div className="font-semibold text-sm">Rotating Flavours</div>
                <div className="text-xs text-cocoa/60">Something for everyone</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="px-6 md:px-10 py-16 bg-white border-y border-cocoa/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {categories.map((c) => (
            <div key={c.title} className="space-y-3">
              <div className="font-display text-strawberry text-sm font-semibold">/ {c.eyebrow}</div>
              <h3 className="font-display text-3xl font-semibold">{c.title}</h3>
              <p className="text-cocoa/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fan Favourites */}
      <section id="flavours" className="px-6 md:px-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-2">
                Fan Favourites
              </h2>
              <p className="text-cocoa/60 uppercase tracking-[0.18em] text-xs font-semibold">
                50+ flavours to choose from
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="text-strawberry font-semibold border-b-2 border-strawberry pb-1 self-start hover:text-cocoa hover:border-cocoa transition-colors"
            >
              Open Full Menu
            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {flavors.map((f) => (
              <article key={f.name} className="group cursor-default">
                <div
                  className={`w-full aspect-[4/5] ${f.tint ?? "bg-cream"} rounded-3xl mb-5 overflow-hidden ring-1 ring-cocoa/5 transition-transform group-hover:scale-[1.02]`}
                >
                  <img
                    src={f.img}
                    alt={f.name}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold">{f.name}</h3>
                <p className="text-cocoa/65 mt-1">{f.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Frozen treats banner */}
      <section id="treats" className="px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto bg-cocoa text-cream rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 space-y-6">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-mint">
              Beyond the Scoop
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Floats, shakes & sandwiches.
            </h2>
            <p className="text-cream/70 max-w-md leading-relaxed">
              Floats made with any flavour and your favourite pop, thick milkshakes
              blended with 2% or oat milk, and ice cream sandwiches with any
              flavour and cookie. Cold drinks too — the perfect summer combo.
            </p>
          </div>
          <ul className="md:col-span-2 grid gap-3 text-sm">
            {[
              "Floats — any flavour + pop",
              "Ice cream sandwiches — any flavour + cookie",
              "Milkshakes — 2% or oat milk",
              "Coke, ginger ale, crushes & more",
              "Apple juice, iced tea & water",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 bg-cream/5 rounded-full px-5 py-3 ring-1 ring-cream/10"
              >
                <span className="size-2 rounded-full bg-mint" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visit / Hours */}
      <section id="visit" className="px-6 md:px-10 py-24 bg-white border-t border-cocoa/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry mb-3">
              Store Hours
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-10">
              Come say hi. 👋
            </h2>

            <div className="divide-y divide-cocoa/10">
              <div className="py-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa/50 mb-4">
                  May · June · September
                </h4>
                <div className="flex justify-between py-1.5">
                  <span className="text-cocoa/70">Mon – Fri</span>
                  <span className="font-semibold">3:00 pm — 9:00 pm</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-cocoa/70">Sat – Sun</span>
                  <span className="font-semibold">12:00 pm — 9:00 pm</span>
                </div>
              </div>
              <div className="py-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cocoa/50 mb-4">
                  July · August
                </h4>
                <div className="flex justify-between py-1.5">
                  <span className="text-cocoa/70">Every day</span>
                  <span className="font-semibold">12:00 pm — 9:00 pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between ring-1 ring-cocoa/5">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry mb-3">
                FIND US 📍
              </span>
              <p className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-2">
                1070 Innisfil Beach Road
              </p>
              <p className="text-cocoa/65 text-lg">Innisfil, ON · L9S 4T9</p>
            </div>
            <div className="mt-10 space-y-3">
              <a
                href="tel:+12493883665"
                className="flex justify-between items-center py-3 border-b border-cocoa/10 font-semibold hover:text-strawberry transition-colors"
              >
                <span className="text-cocoa/60 font-medium text-sm uppercase tracking-widest">PHONE 📞</span>
                <span>1-249-388-3665</span>
              </a>
              <a
                href="mailto:whatsthescoopinnisfil@gmail.com"
                className="flex justify-between items-center py-3 border-b border-cocoa/10 font-semibold hover:text-strawberry transition-colors"
              >
                <span className="text-cocoa/60 font-medium text-sm uppercase tracking-widest">EMAIL&nbsp; 📩</span>
                <span className="truncate ml-4">whatsthescoopinnisfil@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cocoa text-cream px-6 md:px-10 py-20">
        <div  className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="font-display text-3xl font-semibold text-strawberry mb-4">
              What's The Scoop?
            </div>
            <p className="text-cream/60 max-w-sm">
              Innisfil's neighbourhood ice cream shop — handcrafted scoops,
              non-dairy treats and lakeside summer vibes since 2024.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-5 uppercase tracking-[0.2em] text-xs opacity-50">
              Visit
            </h4>
            <ul className="space-y-3 text-sm">
              <li>1070 Innisfil Beach Rd</li>
              <li>Innisfil, ON L9S 4T9</li>
              <li className="text-mint">Open daily, 12–9</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5 uppercase tracking-[0.2em] text-xs opacity-50">
              Follow
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/p/Whats-The-Scoop-61562122709985/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-strawberry transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/p/DJjh_L4RVE0/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-strawberry transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/GuUa4egtWQMpy8160"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-strawberry transition-colors"
                >
                  Google
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 text-xs uppercase tracking-[0.2em] text-cream/40">
          © {new Date().getFullYear()} What's The Scoop? · Innisfil, Ontario
        </div>
      </footer>
      {menuOpen && <MenuModal onClose={() => setMenuOpen(false)} />}
    </div>
  );
}