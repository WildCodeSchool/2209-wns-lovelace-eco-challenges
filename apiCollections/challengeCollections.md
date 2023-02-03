# Challenge Collections

_For gql requests_

## Features

- GetChallenges
- GetChallengesByCategory
- GetChallengesByLevel
- GetChallengeById
- GetChallengeByName
- CreateChallenge
- UpdateChallengeDates
- UpdateChallengePremium
- DeleteChallenge

---

### Get all challenges

```
query GetChallenges($itemsByPage: Int!, $pageNumber: Int!) {
  challenges(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {
    id
    challengeName
    description
    level
    category
    startsAt
    endAt
    img
    teams {
      id
      teamName
      city
      country
      isPublic
      img
      userToTeams {
        userRole
        ...
        user {
          nickname
          ...
        }
      }
    }
  }
}
```

| Parameter     | Type     | Description |
| :------------ | :------- | :---------- |
| `itemsByPage` | `number` |             |
| `pageNumber`  | `number` |             |

---

### Get challenges by category

```
query GetChallengesByCategory($category: [Category!]!, $itemsByPage: Int!, $pageNumber: Int!) {
  challengesByCategory(category: $category, itemsByPage: $itemsByPage, pageNumber: $pageNumber) {
    id
    challengeName
    description
    level
    startsAt
    endAt
    img
    category
    teams {
      id
      teamName
      city
      country
      isPublic
      img
      userToTeams {
        userRole
        ...
        user {
          nickname
          ...
        }
      }
    }
  }
}
```

| Parameter     | Type     | Description                                                                          |
| :------------ | :------- | :----------------------------------------------------------------------------------- |
| `category`    | `[enum]` | [CARPOOLING, WASTE, WATER, ELECTRICITY, MEAT, PROTECTSNATURE, SELFSUFFICIENCY, LESS] |
| `itemsByPage` | `number` |                                                                                      |
| `pageNumber`  | `number` |                                                                                      |

---

### Get challenges by level

```
query GetChallengeByLevel($level: Level!, $itemsByPage: Int!, $pageNumber: Int!) {
  challengesByLevel(level: $level, itemsByPage: $itemsByPage, pageNumber: $pageNumber) {
    id
    challengeName
    startsAt
    endAt
    level
    description
    category
    img
    teams {
      id
      teamName
      city
      country
      isPublic
      img
      userToTeams {
        userRole
        ...
        user {
          nickname
          ...
        }
      }
    }
  }
}
```

| Parameter     | Type     | Description                             |
| :------------ | :------- | :-------------------------------------- |
| `level`       | `enum`   | EASY, MODERATE, CHALLENGING, SUPERGREEN |
| `itemsByPage` | `number` |                                         |
| `pageNumber`  | `number` |                                         |

---

### Get a challenge by id

```
query GetChallengeById($Id: String!) {
  challengeById(id: $Id) {
    id
    challengeName
    description
    category
    level
    startsAt
    endAt
    teams {
      id
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
  }
}
```

---

### Get a challenge by name

```
query ChallengeByName($challengeName: String!) {
  challengeByName(challengeName: $challengeName) {
    id
    challengeName
    description
    category
    level
    startsAt
    endAt
    img
    teams {
      id
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
  }
}
```

| Parameter       | Type     | Description      |
| :-------------- | :------- | :--------------- |
| `challengeName` | `string` | example: "plage" |

---

### Create a new challenge

```
mutation CreateChallenge($challengeName: String!, $level: Level!, $description: String!, $category: [Category!]!, $startsAt: DateTime, $endAt: DateTime, $img: String) {
  createChallenge(challengeName: $challengeName, level: $level, description: $description, category: $category, startsAt: $startsAt, endAt: $endAt, img: $img) {
    id
    challengeName
    startsAt
    endAt
    level
    description
    category
    img
  }
}
```

| Parameter       | Type       | Description                                                                                       |
| :-------------- | :--------- | :------------------------------------------------------------------------------------------------ |
| `challengeName` | `string`   | **required**                                                                                      |
| `level`         | enum       | **required** EASY, MODERATE, CHALLENGING, SUPERGREEN                                              |
| `description`   | `string`   | **required**                                                                                      |
| `category`      | `[enum]`   | **required** [CARPOOLING, WASTE, WATER, ELECTRICITY, MEAT, PROTECTSNATURE, SELFSUFFICIENCY, LESS] |
| `startsAt`      | `DateTime` |                                                                                                   |
| `endAt`         | `DateTime` |                                                                                                   |
| `img`           | `string`   |                                                                                                   |

---

### Update challenge dates

```
mutation UpdateDatesChallenge($Id: ID!, $startsAt: DateTime!, $endAt: DateTime) {
  updateDatesChallenge(id: $Id, startsAt: $startsAt, endAt: $endAt) {
    id
    startsAt
    endAt
  }
}
```

| Parameter  | Type       | Description  |
| :--------- | :--------- | :----------- |
| `id`       | `uuid`     | **required** |
| `startsAt` | `DateTime` | **required** |
| `endAt`    | `DateTime` |              |

---

### Update challenge - _premium_

```
mutation UpdateChallengePremium($challengeName: String!, $level: Level!, $description: String!, $category: [Category!]!, $Id: ID!, $startsAt: DateTime, $endAt: DateTime, $img: String) {
  updateChallengePremium(challengeName: $challengeName, level: $level, description: $description, category: $category, id: $Id, startsAt: $startsAt, endAt: $endAt, img: $img) {
    id
    challengeName
    startsAt
    endAt
    level
    description
    category
    img
  }
}
```

| Parameter       | Type       | Description                                                                                       |
| :-------------- | :--------- | :------------------------------------------------------------------------------------------------ |
| `id`            | `uuid`     | **required**                                                                                      |
| `challengeName` | `string`   | **required**                                                                                      |
| `level`         | enum       | **required** EASY, MODERATE, CHALLENGING, SUPERGREEN                                              |
| `description`   | `string`   | **required**                                                                                      |
| `category`      | `[enum]`   | **required** [CARPOOLING, WASTE, WATER, ELECTRICITY, MEAT, PROTECTSNATURE, SELFSUFFICIENCY, LESS] |
| `startsAt`      | `DateTime` |                                                                                                   |
| `endAt`         | `DateTime` |                                                                                                   |
| `img`           | `string`   |                                                                                                   |

---

### Delete a challenge

```
mutation DeleteChallenge($Id: String!) {
  deleteChallenge(id: $Id) {
    id
    challengeName
  }
}
```

| Parameter | Type   | Description  |
| :-------- | :----- | :----------- |
| `id`      | `uuid` | **required** |

---
