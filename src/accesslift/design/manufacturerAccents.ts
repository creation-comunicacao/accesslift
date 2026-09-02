export type ManufacturerAccent = {
  bar: string;
  badge: string;
  hover: string;
  ring: string;
};

const fallbackAccent: ManufacturerAccent = {
  bar: "bg-[#d8242f]",
  badge: "bg-[#d8242f]/10 text-[#a8141d] ring-[#d8242f]/15",
  hover: "group-hover:border-[#d8242f]/20",
  ring: "ring-slate-100",
};

const manufacturerAccents: Record<string, ManufacturerAccent> = {
  jlg: {
    bar: "bg-orange-500",
    badge: "bg-orange-50 text-orange-700 ring-orange-200",
    hover: "group-hover:border-orange-200",
    ring: "ring-orange-100",
  },
  genie: {
    bar: "bg-blue-500",
    badge: "bg-blue-50 text-blue-700 ring-blue-200",
    hover: "group-hover:border-blue-200",
    ring: "ring-blue-100",
  },
  skyjack: {
    bar: "bg-red-600",
    badge: "bg-red-50 text-red-700 ring-red-200",
    hover: "group-hover:border-red-200",
    ring: "ring-red-100",
  },
  zoomlion: {
    bar: "bg-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    hover: "group-hover:border-emerald-200",
    ring: "ring-emerald-100",
  },
};

export const getManufacturerAccent = (brand: string): ManufacturerAccent =>
  manufacturerAccents[brand.toLowerCase()] || fallbackAccent;
