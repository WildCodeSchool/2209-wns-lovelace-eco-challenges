import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import AppUser, { Hobbies } from "./AppUser.entity";

export default class AppUserDb {
  protected static repository: Repository<AppUser>;
  static async initializeRepository() {
    this.repository = await getRepository(AppUser);
  }

  protected static saveUser(user: AppUser): Promise<AppUser> {
    return this.repository.save(user);
  }

  static findByEmail(
    email: string
  ): Promise<AppUser | null> {
    return this.repository.findOneBy({ email });
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }

  static async initializeUsers(): Promise<void> {
    await this.clearRepository();

    const userOne = new AppUser("Christopher", "Nafrere", "User1", "user1@gmail.com", "Paris", "France", 23, "792fedf21730fd3099dfcdccaada2e38", "'🌱 Christopher | Éco-citoyen engagé 🚴‍♂️ Protecteur des océans 🌿 Permaculture et jardinage bio 🍃 Ensemble pour un monde meilleur ! 🌍 #ÉchosGeste #ÉcoResponsable'", undefined, [Hobbies.GAMES, Hobbies.BOOK]);
    const userTwo = new AppUser("Jules", "Charles", "User2", "user2@gmail.com", "Paris", "France", 23, "62dee9386ca2fda33380c1bca1026775", "'🌟 Jules | Éco-enthousiaste 🌿🚲 Passionné d'écologie et de vélo 🌱📸 Amateur de photos environnementales 🏞️🌍 Ensemble, protégeons notre belle planète ! #ÉchosGeste #ÉcoResponsable'", undefined, [Hobbies.SPORT, Hobbies.GAMES, Hobbies.TRIPS]);
    const userThree = new AppUser("Marco", "Da Silva", "User3", "user3@gmail.com", "Bordeaux", "France", 42, "a5194a644366b58bb20f78c48508d22e", "'🌟 Bienvenue dans mon univers engagé ! 🌟Marco | 42 ans | Éco - aventurier 🏞️🌿 Passionné de nature et d'écologie 🚲 Cycliste passionné pour une mobilité douce 🌱 Impliqué dans l'agriculture durable 📸 Amateur de photographie environnementale 🗺️ Explorateur de notre belle planète 🌍 Je crois en l'importance de préserver notre environnement pour les générations futures. Suivez-moi dans mes aventures éco-responsables, mes découvertes de nouvelles pratiques agricoles et mes clichés captivants de la nature sauvage. 🌱 Ensemble, agissons pour un avenir plus vert et durable!'", undefined, [Hobbies.COOK, Hobbies.PETS, Hobbies.ART]);
    const userFour = new AppUser("Bénédicte", "Laurain", "User4", "user4@gmail.com", "Tours", "France", 49, "fa2a3c3f183dba350b4bddafa1cf8524", "'🌟 Bénédicte | Éco-activiste 🌿🌍 Cycliste écolo 🚴‍♀️🌱 Amoureuse de la nature 🏞️📸 Photographe environnementale 📷💚 Agissons ensemble pour préserver notre belle planète ! #ÉchosGeste #ÉcoResponsable'", undefined, [Hobbies.MUSIC, Hobbies.TRIPS]);
    const userFive = new AppUser("Cinquième Elément", "Le", "User5", "user5@gmail.com", "Barcelone", "Espagne", 33, "eae52589ff2a43856e1940793161eecc", "", undefined, [Hobbies.MUSIC, Hobbies.TRIPS]);
    await this.repository.save([userOne, userTwo, userThree, userFour, userFive])
  }
}
