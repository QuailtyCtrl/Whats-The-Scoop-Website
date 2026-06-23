import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

// Featured Assets
import flavorStrawberry from "@/assets/flavor-strawberry.jpg";
import flavorMint from "@/assets/flavor-mint.jpg";
import flavorCaramel from "@/assets/flavor-caramel.jpg";
import heroCone from "@/assets/wts-hero.png";
import wtsLogo from "@/assets/wts-logo.png";

// Menu Item PNG Assets
import imgAlgonquinCanoe from "@/assets/algonquin_canoe-2.png";
import imgBananaFudge from "@/assets/banana_fudge.png";
import imgBigFoot from "@/assets/big_foot-768x768.png";
import imgBirthdayCake from "@/assets/birthday_cake-768x768.png";
import imgBlackRaspberryCheesecake from "@/assets/black_raspberry_cheesecake-768x768.png";
import imgBlackSweetCherry from "@/assets/black_sweet_cherry-768x768.png";
import imgBlueberryBliss from "@/assets/blueberry_bliss-768x768.png";
import imgBlueRaspberryScoop from "@/assets/BlueRaspberryscoop.png";
import imgBlueBubblegum from "@/assets/blue_bubblegum-768x768.png";
import imgButterscotchSwirl from "@/assets/butterscotch_swirl-768x768.png";
import imgCappuccinoNsa from "@/assets/cappuccino_NSA-768x768.png";
import imgCaptainCyclone from "@/assets/captain_cyclone-768x768.png";
import imgChocolate from "@/assets/chocolate-768x768.png";
import imgChocChipCookieDough from "@/assets/choc_chip_cookie_dough-768x768.png";
import imgChocFudgeBrownie from "@/assets/choc_fudge_brownie-768x768.png";
import imgChocSaltyCaramel from "@/assets/choc_salty_caramel-768x768.png";
import imgCinnamonBunz from "@/assets/Cinnamon-Bunz-768x768.png";
import imgCoconut from "@/assets/coconut-768x768.png";
import imgCookiesCream from "@/assets/cookies_cream-768x768.png";
import imgCottonCandy from "@/assets/cotton_candy-768x768.png";
import imgDutchApplePie from "@/assets/dutch_apple_pie-768x768.png";
import imgEspressoFlake from "@/assets/espresso_flake-768x768.png";
import imgFrenchVanillaLight from "@/assets/french-vanilla-light-768x768.png";
import imgFrenchVanillaWithBean from "@/assets/French-Vanilla-with-Bean-768x768.png";
import imgGrandSlamScoop from "@/assets/Grand-Slam-Scoop-768x768.png";
import imgGrapenut from "@/assets/grapenut-768x768.png";
import imgLavenderLemonade from "@/assets/lavender_lemonade-768x768.png";
import imgLemonChiffon from "@/assets/lemon-Chiffon.png";
import imgLemonLimeSorbet from "@/assets/lemon_lime_sorbet.png";
import imgLimeSherbet from "@/assets/lime_sherbet-768x768.png";
import imgMango from "@/assets/mango-768x768.png";
import imgMangoFrozenDessert from "@/assets/mango_frozendessert-768x768.png";
import imgMapleWalnut from "@/assets/maple_walnut-768x768.png";
import imgMilkChocolateCaramelRollover from "@/assets/Milk-Chocolate-Caramel-Rollover.png";
import imgMintChocChip from "@/assets/mint_choc_chip-768x768.png";
import imgMoonMist from "@/assets/moon-mist-768x768.png";
import imgMosterCookie from "@/assets/moster_cookie-768x768.png";
import imgOrangeSherbet from "@/assets/ornange_sherbet-768x768.png";
import imgPeachSorbet from "@/assets/Peach-sorbet-768x768.png";
import imgPeanutButterPretzelScoop from "@/assets/PeanutButterPretzelScoop-768x768.png";
import imgPeanutButterChoc from "@/assets/peanut_butter_choc-768x768.png";
import imgPistachioAlmond from "@/assets/pistachio_almond-768x768.png";
import imgPralinesCream from "@/assets/pralines_cream-768x768.png";
import imgRaibowSherbet from "@/assets/raibow_sherbet-768x768.png";
import imgRaspberrySherbet from "@/assets/raspberry-sherbet-768x768.png";
import imgReesesPieces from "@/assets/reeses_pieces-768x768.png";
import imgRockyRoadScoop from "@/assets/rocky-road-scoop-768x768.png";
import imgRumRaisin from "@/assets/rum_raisin-768x768.png";
import imgSaltyCaramel from "@/assets/salty_caramel-768x768.png";
import imgSmoreGlore from "@/assets/smore-glore-768x768.png";
import imgStrawberriesNCream from "@/assets/strawberries-n-cream-768x768.png";
import imgStrawberryMatchaFeaturedImage from "@/assets/Strawberry-Matcha-Featured-Image.png";
import imgStrawberryFrozenDessert from "@/assets/strawberry_frozendessert-768x768.png";
import imgStrawberrySorbet from "@/assets/strawberry_sorbet-768x768.png";
import imgTigerTail from "@/assets/tiger_tail-768x768.png";
import imgTreuNorthCherryCheesecake from "@/assets/treu-north-cherry-cheesecake-768x768.png";
import imgVanilla from "@/assets/vanilla-768x768.png";
import imgWatermelonSherbet from "@/assets/watermelon_sherbet-768x768.png";

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
      { property: "og:image", content: "https://whatsthescoop.ca/favicon.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
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
  { name: "Algonquin Canoe", emoji: "🛶", tint: "bg-mint/15", img: imgAlgonquinCanoe },
  { name: "Banana Fudge", emoji: "🍌", tint: "bg-cream", img: imgBananaFudge },
  { name: "Big Foot", emoji: "🦶", tint: "bg-cocoa/10", img: imgBigFoot },
  { name: "Birthday Cake", emoji: "🎂", tint: "bg-strawberry/15", img: imgBirthdayCake },
  { name: "Black Raspberry Cheesecake", emoji: "🫐", tint: "bg-strawberry/15", img: imgBlackRaspberryCheesecake },
  { name: "Black Sweet Cherry", emoji: "🍒", tint: "bg-strawberry/15", img: imgBlackSweetCherry },
  { name: "Blue Bubblegum", emoji: "🫧", tint: "bg-mint/15", img: imgBlueBubblegum },
  { name: "Blueberry Bliss", emoji: "🫐", tint: "bg-mint/15", img: imgBlueberryBliss },
  { name: "Butterscotch Ripple", emoji: "🍯", tint: "bg-cream", img: imgButterscotchSwirl },
  { name: "Cappuccino No Sugar Added", emoji: "☕", tint: "bg-cocoa/10", img: imgCappuccinoNsa },
  { name: "Captain Cyclone", emoji: "🌀", tint: "bg-mint/15", img: imgCaptainCyclone },
  { name: "Chocolate", emoji: "🍫", tint: "bg-cocoa/10", img: imgChocolate },
  { name: "Chocolate Chip Cookie Dough", emoji: "🍪", tint: "bg-cream", img: imgChocChipCookieDough },
  { name: "Chocolate Fudge Brownie", emoji: "🍫", tint: "bg-cocoa/10", img: imgChocFudgeBrownie },
  { name: "Chocolate Salty Caramel", emoji: "🍬", tint: "bg-cocoa/10", img: imgChocSaltyCaramel },
  { name: "Cinnamon Bunz", emoji: "🥐", tint: "bg-cream", img: imgCinnamonBunz },
  { name: "Coconut", emoji: "🥥", tint: "bg-cream", img: imgCoconut },
  { name: "Cookies 'N' Cream", emoji: "🍪", tint: "bg-cream", img: imgCookiesCream },
  { name: "Cotton Candy", emoji: "🍭", tint: "bg-strawberry/15", img: imgCottonCandy },
  { name: "Dutch Apple Pie", emoji: "🍎", tint: "bg-cream", img: imgDutchApplePie },
  { name: "Espresso Flake", emoji: "☕", tint: "bg-cocoa/10", img: imgEspressoFlake },
  { name: "French Vanilla Light", emoji: "🍦", tint: "bg-cream", img: imgFrenchVanillaLight },
  { name: "French Vanilla with Bean", emoji: "🍦", tint: "bg-cream", img: imgFrenchVanillaWithBean },
  { name: "Grand Slam", emoji: "⚾", tint: "bg-strawberry/15", img: imgGrandSlamScoop },
  { name: "Grapenut", emoji: "🌾", tint: "bg-cream", img: imgGrapenut },
  { name: "Lavender Lemonade", emoji: "💜", tint: "bg-mint/15", img: imgLavenderLemonade },
  { name: "Lemon Chiffon", emoji: "🍋", tint: "bg-cream", img: imgLemonChiffon },
  { name: "Mango", emoji: "🥭", tint: "bg-cream", img: imgMango },
  { name: "Mango Frozen Dessert", emoji: "🥭", tint: "bg-mint/15", img: imgMangoFrozenDessert },
  { name: "Maple Walnut", emoji: "🍁", tint: "bg-cream", img: imgMapleWalnut },
  { name: "Milk Chocolate Caramel Rollover", emoji: "🍫", tint: "bg-cocoa/10", img: imgMilkChocolateCaramelRollover },
  { name: "Mint Chocolate Chip", emoji: "🌿", img: imgMintChocChip, tint: "bg-mint/15" },
  { name: "Monster Cookie", emoji: "🍪", tint: "bg-cream", img: imgMosterCookie },
  { name: "Moon Mist", emoji: "🌙", tint: "bg-mint/15", img: imgMoonMist },
  { name: "Peanut Butter Chocolate", emoji: "🥜", tint: "bg-cocoa/10", img: imgPeanutButterChoc },
  { name: "Peanut Butter Pretzel", emoji: "🥨", tint: "bg-cream", img: imgPeanutButterPretzelScoop },
  { name: "Pistachio Almond", emoji: "🌰", tint: "bg-mint/15", img: imgPistachioAlmond },
  { name: "Pralines 'N' Cream", emoji: "🍮", tint: "bg-cream", img: imgPralinesCream },
  { name: "Reese's Pieces", emoji: "🍬", tint: "bg-cream", img: imgReesesPieces },
  { name: "Rocky Road", emoji: "🏔️", tint: "bg-cocoa/10", img: imgRockyRoadScoop },
  { name: "Rum Runnin' Raisin", emoji: "🍇", tint: "bg-cocoa/10", img: imgRumRaisin },
  { name: "S'more G'lore", emoji: "🔥", tint: "bg-cocoa/10", img: imgSmoreGlore },
  { name: "Salty Caramel", emoji: "🍯", img: imgSaltyCaramel },
  { name: "Strawberries 'N' Cream", emoji: "🍓", img: imgStrawberriesNCream },
  { name: "Strawberries Frozen Dessert", emoji: "🍓", tint: "bg-strawberry/15", img: imgStrawberryFrozenDessert },
  { name: "Strawberries Matcha", emoji: "🍵", tint: "bg-mint/15", img: imgStrawberryMatchaFeaturedImage },
  { name: "Tiger Tail", emoji: "🐯", tint: "bg-cream", img: imgTigerTail },
  { name: "True North Cherry Cheesecake", emoji: "🍒", tint: "bg-strawberry/15", img: imgTreuNorthCherryCheesecake },
  { name: "Vanilla", emoji: "🍦", tint: "bg-cream", img: imgVanilla },
];

