import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Challenge, { Category, Level } from "./Challenge.entity";

export default class ChallengeDb {
  protected static repository: Repository<Challenge>;
  static async initializeRepository() {
    this.repository = await getRepository(Challenge);
  }

  protected static findChallengeById(challengeId: string) {
    return this.repository.findOneBy({ id: challengeId });
  }

  static async clearRepository(): Promise<void> {
    await this.repository.delete({});
  }

  static async initializeChallenges(): Promise<void> { 
    await this.clearRepository();
    await this.repository.save({
      challengeName: "Nettoyons nos plages",
      level: Level.SUPERGREEN, 
      description: "Mobilisation nationale pour nettoyer les plages près de chez vous. En équipe ou solo, rejoignez ce challenge sportif en partenariat avec Sea Shepherd France",
      category: [Category.PROTECTSNATURE, Category.WASTE], 
      startsAt: "2023-03-11 09:00:00+00",
      endAt: "2023-03-12 12:00:00+00",
      img: "https://www.wedemain.fr/wp-content/uploads/2020/04/35637228-32170106.jpg",
    });
    await this.repository.save({
      challengeName: "Covoiturage",
      level: Level.MODERATE, 
      description: "Privilégiez vos déplacements en covoiturage! Moins de pollution, réduction des coûts et papotages (ou pas), en partenariat avec BlaBLaCar",
      category: [Category.CARPOOLING], 
      startsAt: "2023-02-17T08:00:00+0000",
      endAt: "2023-02-17T20:00:00+0000",
      img: "https://images.caradisiac.com/images/4/7/9/8/194798/S1-blablacar-attention-aux-arnaques-706768.jpg",
    });
    await this.repository.save({
      challengeName: "Je réduis ma consommation de viande 🍖",
      level: Level.SUPERGREEN, 
      description: "'La viande d'élevage est à l'origine de 15% des émissions de gaz à effet de serre' - https://www.geo.fr/environnement/linvestissement-dans-les-alternatives-a-la-viande-delevage-serait-de-loin-la-meilleure-maniere-de-lutter-contre-le-rechauffement-climatique-210808 - Objectif : réduire de moitié sa consommation de viande et pour les plus résilients passer à 2 repas carnés par semaine. Végés, pour vous c'est déjà gagné !",
      category: [Category.MEAT, Category.PROTECTSNATURE, Category.LESS],
      startsAt: undefined,
      endAt: undefined,
      img: "https://assets.letemps.ch/sites/default/files/styles/share/public/2016/08/vache.jpg.jpeg?itok=ov-0XR97",
      team: null
    });
    await this.repository.save({
      challengeName: "Eteignez (presque) tout!",
      level: Level.EASY, 
      description: "Au boulot, à la maison, on éteint les lumières et, lorsque c'est possible, on ne laisse pas les équipements en veille.",
      category: [Category.ELECTRICITY, Category.LESS], 
      startsAt: undefined,
      endAt: undefined,
      img: undefined,
    });
    await this.repository.save({
      challengeName: "Tous au potager 👨‍🌾",
      level: Level.CHALLENGING, 
      description: "Semez, cultivez, récoltez, mangez, partagez... pas de jardin ? en pot, par le biais d'une association, au coin de la rue, soyons-fou ! Publiez vos réalisations, les plus créatifs seront gagnants",
      category: [Category.SELFSUFFICIENCY], 
      startsAt: "2023-03-26T08:00:00+0000",
      endAt: undefined,
      img: undefined,
      team: null
    });
  }
}