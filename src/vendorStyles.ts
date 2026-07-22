import type { Vendor } from "./data";
import type { Filter } from "./App";

export function isDimmed(filter: Filter, vendor: Vendor): boolean {
  return filter !== "both" && filter !== vendor;
}

export function accentBorder(vendor: Vendor): string {
  return vendor === "anthropic" ? "border-anthropic" : "border-moonshot";
}

export function accentText(vendor: Vendor): string {
  return vendor === "anthropic" ? "text-anthropic" : "text-moonshot";
}

export function accentBg(vendor: Vendor): string {
  return vendor === "anthropic" ? "bg-anthropic" : "bg-moonshot";
}

export function accentDimBg(vendor: Vendor): string {
  return vendor === "anthropic" ? "bg-anthropicDim" : "bg-moonshotDim";
}

export function vendorHex(vendor: Vendor): string {
  return vendor === "anthropic" ? "#B5502C" : "#1D6F63";
}
