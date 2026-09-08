export const formatPublicSpecValue = (value?: string | null) => {
  if (!value) {
    return null;
  }

  if (/a confirmar|não informado|nao informado|validar|em atualização|em atualizacao|consultar internamente|pendente|sujeit[oa].*valida/i.test(value)) return null;
  // Trailing footnote markers in this catalog identify pending technical validation.
  if (/\S\*+\s*$/.test(value)) return null;

  const formatted = value.replace(/\s+/g, " ").trim();

  return formatted || null;
};
