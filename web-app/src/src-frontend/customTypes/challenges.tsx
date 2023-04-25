export type User = {
    __typename : string;
    nickname: string;
    
};

export type UserToTeams = {
    __typename: string;
    userRole: string;
    user: User;
};

export type ChallengeByIdTeams = {
    __typename: string;
    id: string;
    img: string|null;
    teamName: string;
    userToTeams: UserToTeams[];
};

export type ChallengeById = {
    __typename: string;
    id: string;
    img: string;
    challengeName: string;
    description: string;
    endAt: string;
    level: string;
    startsAt: string;
    teams: ChallengeByIdTeams[];
};