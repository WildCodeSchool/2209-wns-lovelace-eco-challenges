import AppUser, { Hobbies } from "../models/AppUser/AppUser.entity"
import Challenge, { Category, Level } from "../models/Challenge/Challenge.entity";
import ChallengeToTeam from "../models/ChallengeToTeam/ChallengeToTeam.entity";
import Team from "../models/Team/Team.entity";
import UserToTeam, { UserRole } from "../models/UserToTeam/UserToTeam.entity";

//APP_USERS
export const userOne = new AppUser("Christopher", "Nafrere", "User1", "user1@gmail.com", "Paris", "🌱 Christopher | Éco-citoyen engagé 🚴‍♂️ Protecteur des océans 🌿 Permaculture et jardinage bio 🍃 Ensemble pour un monde meilleur ! 🌍 #ÉchosGeste #ÉcoResponsable", 23, "France", "792fedf21730fd3099dfcdccaada2e38", undefined, [Hobbies.GAMES, Hobbies.BOOK]);

export const userTwo = new AppUser("Jules", "Charles", "User2", "user2@gmail.com", "Paris", "🌟 Jules | Éco-enthousiaste 🌿🚲 Passionné d'écologie et de vélo 🌱📸 Amateur de photos environnementales 🏞️🌍 Ensemble, protégeons notre belle planète ! #ÉchosGeste #ÉcoResponsable", 23, "France", "62dee9386ca2fda33380c1bca1026775", undefined, [Hobbies.SPORT, Hobbies.GAMES, Hobbies.TRIPS]);

export const userThree = new AppUser("Marco", "Da Silva", "User3", "user3@gmail.com", "Bordeaux", "🌟 Bienvenue dans mon univers engagé ! 🌟Marco | 42 ans | Éco - aventurier 🏞️🌿 Passionné de nature et d'écologie 🚲 Cycliste passionné pour une mobilité douce 🌱 Impliqué dans l'agriculture durable 📸 Amateur de photographie environnementale 🗺️ Explorateur de notre belle planète 🌍 Je crois en l'importance de préserver notre environnement pour les générations futures. Suivez-moi dans mes aventures éco-responsables, mes découvertes de nouvelles pratiques agricoles et mes clichés captivants de la nature sauvage. 🌱 Ensemble, agissons pour un avenir plus vert et durable!", 42, "France", "a5194a644366b58bb20f78c48508d22e", undefined, [Hobbies.COOK, Hobbies.PETS, Hobbies.ART]);

export const userFour = new AppUser("Bénédicte", "Laurain", "User4", "user4@gmail.com", "Tours", "🌟 Bénédicte | Éco-activiste 🌿🌍 Cycliste écolo 🚴‍♀️🌱 Amoureuse de la nature 🏞️📸 Photographe environnementale 📷💚 Agissons ensemble pour préserver notre belle planète ! #ÉchosGeste #ÉcoResponsable", 49, "France", "fa2a3c3f183dba350b4bddafa1cf8524", undefined, [Hobbies.MUSIC, Hobbies.TRIPS]);

export const userFive = new AppUser("Cinquième Elément", "Le", "User5", "user5@gmail.com", "Barcelone", "desc", 33, "Espagne", "eae52589ff2a43856e1940793161eecc", undefined, [Hobbies.MUSIC, Hobbies.TRIPS]);


//CHALLENGES
export const challengeOne = new Challenge("Nettoyons nos plages", Level.SUPERGREEN, "Mobilisation nationale pour nettoyer les plages près de chez vous. En équipe ou solo, rejoignez ce challenge sportif en partenariat avec Sea Shepherd France",[Category.PROTECTSNATURE, Category.WASTE],new Date("2023-03-11T09:00:00+0000"),new Date("2023-03-12T12:00:00+0000"),"https://www.wedemain.fr/wp-content/uploads/2020/04/35637228-32170106.jpg"
);
export const challengeTwo = new Challenge("Covoiturage",Level.MODERATE,"Privilégiez vos déplacements en covoiturage! Moins de pollution, réduction des coûts et papotages (ou pas), en partenariat avec BlaBLaCar",[Category.CARPOOLING],
  new Date("2023-02-17T08:00:00+0000"), new Date("2023-02-17T20:00:00+0000"),"https://images.caradisiac.com/images/4/7/9/8/194798/S1-blablacar-attention-aux-arnaques-706768.jpg");

export const challengeThree = new Challenge("Diminuer l'utilisation du plastique",Level.MODERATE,"Refusez systématiquement les sacs en plastique et privilégier les sacs réutilisables, réduire la consommation de bouteille en plastique et utiliser une gourde.",[Category.LESS, Category.WASTE], new Date("2023-02-17T08:00:00+0000"), new Date("2023-02-17T20:00:00+0000"),"https://www.wedemain.fr/wp-content/uploads/2023/03/Shutterstock_1074166649-1-409x320.jpg");

export const challengeFour = new Challenge("Défi du tri séléctif",Level.MODERATE,"Mettez en place un système de tri sélectif chez vous et recyclez tous les matériaux recyclables que vous utilisez.",[Category.WASTE, Category.PROTECTSNATURE],
new Date("2023-02-17T08:00:00+0000"), new Date("2023-02-17T20:00:00+0000"),"https://www.wedemain.fr/wp-content/uploads/2023/07/shutterstock_523272235-870x566.jpg");

