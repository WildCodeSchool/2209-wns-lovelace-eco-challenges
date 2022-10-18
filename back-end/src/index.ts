import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import SchoolRepository from "./models/School/School.repository";
import SkillRepository from "./models/Skill/Skill.repository";
import WilderRepository from "./models/Wilder/Wilder.repository";

import WilderResolver from "./resolvers/Wilder.resolver";
import { buildSchema } from "type-graphql";

const startServer = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [WilderResolver],
    }),
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
  await SkillRepository.initializeRepository();
  await SchoolRepository.initializeRepository();
  await WilderRepository.initializeRepository();

  await SkillRepository.initializeSkills();
  await SchoolRepository.initializeSchools();
  await WilderRepository.initializeWilders();

  console.log(`🚀  Server ready at ${url}`);
};

startServer();
