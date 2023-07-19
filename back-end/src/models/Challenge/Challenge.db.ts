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
      startsAt: "2023-03-11T09:00:00+0000",
      endAt: "2023-03-12T12:00:00+0000",
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
      challengeName: "Diminuer l'utilisation du plastique",
      level: Level.MODERATE,
      description: "Refusez systématiquement les sacs en plastique et privilégier les sacs réutilisables, réduire la consommation de bouteille en plastique et utiliser une gourde.",
      category: [Category.CARPOOLING],
      startsAt: "2023-02-17T08:00:00+0000",
      endAt: "2023-02-17T20:00:00+0000",
      img: "https://www.wedemain.fr/wp-content/uploads/2023/03/Shutterstock_1074166649-1-409x320.jpg",
    });
    await this.repository.save({
      challengeName: "Défi du tri séléctif",
      level: Level.MODERATE,
      description: "Mettez en place un système de tri sélectif chez vous et recyclez tous les matériaux recyclables que vous utilisez.",
      category: [Category.CARPOOLING],
      startsAt: "2023-02-17T08:00:00+0000",
      endAt: "2023-02-17T20:00:00+0000",
      img: "https://www.wedemain.fr/wp-content/uploads/2023/07/shutterstock_523272235-870x566.jpg",
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
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fkoombackoffice.rezoloco.com%2Fimages%2Fkoom-cop21-eteindre-lumiere-ok-jpg&tbnid=gImHRpB2UBbGrM&vet=12ahUKEwj9toeE3JWAAxURoUwKHQvkCO4QMygKegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.koom.org%2Faction%2FEteindre-lumiere-piece&docid=cDMsH3c7u1ORRM&w=790&h=333&q=%C3%A9teindre%20lumi%C3%A8re&ved=2ahUKEwj9toeE3JWAAxURoUwKHQvkCO4QMygKegUIARDjAQ",
    });
    await this.repository.save({
      challengeName: "Tous au potager 👨‍🌾",
      level: Level.CHALLENGING,
      description: "Semez, cultivez, récoltez, mangez, partagez... pas de jardin ? en pot, par le biais d'une association, au coin de la rue, soyons-fou ! Publiez vos réalisations, les plus créatifs seront gagnants",
      category: [Category.SELFSUFFICIENCY],
      startsAt: "2023-03-26T08:00:00+0000",
      endAt: undefined,
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.adeo.com%2Fmedia%2F1445228%2Fpp-potager5d6f7c17bfc14b000a983093.jpg%3Fheight%3D465%26quality%3D75&tbnid=9dB_EyTR-hdVBM&vet=12ahUKEwj-4I7u25WAAxUTrycCHbqlDXkQMygHegUIARD5AQ..i&imgrefurl=https%3A%2F%2Fwww.leroymerlin.fr%2Fcomment-choisir%2Ftout-savoir-sur-potager.html&docid=vbYGDd6cgG_kSM&w=621&h=465&q=potager&ved=2ahUKEwj-4I7u25WAAxUTrycCHbqlDXkQMygHegUIARD5AQ",
      team: null
    });
    await this.repository.save({
      challengeName: "Adopte une ruche 🐝",
      level: Level.SUPERGREEN,
      description: "Pas d'abeilles - pas de pollen, pas de pollen - pas de cultures,  pas de culture - pas de manger, pas de manger = ☠️. Via une association, sur le toit, sur ton balcon, dans ton jardin... deviens petit apiculteur",
      category: [Category.PROTECTSNATURE, Category.SELFSUFFICIENCY],
      startsAt: "2023-03-11T09:00:00+0000",
      endAt: undefined,
      img: "https://fr.jardins-animes.com/images/media/mini-ruche-abeille-sauvage.jpg",
    });
    await this.repository.save({
      challengeName: "Réduire la consommation d'eau",
      level: Level.SUPERGREEN,
      description: "Réduisez votre consommation d'eau pendant une semaine en limitant les douches à 5 minutes, en fermant le robinet pendant que vous vous brossez les dents, et en utilisant un arrosoir pour arroser vos plantes.",
      category: [Category.PROTECTSNATURE, Category.SELFSUFFICIENCY],
      startsAt: "2023-03-11T09:00:00+0000",
      endAt: undefined,
      img: "https://www.wedemain.fr/wp-content/uploads/2022/09/shutterstock_1665205663-409x320.jpg",
    });
  }
}