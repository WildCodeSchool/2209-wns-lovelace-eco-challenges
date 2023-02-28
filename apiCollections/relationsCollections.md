# Relations Collection

_For gql requests_

## Features

- AddChallengeToteam
- GetUserToTeams
- CreateUserToTeam (without invitation -> in progress)

---

### Add a challenge to a team

```
mutation AddChallengeToTeam($challengeId: String!, $teamId: String!) {
  addChallengeToTeam(challengeId: $challengeId, teamId: $teamId) {
    teamName
    id
    isPublic
    ...
    challenges {
      challengeName
      id
      description
      category
      level
      startsAt
      endAt
      img
    }
  }
}
```

| Parameter     | Type     | Description |
| :------------ | :------- | :---------- |
| `challengeId` | `string` | uuid        |
| `teamId`      | `string` | uuid        |

---

### Get User to Team

```
query GetUserToTeams {
  userToTeams {
    id
    user {
      id
      firstName
      lastName
      ...
    }
    team {
      id
      teamName
      challenges {
        challengeName
        ...
      }
      ...
    }
    score
    invitation {
      id
      status
      createdAt
    }
    userRole
    disabled
  }
}
```

---

### Create User To Team

```
mutation CreateUserToTeam($teamId: ID!, $userId: ID!, $userRole: UserRole!) {
  createUserToTeam(teamId: $teamId, userId: $userId, userRole: $userRole) {
    team {
      teamName
      ...
    }
    user {
      nickname
      ...
    }
    score
    userRole
  }
}
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `teamId`   | `string` | uuid          |
| `userId`   | `string` | uuid          |
| `userRole` | `enum`   | ADMIN, PLAYER |

---
