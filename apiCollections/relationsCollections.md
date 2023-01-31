# Relations Collection

_For gql requests_

## Features

- AddChallengeToteam

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
