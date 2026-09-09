const hero = (name: string, alt: string) => ({
  src: `/images/accesslift/heroes/${name}.png`, alt, width: 1672, height: 941,
});

export const heroImages = {
  empresa: hero("empresa", "AccessLift Plataformas"),
  assistencia: { ...hero("assistencia-tecnica", "Assistência técnica para plataformas elevatórias"), width: 1671 },
  manutencao: hero("manutencao-preventiva", "Manutenção preventiva de plataformas elevatórias"),
  treinamento: hero("treinamento", "Treinamento para operação de plataformas elevatórias"),
  atacados: hero("atacados", "Plataformas elevatórias para atacados"),
  construcao: hero("construcao-civil", "Plataformas elevatórias para construção civil"),
  industria: hero("industria", "Plataformas elevatórias para a indústria"),
  supermercados: hero("supermercados", "Plataformas elevatórias para supermercados e hipermercados"),
  contato: hero("contato", "Atendimento AccessLift para locação de plataformas elevatórias"),
  locacao: hero("locacao", "Locação de plataformas elevatórias AccessLift em São Paulo"),
  orcamento: hero("orcamento", "Solicitação de orçamento de plataformas elevatórias AccessLift"),
  plataformas: hero("plataformas", "Plataformas elevatórias AccessLift para trabalhos em altura"),
  tesoura: hero("tesoura", "Plataformas tesoura da AccessLift"),
  articuladas: hero("articuladas", "Plataformas articuladas da AccessLift"),
  equipamentos: hero("equipamentos", "Equipamentos AccessLift para locação"),
  servicos: hero("servicos", "Serviços e suporte da AccessLift para plataformas elevatórias"),
  segmentos: hero("segmentos", "Plataformas AccessLift para diferentes segmentos e aplicações"),
};
