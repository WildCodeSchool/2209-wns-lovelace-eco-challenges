import {
  closeConnection,
  getDatabase,
  initializeDatabaseRepositories,
  truncateAllTables,
} from "../../database/utils";
import AppUserRepository, {
  INVALID_CREDENTIALS_ERROR_MESSAGE,
} from "./AppUser.repository";
import SessionRepository from "./Session.repository";

describe("AppUserRepository integration", () => {

  beforeAll(async () => {
    await initializeDatabaseRepositories();
  });

  afterAll(async () => {
    await truncateAllTables();
  });

  beforeEach(async () => {
    await truncateAllTables();
    await AppUserRepository.initializeUsers();
  });

  describe("signIn", () => {
    describe("when email address does not belong to existing user", () => {

      it("throws invalid credentials error", async () => {
        const email = "unknown@user.com";
        expect(() =>
          AppUserRepository.signIn(email, "whatever")
        ).rejects.toThrowError(INVALID_CREDENTIALS_ERROR_MESSAGE);
      });

      describe("when email address belongs to existing user", () => {
        const email = "jean@user.com";

        describe("when password invalid", () => {
          it("throws invalid credentials error", async () => {
            await AppUserRepository.createUser(
              "john",
              "doe",
              "JohnD",
              email,
              "France",
              "description",
              23,
              "paris",
              "password"
            );

            expect(() =>
              AppUserRepository.signIn(email, "mot-de-passe-incorrect")
            ).rejects.toThrowError(INVALID_CREDENTIALS_ERROR_MESSAGE);
          });
        });

        describe("when password valid", () => {
          it("creates session in database", async () => {
            await AppUserRepository.createUser(
              "John",
              "Doe",
              "JohnD",
              email,
              "Paris",
              "description",
              23,
              "france",
              "password32*"
            );

            await AppUserRepository.signIn(
              email,
              "password32*"
            );

            const sessions = await SessionRepository.repository.find();
            expect(sessions).toHaveLength(1);
            expect(sessions[0].user.email).toEqual(email);
          });

          it("returns user and session", async () => {
            await AppUserRepository.createUser(
              "John",
              "Doe",
              "JohnD",
              email,
              "Paris",
              "description",
              23,
              "france",
              "password32*"
            );

            const result = await AppUserRepository.signIn(
              email,
              "password32*"
            );
            expect(result).toHaveProperty("user");
            expect(result).toHaveProperty("session");
            expect(result.user.email).toEqual(email);
          });
        });
      });
    });
  });
  describe("signOut", () => {
    describe("when passed existing user", () => {
      it("deletes session in database", () => { });
      it("returns user", () => { });
    });
  });
});
