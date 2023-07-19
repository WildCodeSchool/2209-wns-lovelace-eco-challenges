import AppUser, { Hobbies } from "../models/AppUser/AppUser.entity"

export const userOne = new AppUser("Christopher", "Nafrere", "User1", "user1@gmail.com", "Paris", "France", "792fedf21730fd3099dfcdccaada2e38", undefined, [Hobbies.GAMES, Hobbies.BOOK])
export const userTwo = new AppUser("Jules", "Charles", "User2", "user2@gmail.com", "Paris", "France", "62dee9386ca2fda33380c1bca1026775", undefined, [Hobbies.SPORT, Hobbies.GAMES, Hobbies.TRIPS])
export const userThree = new AppUser("Marco", "Da Silva", "User3", "user3@gmail.com", "Bordeaux", "France", "a5194a644366b58bb20f78c48508d22e", undefined, [Hobbies.COOK, Hobbies.PETS, Hobbies.ART])
export const userFour = new AppUser("Bénédicte", "Laurain", "User4", "user4@gmail.com", "Tours", "France", "fa2a3c3f183dba350b4bddafa1cf8524", undefined, [Hobbies.MUSIC, Hobbies.TRIPS])
export const userFive = new AppUser("Cinquième Elément", "Le", "User5", "user5@gmail.com", "Barcelone", "Espagne", "eae52589ff2a43856e1940793161eecc")

