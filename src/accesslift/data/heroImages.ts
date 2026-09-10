const hero = (name: string, alt: string) => ({
  src: `/images/accesslift/heroes/${name}.png`, alt, width: 1672, height: 941,
});

export const heroImages = {
  atendimento: hero("area-de-atendimento", "Área de atendimento da Accesslift"),
  carreira: hero("trabalhe-conosco", "Trabalhe conosco na Accesslift"),
  empresa: hero("empresa", "Accesslift Plataformas"),
  assistencia: { ...hero("assistencia-tecnica", "Assistência técnica para plataformas elevatórias"), width: 1671 },
  manutencao: hero("manutencao-preventiva", "Manutenção preventiva de plataformas elevatórias"),
  treinamento: hero("treinamento", "Treinamento para operação de plataformas elevatórias"),
  atacados: hero("atacados", "Plataformas elevatórias para atacados"),
  construcao: hero("construcao-civil", "Plataformas elevatórias para construção civil"),
  industria: hero("industria", "Plataformas elevatórias para a indústria"),
  supermercados: hero("supermercados", "Plataformas elevatórias para supermercados e hipermercados"),
  contato: hero("contato", "Atendimento Accesslift para locação de plataformas elevatórias"),
  locacao: hero("locacao", "Locação de plataformas elevatórias Accesslift em São Paulo"),
  orcamento: hero("orcamento", "Solicitação de orçamento de plataformas elevatórias Accesslift"),
  plataformas: hero("plataformas", "Plataformas elevatórias Accesslift para trabalhos em altura"),
  tesoura: hero("tesoura", "Plataformas tesoura da Accesslift"),
  articuladas: hero("articuladas", "Plataformas articuladas da Accesslift"),
  equipamentos: hero("equipamentos", "Equipamentos Accesslift para locação"),
  servicos: hero("servicos", "Serviços e suporte da Accesslift para plataformas elevatórias"),
  segmentos: hero("segmentos", "Plataformas Accesslift para diferentes segmentos e aplicações"),
};
