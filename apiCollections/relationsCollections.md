# Relations Collection

_For gql requests_

## Features

- AddChallengeToteam
- GetUserToTeams

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
