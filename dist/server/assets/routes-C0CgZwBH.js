import { t as wts_hero_default } from "./wts-hero-nqyTJnOS.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/flavor-strawberry.jpg
var flavor_strawberry_default = "/assets/flavor-strawberry-Cb0042dD.jpg";
//#endregion
//#region src/assets/flavor-mint.jpg
var flavor_mint_default = "/assets/flavor-mint-DKMrluAc.jpg";
//#endregion
//#region src/assets/flavor-caramel.jpg
var flavor_caramel_default = "/assets/flavor-caramel-2oOFdczc.jpg";
//#endregion
//#region src/assets/wts-logo.png
var wts_logo_default = "/assets/wts-logo-D4VjlTlG.png";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var flavors = [
	{
		name: "Strawberry Field",
		note: "Fresh local berries swirled with sweet cream",
		img: flavor_strawberry_default
	},
	{
		name: "Midnight Mint",
		note: "Cool peppermint with dark cocoa flakes",
		img: flavor_mint_default,
		tint: "bg-mint/15"
	},
	{
		name: "Salted Toffee",
		note: "Sea salt meets buttery golden caramel",
		img: flavor_caramel_default
	}
];
var categories = [
	{
		eyebrow: "01",
		title: "Flavours",
		body: "Sixteen rotating tubs of small-batch ice cream made in Canada and shipped every week."
	},
	{
		eyebrow: "02",
		title: "Non-Dairy",
		body: "Coconut-cream and oat-based scoops so everyone gets a cone."
	},
	{
		eyebrow: "03",
		title: "Frozen Treats",
		body: "Sundaes, milkshakes, banana splits and dipped soft-serve cones."
	}
];
var menuFlavors = [
	{
		name: "Strawberry Field",
		emoji: "🍓",
		img: flavor_strawberry_default
	},
	{
		name: "Midnight Mint",
		emoji: "🌿",
		img: flavor_mint_default
	},
	{
		name: "Salted Toffee",
		emoji: "🍯",
		img: flavor_caramel_default
	},
	{
		name: "Vanilla Bean",
		emoji: "🍦",
		tint: "bg-cream"
	},
	{
		name: "Chocolate Fudge",
		emoji: "🍫",
		tint: "bg-cocoa/10"
	},
	{
		name: "Cookies & Cream",
		emoji: "🍪",
		tint: "bg-cream"
	},
	{
		name: "Birthday Cake",
		emoji: "🎂",
		tint: "bg-strawberry/15"
	},
	{
		name: "Maple Walnut",
		emoji: "🍁",
		tint: "bg-cream"
	}
];
var menuNonDairy = [
	{
		name: "Coconut Mango",
		emoji: "🥭",
		tint: "bg-mint/15"
	},
	{
		name: "Oat Cookie Dough",
		emoji: "🥣",
		tint: "bg-cream"
	},
	{
		name: "Dark Chocolate Sorbet",
		emoji: "🍫",
		tint: "bg-cocoa/10"
	},
	{
		name: "Raspberry Sorbet",
		emoji: "🫐",
		tint: "bg-strawberry/15"
	},
	{
		name: "Lemon Sorbet",
		emoji: "🍋",
		tint: "bg-cream"
	}
];
var menuFrozenTreats = [
	{
		name: "Hand-Dipped Soft Serve",
		emoji: "🍦",
		tint: "bg-cream"
	},
	{
		name: "Loaded Sundae",
		emoji: "🍨",
		tint: "bg-strawberry/15"
	},
	{
		name: "Banana Split",
		emoji: "🍌",
		tint: "bg-mint/15"
	},
	{
		name: "Thick Milkshake",
		emoji: "🥤",
		tint: "bg-cream"
	},
	{
		name: "Root Beer Float",
		emoji: "🥛",
		tint: "bg-cocoa/10"
	},
	{
		name: "Freezies",
		emoji: "🧊",
		tint: "bg-mint/15"
	}
];
var scoopPrices = [
	{
		size: "Kid Scoop",
		price: "$4.50"
	},
	{
		size: "Single Scoop",
		price: "$5.75"
	},
	{
		size: "Double Scoop",
		price: "$7.95"
	},
	{
		size: "Waffle Cone +",
		price: "$1.50"
	}
];
var treatPrices = [
	{
		size: "Soft Serve (S/L)",
		price: "$4.50 / $6.50"
	},
	{
		size: "Sundae",
		price: "$8.95"
	},
	{
		size: "Banana Split",
		price: "$10.95"
	},
	{
		size: "Milkshake",
		price: "$7.50"
	},
	{
		size: "Float",
		price: "$6.50"
	},
	{
		size: "Freezies",
		price: "$2.00"
	}
];
function MenuGrid({ items }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
		children: items.map((it) => /* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ jsx("div", {
				className: `w-full aspect-square ${it.tint ?? "bg-cream"} rounded-2xl overflow-hidden ring-1 ring-cocoa/5 grid place-items-center text-4xl`,
				children: it.img ? /* @__PURE__ */ jsx("img", {
					src: it.img,
					alt: it.name,
					className: "w-full h-full object-cover",
					loading: "lazy"
				}) : /* @__PURE__ */ jsx("span", {
					"aria-hidden": true,
					children: it.emoji
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "text-sm font-semibold leading-tight",
				children: it.name
			})]
		}, it.name))
	});
}
function PriceBoard({ title, rows }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-cream rounded-2xl p-5 ring-1 ring-cocoa/5",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-[11px] uppercase tracking-[0.2em] font-semibold text-strawberry mb-3",
			children: title
		}), /* @__PURE__ */ jsx("ul", {
			className: "divide-y divide-cocoa/10",
			children: rows.map((r) => /* @__PURE__ */ jsxs("li", {
				className: "flex justify-between py-2 text-sm",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-cocoa/75",
					children: r.size
				}), /* @__PURE__ */ jsx("span", {
					className: "font-semibold",
					children: r.price
				})]
			}, r.size))
		})]
	});
}
function MenuModal({ onClose }) {
	const [tab, setTab] = useState("flavours");
	useEffect(() => {
		const onKey = (e) => {
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
	const tabs = [
		{
			id: "flavours",
			label: "Flavours"
		},
		{
			id: "nondairy",
			label: "Non-Dairy"
		},
		{
			id: "treats",
			label: "Frozen Treats"
		}
	];
	const items = tab === "flavours" ? menuFlavors : tab === "nondairy" ? menuNonDairy : menuFrozenTreats;
	return /* @__PURE__ */ jsx("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Full menu",
		className: "fixed inset-0 z-50 grid place-items-center p-4 bg-cocoa/60 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ jsxs("div", {
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-white text-cocoa rounded-[2rem] shadow-2xl ring-1 ring-cocoa/10",
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Close menu",
				className: "absolute top-4 right-4 size-10 rounded-full bg-cream hover:bg-strawberry hover:text-white grid place-items-center text-xl font-semibold transition-colors z-10",
				children: "×"
			}), /* @__PURE__ */ jsxs("div", {
				className: "p-6 md:p-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry",
						children: "Our Menu"
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "font-display text-3xl md:text-4xl font-semibold mb-6",
						children: "What's on the board today"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2 mb-6 border-b border-cocoa/10 pb-3",
						children: tabs.map((t) => /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setTab(t.id),
							className: `px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-colors ${tab === t.id ? "bg-cocoa text-cream" : "bg-cream text-cocoa/70 hover:text-cocoa"}`,
							children: t.label
						}, t.id))
					}),
					/* @__PURE__ */ jsx(MenuGrid, { items }),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8",
						children: tab === "treats" ? /* @__PURE__ */ jsx(PriceBoard, {
							title: "Frozen Treats Pricing",
							rows: treatPrices
						}) : /* @__PURE__ */ jsx(PriceBoard, {
							title: "Scoop Pricing",
							rows: scoopPrices
						})
					})
				]
			})]
		})
	});
}
function Index() {
	const [menuOpen, setMenuOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-cream text-cocoa font-sans",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "flex items-center justify-between px-6 md:px-10 py-6 border-b border-cocoa/5",
				children: [
					/* @__PURE__ */ jsx("a", {
						href: "#top",
						className: "flex items-center",
						"aria-label": "What's The Scoop? home",
						children: /* @__PURE__ */ jsx("img", {
							src: wts_logo_default,
							alt: "What's The Scoop?",
							className: "h-12 md:h-14 w-auto"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden md:flex gap-8 font-semibold uppercase text-xs tracking-[0.18em]",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "#flavours",
								className: "hover:text-strawberry transition-colors",
								children: "Flavours"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#treats",
								className: "hover:text-strawberry transition-colors",
								children: "Frozen Treats"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#visit",
								className: "hover:text-strawberry transition-colors",
								children: "Visit Innisfil"
							})
						]
					}),
					/* @__PURE__ */ jsx("a", {
						href: "#visit",
						className: "bg-cocoa text-cream px-5 py-2.5 rounded-full font-semibold text-xs tracking-widest uppercase hover:bg-strawberry transition-colors",
						children: "Find Us 🗺️"
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "top",
				className: "px-6 md:px-10 py-16 md:py-20 max-w-7xl mx-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry",
								children: "INNISFIL BEACH ROAD · OPEN DAILY 📍"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-display text-6xl md:text-7xl lg:text-8xl leading-[0.92] font-semibold",
								children: [
									"Sweet joy,",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "text-strawberry italic font-medium",
										children: "one scoop"
									}),
									" at a time. 🍦"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg md:text-xl text-cocoa/75 max-w-md leading-relaxed",
								children: "Handcrafted in Canada with local dairy and a whole lot of love. Discover your new favourite flavour today."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-4",
								children: [/* @__PURE__ */ jsx("a", {
									href: "#flavours",
									className: "bg-mint text-cocoa px-7 py-4 rounded-2xl font-semibold text-base shadow-lg shadow-mint/30 hover:-translate-y-1 transition-transform",
									children: "See Today's Flavours 📰"
								}), /* @__PURE__ */ jsx("a", {
									href: "#visit",
									className: "border-2 border-cocoa/10 px-7 py-4 rounded-2xl font-semibold text-base hover:bg-white transition-colors",
									children: "Find Us 🗺️"
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-full aspect-square bg-mint/15 rounded-[3.5rem] overflow-hidden ring-1 ring-cocoa/5",
							children: /* @__PURE__ */ jsx("img", {
								src: wts_hero_default,
								alt: "Triple-scoop waffle cone with strawberry, mint and vanilla",
								width: 1200,
								height: 1200,
								className: "w-full h-full object-cover"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-4 border border-cream",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-12 rounded-full bg-strawberry grid place-items-center text-white font-display text-lg font-semibold",
								children: "16+"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-semibold text-sm",
								children: "Weekly Flavours"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-cocoa/60",
								children: "Rotating all summer"
							})] })]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "px-6 md:px-10 py-16 bg-white border-y border-cocoa/5",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto grid md:grid-cols-3 gap-8",
					children: categories.map((c) => /* @__PURE__ */ jsxs("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "font-display text-strawberry text-sm font-semibold",
								children: ["/ ", c.eyebrow]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-3xl font-semibold",
								children: c.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-cocoa/70 leading-relaxed",
								children: c.body
							})
						]
					}, c.title))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "flavours",
				className: "px-6 md:px-10 py-24 bg-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-5xl font-semibold mb-2",
							children: "Fan Favourites"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-cocoa/60 uppercase tracking-[0.18em] text-xs font-semibold",
							children: "Voted best in Innisfil"
						})] }), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setMenuOpen(true),
							className: "text-strawberry font-semibold border-b-2 border-strawberry pb-1 self-start hover:text-cocoa hover:border-cocoa transition-colors",
							children: "Open Full Menu"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-3 gap-8",
						children: flavors.map((f) => /* @__PURE__ */ jsxs("article", {
							className: "group cursor-default",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: `w-full aspect-[4/5] ${f.tint ?? "bg-cream"} rounded-3xl mb-5 overflow-hidden ring-1 ring-cocoa/5 transition-transform group-hover:scale-[1.02]`,
									children: /* @__PURE__ */ jsx("img", {
										src: f.img,
										alt: f.name,
										width: 800,
										height: 1e3,
										loading: "lazy",
										className: "w-full h-full object-cover"
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-2xl font-semibold",
									children: f.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-cocoa/65 mt-1",
									children: f.note
								})
							]
						}, f.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "treats",
				className: "px-6 md:px-10 py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto bg-cocoa text-cream rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-5 gap-10 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-3 space-y-6",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-mint",
								children: "Beyond the Scoop"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-4xl md:text-5xl font-semibold leading-tight",
								children: "Sundaes, shakes & dipped cones."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-cream/70 max-w-md leading-relaxed",
								children: "Banana splits piled high, thick milkshakes blended to order, and soft-serve dipped in our signature chocolate shell. Frozen treats for every kind of summer day."
							})
						]
					}), /* @__PURE__ */ jsx("ul", {
						className: "md:col-span-2 grid gap-3 text-sm",
						children: [
							"Hand-dipped soft serve",
							"Loaded sundaes",
							"Banana splits",
							"Thick milkshakes",
							"Floats & freezies"
						].map((t) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3 bg-cream/5 rounded-full px-5 py-3 ring-1 ring-cream/10",
							children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-mint" }), /* @__PURE__ */ jsx("span", { children: t })]
						}, t))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "visit",
				className: "px-6 md:px-10 py-24 bg-white border-t border-cocoa/5",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-16",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry mb-3",
							children: "Store Hours"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-5xl font-semibold mb-10",
							children: "Come say hi. 👋"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "divide-y divide-cocoa/10",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "py-6",
								children: [
									/* @__PURE__ */ jsx("h4", {
										className: "text-xs font-semibold uppercase tracking-[0.2em] text-cocoa/50 mb-4",
										children: "May · June · September"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between py-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-cocoa/70",
											children: "Mon – Fri"
										}), /* @__PURE__ */ jsx("span", {
											className: "font-semibold",
											children: "3:00 pm — 9:00 pm"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between py-1.5",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-cocoa/70",
											children: "Sat – Sun"
										}), /* @__PURE__ */ jsx("span", {
											className: "font-semibold",
											children: "12:00 pm — 9:00 pm"
										})]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "py-6",
								children: [/* @__PURE__ */ jsx("h4", {
									className: "text-xs font-semibold uppercase tracking-[0.2em] text-cocoa/50 mb-4",
									children: "July · August"
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex justify-between py-1.5",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-cocoa/70",
										children: "Every day"
									}), /* @__PURE__ */ jsx("span", {
										className: "font-semibold",
										children: "12:00 pm — 9:00 pm"
									})]
								})]
							})]
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "bg-cream rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between ring-1 ring-cocoa/5",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-block text-[11px] uppercase tracking-[0.25em] font-semibold text-strawberry mb-3",
								children: "FIND US 📍"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-3xl md:text-4xl font-semibold leading-tight mb-2",
								children: "1070 Innisfil Beach Road"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-cocoa/65 text-lg",
								children: "Innisfil, ON · L9S 4T9"
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "mt-10 space-y-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "tel:+12493883665",
								className: "flex justify-between items-center py-3 border-b border-cocoa/10 font-semibold hover:text-strawberry transition-colors",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-cocoa/60 font-medium text-sm uppercase tracking-widest",
									children: "PHONE 📞"
								}), /* @__PURE__ */ jsx("span", { children: "1-249-388-3665" })]
							}), /* @__PURE__ */ jsxs("a", {
								href: "mailto:whatsthescoopinnisfil@gmail.com",
								className: "flex justify-between items-center py-3 border-b border-cocoa/10 font-semibold hover:text-strawberry transition-colors",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-cocoa/60 font-medium text-sm uppercase tracking-widest",
									children: "EMAIL\xA0 📩"
								}), /* @__PURE__ */ jsx("span", {
									className: "truncate ml-4",
									children: "whatsthescoopinnisfil@gmail.com"
								})]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "bg-cocoa text-cream px-6 md:px-10 py-20",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto grid md:grid-cols-4 gap-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-2",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-3xl font-semibold text-strawberry mb-4",
								children: "What's The Scoop?"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-cream/60 max-w-sm",
								children: "Innisfil's neighbourhood ice cream shop — handcrafted scoops, non-dairy treats and lakeside summer vibes since 2024."
							})]
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-semibold mb-5 uppercase tracking-[0.2em] text-xs opacity-50",
							children: "Visit"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ jsx("li", { children: "1070 Innisfil Beach Rd" }),
								/* @__PURE__ */ jsx("li", { children: "Innisfil, ON L9S 4T9" }),
								/* @__PURE__ */ jsx("li", {
									className: "text-mint",
									children: "Open daily, 12–9"
								})
							]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-semibold mb-5 uppercase tracking-[0.2em] text-xs opacity-50",
							children: "Follow"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "https://www.facebook.com/p/Whats-The-Scoop-61562122709985/",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-strawberry transition-colors",
									children: "Facebook"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "https://www.instagram.com/p/DJjh_L4RVE0/",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-strawberry transition-colors",
									children: "Instagram"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "https://share.google/GuUa4egtWQMpy8160",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-strawberry transition-colors",
									children: "Google"
								}) })
							]
						})] })
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 text-xs uppercase tracking-[0.2em] text-cream/40",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" What's The Scoop? · Innisfil, Ontario"
					]
				})]
			}),
			menuOpen && /* @__PURE__ */ jsx(MenuModal, { onClose: () => setMenuOpen(false) })
		]
	});
}
//#endregion
export { Index as component };