const menuNonDairy = [
  { name: "Blue Raspberry Sorbet", emoji: "🫐", tint: "bg-mint/15", img: imgBlueRaspberryScoop },
  { name: "Lemon Lime Sorbet", emoji: "🍋", tint: "bg-cream", img: imgLemonLimeSorbet },
  { name: "Lime Sherbet", emoji: "🍈", tint: "bg-mint/15", img: imgLimeSherbet },
  { name: "Orange Sherbet", emoji: "🍊", tint: "bg-cream", img: imgOrangeSherbet },
  { name: "Peach Sorbet", emoji: "🍑", tint: "bg-cream", img: imgPeachSorbet },
  { name: "Rainbow Sherbet", emoji: "🌈", tint: "bg-strawberry/15", img: imgRaibowSherbet },
  { name: "Raspberry Sherbet", emoji: "🫐", tint: "bg-strawberry/15", img: imgRaspberrySherbet },
  { name: "Strawberry Sorbet", emoji: "🍓", tint: "bg-strawberry/15", img: imgStrawberrySorbet },
  { name: "Vanilla", emoji: "🍦", tint: "bg-cream", img: imgVanilla },
  { name: "Watermelon Sherbet", emoji: "🍉", tint: "bg-mint/15", img: imgWatermelonSherbet },
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

function MenuModal({
  onClose,
  scrollToPricing = false,
}: {
  onClose: () => void;
  scrollToPricing?: boolean;
}) {
  const [tab, setTab] = useState<"flavours" | "nondairy" | "treats">("flavours");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (!scrollToPricing) return;
    const id = window.setTimeout(() => {
      pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(id);
  }, [scrollToPricing]);

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
        ref={scrollRef}
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

          <div ref={pricingRef} className="mt-8 scroll-mt-4">
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

function getTodayHours(date: Date): { open: number; close: number } | null {
  // Use Eastern Time (store is in Innisfil, ON) so the badge is correct for all visitors
  const est = new Date(date.toLocaleString("en-US", { timeZone: "America/Toronto" }));
  const month = est.getMonth();
  const day = est.getDay();
  const isWeekend = day === 0 || day === 6;

  if (month === 6 || month === 7) return { open: 12 * 60, close: 21 * 60 };
  if (month === 4 || month === 5 || month === 8) {
    return isWeekend ? { open: 12 * 60, close: 21 * 60 } : { open: 15 * 60, close: 21 * 60 };
  }
  return null;
}

function OpenStatusBadge() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const hours = getTodayHours(now);
  // Use Eastern Time for minute/second calculations to match getTodayHours
  const est = new Date(now.toLocaleString("en-US", { timeZone: "America/Toronto" }));
  const minutes = est.getHours() * 60 + est.getMinutes();
  const seconds = est.getSeconds();
  const isOpen = !!hours && minutes >= hours.open && minutes < hours.close;

  let label = "Closed today";
  if (isOpen && hours) {
    const totalSecondsLeft = (hours.close - minutes) * 60 - seconds;
    const h = Math.floor(totalSecondsLeft / 3600);
    const m = Math.floor((totalSecondsLeft % 3600) / 60);
    const s = totalSecondsLeft % 60;
    const pad = (n: number) => n.toString().padStart(2, "0");
    label = `Closes in ${h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`}`;
  } else if (hours && minutes < hours.open) {
    const totalSecondsLeft = (hours.open - minutes) * 60 - seconds;
    const h = Math.floor(totalSecondsLeft / 3600);
    const m = Math.floor((totalSecondsLeft % 3600) / 60);
    const s = totalSecondsLeft % 60;
    const pad = (n: number) => n.toString().padStart(2, "0");
    label = `Opens in ${h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`}`;
  }

  const dotColor = isOpen ? "bg-emerald-500" : "bg-strawberry";
  const ringColor = isOpen ? "bg-emerald-500/60" : "bg-strawberry/60";
  const textColor = isOpen ? "text-emerald-700" : "text-strawberry";

  return (
    <div className="flex justify-center py-4">
      <div className="inline-flex items-center gap-2.5 bg-white rounded-full pl-3 pr-4 py-1.5 ring-1 ring-cocoa/10 shadow-sm text-xs font-semibold">
        <span className="relative flex size-2.5">
          <span className={`absolute inline-flex h-full w-full rounded-full ${ringColor} opacity-75 animate-ping`}></span>
          <span className={`relative inline-flex size-2.5 rounded-full ${dotColor}`}></span>
        </span>
        <span className={`uppercase tracking-[0.18em] ${textColor}`}>
          {isOpen ? "Open" : "Closed"}
        </span>
        <span className="text-cocoa/50">·</span>
        <span className="text-cocoa/70 tabular-nums">{label}</span>
      </div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuToPricing, setMenuToPricing] = useState(false);
  
  // Advanced Loading Screen States
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Unified Exit Handler — stored in a ref so the rAF loop always calls the latest version
  // (avoids stale closure where isExiting is captured as false forever)
  const isExitingRef = useRef(false);
  const handleIntroComplete = () => {
    if (isExitingRef.current) return;
    isExitingRef.current = true;
    setIsExiting(true);
    // Give slide-up animation exactly 650ms to clear the screen before unmounting the DOM node
    setTimeout(() => {
      setIsLoading(false);
    }, 650);
  };

// Inside your Index component:

useEffect(() => {
  // Use a variable to track if the effect has already run to prevent 
  // double-triggering in StrictMode
  let isMounted = true;
  let startTime = performance.now();
  let animationFrameId: number;

  const animate = (currentTime: number) => {
    if (!isMounted) return;
    
    const elapsed = currentTime - startTime;
    const progress = Math.min((elapsed / 1000) * 100, 100);
    
    setLoadProgress(Math.floor(progress));

    if (progress < 100) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      handleIntroComplete();
    }
  };

  animationFrameId = requestAnimationFrame(animate);

  return () => {
    isMounted = false;
    cancelAnimationFrame(animationFrameId);
  };
}, []); // Empty dependency array is correct here

  const openMenuAtPricing = () => {
    setMenuToPricing(true);
    setMenuOpen(true);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-cream text-cocoa font-sans">
      
      {/* 🌟 GLOBAL SITE STYLES & ANIMATION KEYFRAMES */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Default Layout Site-Wide Cursor (Ice Cream Bowl) */
        html, body, body * {
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size:22px'><text y='22'>🍨</text></svg>"), auto;
        }
        
       /* Interactive State Hover Cursor (Ice Cream Cone for Links/Buttons) */
a, button, a *, button *, [role="button"], label, input, select {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size:22px'><text y='22'>🍦</text></svg>"), pointer !important;
}

/* 👇 INSERT THIS NEW RULE HERE TO OVERRIDE THE ICE CREAM CONE */
.normal-cursor, .normal-cursor * {
  cursor: pointer !important;
}

/* Slide Entrance/Exit Framework Keyframes */
@keyframes customSlideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        @keyframes customSlideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .animate-slide-down-in {
          animation: customSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up-out {
          animation: customSlideUp 0.65s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }
      `}} />

      {/* ⏳ SITE-WIDE LOADING OVERLAY */}
      {isLoading && (
        <div 
          className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6 select-none ${
            isExiting ? "animate-slide-up-out" : "animate-slide-down-in"
          }`}
        >
          {/* Locks background scrolling and prevents layout leaking while loading */}
          <style dangerouslySetInnerHTML={{__html: "body { overflow: hidden !important; }"}} />
          
          <div className="flex flex-col items-center max-w-xs w-full space-y-6 text-center">
            {/* Bouncing Logo */}
            <img 
              src={wtsLogo} 
              alt="What's The Scoop?" 
              className="h-20 w-auto animate-bounce duration-1000" 
            />
            
            {/* Fast Progress Bar */}
            <div className="w-full bg-cocoa/10 h-1.5 rounded-full overflow-hidden relative ring-1 ring-cocoa/5">
              <div 
                className="bg-cocoa h-full rounded-full transition-all duration-200 ease-out"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            
            {/* Realtime Percentage Counter */}
            <div className="text-[10px] uppercase tracking-[0.25em] text-cocoa/50 font-semibold tabular-nums">
              Scooping... {loadProgress}%
            </div>

            {/* Skip Button */}
            <button
              type="button"
              onClick={handleIntroComplete}
              className="mt-2 px-5 py-2 border border-cocoa/15 rounded-full text-[10px] uppercase tracking-[0.2em] text-cocoa/60 bg-cream/40 hover:bg-cream hover:text-cocoa hover:border-cocoa transition-all duration-200 shadow-sm"
            >
              Skip Intro ⚡
            </button>
          </div>
        </div>
      )}

      {/* Main Content Wrapper (Uses absolute visibility toggles to ensure a complete zero-leak initial load) */}
      <div style={{ visibility: isExiting || !isLoading ? "visible" : "hidden" }}>
        {/* Navigation Header */}
        <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-cocoa/5">
          <button 
            type="button" 
            onClick={() => scrollToId("top")} 
            className="flex items-center focus:outline-none" 
            aria-label="What's The Scoop? home"
          >
            <img src={wtsLogo} alt="What's The Scoop?" className="h-12 md:h-14 w-auto" />
          </button>
          <div className="hidden md:flex gap-8 font-semibold uppercase text-xs tracking-[0.18em]">
            <button
              type="button"
              onClick={openMenuAtPricing}
              className="hover:text-strawberry transition-colors"
            >
              Our Menu
            </button>
            <button
              type="button"
              onClick={() => scrollToId("socials")}
              className="hover:text-strawberry transition-colors"
            >
              Socials
            </button>
            <button
              type="button"
              onClick={() => scrollToId("visit")}
              className="hover:text-strawberry transition-colors"
            >
              About Us
            </button>
          </div>
          <button
            type="button"
            onClick={() => scrollToId("visit")}
            className="bg-cocoa text-cream px-5 py-2.5 rounded-full font-semibold text-xs tracking-widest uppercase hover:bg-strawberry transition-colors"
          >
            Find Us 🗺️
          </button>
        </nav>

        {/* Live Countdown Status Banner */}
        <OpenStatusBadge />

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
                <button
                  type="button"
                  onClick={() => scrollToId("flavours")}
                  className="bg-mint text-cocoa px-7 py-4 rounded-2xl font-semibold text-base shadow-lg shadow-mint/30 hover:-translate-y-1 transition-transform"
                >
                  See Today's Flavours 📰
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId("visit")}
                  className="border-2 border-cocoa/10 px-7 py-4 rounded-2xl font-semibold text-base hover:bg-white transition-colors"
                >
                  Find Us 🗺️
                </button>
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

        {/* Socials */}
        <section id="socials" className="px-6 md:px-10 py-24 bg-cream border-t border-cocoa/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry mb-3">
                Socials
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">
                Follow the scoop. 📱
              </h2>
              <p className="text-cocoa/65 mt-3 max-w-md mx-auto">
                New flavours, special hours and giveaways — we post it all on social.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="https://www.facebook.com/p/Whats-The-Scoop-61562122709985/"
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-3xl p-8 ring-1 ring-cocoa/5 hover:-translate-y-1 transition-transform shadow-lg shadow-cocoa/5 flex items-center gap-5"
              >
                <div className="size-14 rounded-2xl bg-mint/20 grid place-items-center text-3xl">
                  📘
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-cocoa/50">
                    Facebook
                  </div>
                  <div className="font-display text-2xl font-semibold group-hover:text-strawberry transition-colors">
                    @WhatsTheScoop
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/whatsthescoop.innisfil/"
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-3xl p-8 ring-1 ring-cocoa/5 hover:-translate-y-1 transition-transform shadow-lg shadow-cocoa/5 flex items-center gap-5"
              >
                <div className="size-14 rounded-2xl bg-strawberry/15 grid place-items-center text-3xl">
                  📸
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-cocoa/50">
                    Instagram
                  </div>
                  <div className="font-display text-2xl font-semibold group-hover:text-strawberry transition-colors">
                    @whatsthescoop3
                  </div>
                </div>
              </a>
            </div>
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
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
    <div className="col-span-2">
      <div className="font-display text-3xl font-semibold text-cream mb-4">
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
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-cream transition-colors duration-200"
            style={{ cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' style='font-size:28px'%3E%3Ctext y='28'%3E🌐%3C/text%3E%3C/svg%3E"), pointer` }}
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/whatsthescoop.innisfil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-cream transition-colors duration-200"
            style={{ cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' style='font-size:28px'%3E%3Ctext y='28'%3E🌐%3C/text%3E%3C/svg%3E"), pointer` }}
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://share.google/GuUa4egtWQMpy8160"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-cream transition-colors duration-200"
            style={{ cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' style='font-size:28px'%3E%3Ctext y='28'%3E🌐%3C/text%3E%3C/svg%3E"), pointer` }}
          >
            Google
          </a>
        </li>
      </ul>
    </div>
  </div>
  
  {/* Bottom Sub-Footer Bar */}
  <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-cream/40">
    <span>© {new Date().getFullYear()} What's The Scoop? · Innisfil, Ontario</span>
    
{/* Dual Link Credit Section */}
<div className="flex items-center gap-x-2 opacity-70 select-none">
  {/* Link 1: SAM Studios (Normal Pointer Cursor) */}
  <a 
    href="https://samstuidos.vercel.app/#work" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-cream transition-colors duration-200 normal-cursor"
  >
    SAM Studios® MMXXIV
  </a>

  {/* Visual Divider Line */}
  <span className="opacity-30">|</span>

  {/* Link 2: Project AA-00 (Normal Pointer Cursor) */}
  <a 
    href="https://samstuidos.vercel.app/#work" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-cream transition-colors duration-200 normal-cursor"
  >
    Project AA-00
  </a>
</div>
  </div>
</footer>
      </div>

      {menuOpen && (
        <MenuModal
          scrollToPricing={menuToPricing}
          onClose={() => {
            setMenuOpen(false);
            setMenuToPricing(false);
          }}
        />
      )}
    </div>
  );
}

export default Index;