export const challengeFive = new Challenge("Je réduis ma consommation de viande 🍖", Level.SUPERGREEN,"'La viande d'élevage est à l'origine de 15% des émissions de gaz à effet de serre' - https://www.geo.fr/environnement/linvestissement-dans-les-alternatives-a-la-viande-delevage-serait-de-loin-la-meilleure-maniere-de-lutter-contre-le-rechauffement-climatique-210808 - Objectif : réduire de moitié sa consommation de viande et pour les plus résilients passer à 2 repas carnés par semaine. Végés, pour vous c'est déjà gagné !", [Category.MEAT, Category.PROTECTSNATURE, Category.LESS], undefined, undefined, "https://assets.letemps.ch/sites/default/files/styles/share/public/2016/08/vache.jpg.jpeg?itok=ov-0XR97"
);

export const challengeSix = new Challenge("Eteignez (presque) tout!",Level.EASY,"Au boulot, à la maison, on éteint les lumières et, lorsque c'est possible, on ne laisse pas les équipements en veille.",[Category.ELECTRICITY, Category.LESS],undefined,undefined,"https://cdn.pixabay.com/photo/2016/10/23/14/06/power-1762996_1280.png",
);

export const challengeSeven = new Challenge("Tous au potager 👨‍🌾",Level.CHALLENGING,"Semez, cultivez, récoltez, mangez, partagez... pas de jardin ? en pot, par le biais d'une association, au coin de la rue, soyons-fou ! Publiez vos réalisations, les plus créatifs seront gagnants",[Category.SELFSUFFICIENCY],new Date("2023-03-26T08:00:00+0000"), undefined, "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.adeo.com%2Fmedia%2F1445228%2Fpp-potager5d6f7c17bfc14b000a983093.jpg%3Fheight%3D465%26quality%3D75&tbnid=9dB_EyTR-hdVBM&vet=12ahUKEwj-4I7u25WAAxUTrycCHbqlDXkQMygHegUIARD5AQ..i&imgrefurl=https%3A%2F%2Fwww.leroymerlin.fr%2Fcomment-choisir%2Ftout-savoir-sur-potager.html&docid=vbYGDd6cgG_kSM&w=621&h=465&q=potager&ved=2ahUKEwj-4I7u25WAAxUTrycCHbqlDXkQMygHegUIARD5AQ"
);

export const challengeEight = new Challenge("Adopte une ruche 🐝",Level.SUPERGREEN,"Pas d'abeilles - pas de pollen, pas de pollen - pas de cultures,  pas de culture - pas de manger, pas de manger = ☠️. Via une association, sur le toit, sur ton balcon, dans ton jardin... deviens petit apiculteur",[Category.PROTECTSNATURE, Category.SELFSUFFICIENCY],undefined,undefined,"https://fr.jardins-animes.com/images/media/mini-ruche-abeille-sauvage.jpg",
);

export const challengeNine = new Challenge("Réduire la consommation d'eau",Level.SUPERGREEN,"Réduisez votre consommation d'eau pendant une semaine en limitant les douches à 5 minutes, en fermant le robinet pendant que vous vous brossez les dents, et en utilisant un arrosoir pour arroser vos plantes.",[Category.PROTECTSNATURE, Category.SELFSUFFICIENCY],undefined,undefined, "https://www.wedemain.fr/wp-content/uploads/2022/09/shutterstock_1665205663-409x320.jpg"
);

//TEAM
export const teamParis = new Team("Team Paris","Paris","France", true)
export const teamBordeaux = new Team("Team Bordeaux","Bordeaux","France", false)
export const teamTours = new Team("Team Tours","TOURS","France", false)
export const teamToulouse = new Team("Team Toulouse","Toulouse","France", false)
export const teamBarcelone = new Team("Team Barcelone","Barcelone","Espagne",true)

//USER_TO_TEAM 
export const userTeamOne = new UserToTeam(teamParis, userOne, UserRole.ADMIN, undefined)
export const userTeamTwo = new UserToTeam(teamParis, userTwo, UserRole.PLAYER, undefined)
export const userTeamThree = new UserToTeam(teamBarcelone, userThree, UserRole.ADMIN, undefined)
export const userTeamFour = new UserToTeam(teamTours, userFour, UserRole.PLAYER, undefined)

//CHALLENGE_TO_TEAM
export const challengeTeamOne = new ChallengeToTeam(teamParis, challengeTwo, new Date("2023-03-11T09:00:00+0000"), new Date("2024-03-11T09:00:00+0000"));
export const challengeTeamTwo = new ChallengeToTeam(teamParis, challengeSix, new Date("2023-05-01T09:00:00+0000"), new Date ("2023-10-01T09:00:00+0000"));
export const challengeTeamThree = new ChallengeToTeam(teamBarcelone, challengeOne, new Date("2023-06-01T09:00:00+0000"), new Date("2023-10-01T09:00:00+0000"));
export const challengeTeamFour = new ChallengeToTeam(teamTours, challengeTwo, new Date("2023-01-01T09:00:00+0000"), new Date("2024-01-01T09:00:00+0000"));