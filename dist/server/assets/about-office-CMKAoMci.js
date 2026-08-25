import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/BrandLogo.tsx
function BrandLogo({ className = "" }) {
	return /* @__PURE__ */ jsxs("a", {
		href: "#home",
		className: `leading-none tracking-tight ${className}`,
		"aria-label": "Skills Brand",
		children: [/* @__PURE__ */ jsx("span", {
			className: "block font-display text-xl font-black italic text-gradient",
			children: "SKILLS"
		}), /* @__PURE__ */ jsx("span", {
			className: "block font-serif text-xl font-bold italic text-gradient",
			children: "Brand"
		})]
	});
}
//#endregion
//#region src/assets/about-office.jpg
var about_office_default = "/assets/about-office-CduUyIU3.jpg";
//#endregion
export { BrandLogo as n, about_office_default as t };
