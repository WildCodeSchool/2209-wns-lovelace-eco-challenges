import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { ExpressContext } from "apollo-server-express";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchema } from "type-graphql";

import AppUserResolver from "./resolvers/AppUser/AppUser.resolver";
import TeamResolver from "./resolvers/Team/Team.resolver";

import AppUserRepository from "./models/AppUser/AppUser.repository";
import { getSessionIdInCookie } from "./http-utils";
import AppUser from "./models/AppUser/AppUser.entity";
import { initializeDatabaseRepositories } from "./database/utils";
import TeamRepository from "./models/Team/Team.repository";
import ChallengeRepository from "./models/Challenge/Challenge.repository";
import ChallengeResolver from "./resolvers/Challenge/Challenge.resolver";
import UserToTeamResolver from "./resolvers/UserToTeam/UserToTeam.resolver";
import UserToTeamRepository from "./models/UserToTeam/UserToTeam.repository";


export type GlobalContext = ExpressContext & {
  user: AppUser | null;
};

const startServer = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TeamResolver, AppUserResolver, UserToTeamResolver, ChallengeResolver],
      authChecker: async ({ context }) => {
        return Boolean(context.user);
      },
    }),
    context: async (context: any): Promise<GlobalContext> => {
      const sessionId = getSessionIdInCookie(context);
      const user = !sessionId
        ? null
        : await AppUserRepository.findBySessionId(sessionId);

      return { res: context.res, req: context.req, user };
    },
    csrfPrevention: true,
    cache: "bounded",
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
     **/
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  // The `listen` method launches a web server.
  const { url } = await server.listen();
  await initializeDatabaseRepositories();

  await AppUserRepository.initializeUsers();
  await ChallengeRepository.initializeChallenges();
  await TeamRepository.initializeTeams();
  await UserToTeamRepository.initializeUserToTeam();

  console.log(`🚀  Server ready at ${url}`);
};

startServer();
