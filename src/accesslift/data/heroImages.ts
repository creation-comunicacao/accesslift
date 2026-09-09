const hero = (name: string, alt: string) => ({
  src: `/images/accesslift/heroes/${name}.png`, alt, width: 1672, height: 941,
});

export const heroImages = {
  plataformas: hero("plataformas", "Plataformas elevatórias AccessLift para trabalhos em altura"),
  tesoura: hero("tesoura", "Plataformas tesoura da AccessLift"),
  articuladas: hero("articuladas", "Plataformas articuladas da AccessLift"),
  equipamentos: hero("equipamentos", "Equipamentos AccessLift para locação"),
  servicos: hero("servicos", "Serviços e suporte da AccessLift para plataformas elevatórias"),
  segmentos: hero("segmentos", "Plataformas AccessLift para diferentes segmentos e aplicações"),
};
