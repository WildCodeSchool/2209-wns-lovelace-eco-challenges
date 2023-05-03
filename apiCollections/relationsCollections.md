# Relations Collection

_For gql requests_

## Features

- GetUserToTeams
- CreateUserToTeam
- GetChallengeToTeams
- CreateChallengeToTeam

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
      challengeToTeams {
        challenge {
          challengeName
          ...
        }
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

| Parameter  | Type     | Description                |
| :--------- | :------- | :------------------------- |
| `teamId`   | `string` | uuid **required**          |
| `userId`   | `string` | uuid **required**          |
| `userRole` | `enum`   | ADMIN, PLAYER **required** |

---

### Get Challenge to Team

```
query GetChallengeToTeams {
 challengeToTeams {
    id
    startsAt
    endAt
    team {
      teamName
      ...
      userToTeams {
        userRole
        ...
        user {
          nickname
          ...
        }
      }
    }
    challenge {
      challengeName
      ...
    }
  }
}
```

---

### Create User To Team

```
mutation CreateChallengeToTeam($teamId: ID!, $challengeId: ID!, $startsAt: DateTime!, $endAt: DateTime!) {
  createChallengeToTeam(teamId: $teamId, challengeId: $challengeId, startsAt: $startsAt, endAt: $endAt) {
    id
    challenge {
      challengeName
    }
    startsAt
    endAt
    team {
      teamName
    }
  }
}
```

| Parameter     | Type          | Description       |
| :------------ | :------------ | :---------------- |
| `teamId`      | `string`      | uuid **required** |
| `challengeId` | `string`      | uuid **required** |
| `startsAt`    | `timestamptz` | **required**      |
| `endAt`       | `timestamptz` | **required**      |

---
