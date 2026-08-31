const normalizeCity = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const positiveCoverageCities = [
  "sao paulo",
  "sp",
  "guarulhos",
  "mogi das cruzes",
  "itaquaquecetuba",
  "poa",
  "santo andre",
  "sao bernardo do campo",
  "sao caetano do sul",
  "diadema",
  "osasco",
  "barueri",
  "cotia",
  "taboao da serra",
  "carapicuiba",
  "suzano",
  "ferraz de vasconcelos",
  "aracariguama",
  "jundiai",
  "campinas",
];

export type CoverageLookupResult = "positive" | "confirm";

export function lookupCoverageCity(city: string): CoverageLookupResult {
  const normalized = normalizeCity(city);

  if (!normalized) {
    return "confirm";
  }

  const matchesKnownCity = positiveCoverageCities.some(
    (candidate) => normalized.includes(candidate) || candidate.includes(normalized),
  );

  return matchesKnownCity ? "positive" : "confirm";
}
