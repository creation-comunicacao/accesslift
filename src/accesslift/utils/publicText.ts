export const formatPublicSpecValue = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const formatted = value.replace(/\*/g, "").replace(/\s+/g, " ").trim();

  return formatted || null;
};
