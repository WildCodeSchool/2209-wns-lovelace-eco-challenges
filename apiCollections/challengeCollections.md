# Challenge Collections

_For gql requests_

## Features

- GetChallenges
- GetChallengesLight
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
    challengeToTeams {
      id
      startsAt
      endAt
      challenge {
        ...
      }
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
}
```

| Parameter     | Type  | Description  |
| :------------ | :---- | :----------- |
| `itemsByPage` | `int` | **required** |
| `pageNumber`  | `int` | **required** |

---

### Get all challenges without relation or pagination

```
query GetChallengesLight {
  challengesLight {
    challengeName
    id
    level
    category
  }
}
```

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
    challengeToTeams {
      id
      startsAt
      endAt
      challenge {
        ...
      }
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
}

```

| Parameter     | Type     | Description                                                                          |
| :------------ | :------- | :----------------------------------------------------------------------------------- |
| `category`    | `[enum]` | [CARPOOLING, WASTE, WATER, ELECTRICITY, MEAT, PROTECTSNATURE, SELFSUFFICIENCY, LESS] |
| `itemsByPage` | `int`    | **required**                                                                         |
| `pageNumber`  | `int`    | **required**                                                                         |

---

### Get challenges by level

```

query GetChallengeByLevel($level: Level!, $itemsByPage: Int!, $pageNumber: Int!) {
  challengesByLevel(level: $level, itemsByPage: $itemsByPage, pageNumber: $pageNumber) {
    id
    challengeName
    description
    level
    startsAt
    endAt
    img
    category
    challengeToTeams {
      id
      startsAt
      endAt
      challenge {
        ...
      }
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
}

```

| Parameter     | Type   | Description                             |
| :------------ | :----- | :-------------------------------------- |
| `level`       | `enum` | EASY, MODERATE, CHALLENGING, SUPERGREEN |
| `itemsByPage` | `int`  | **required**                            |
| `pageNumber`  | `int`  | **required**                            |

---

### Get a challenge by id

```

query GetChallengeById($id: String!) {
  challengeById(id: $id) {
    id
    challengeName
    description
    level
    startsAt
    endAt
    img
    category
    challengeToTeams {
      id
      startsAt
      endAt
      challenge {
        ...
      }
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
    level
    startsAt
    endAt
    img
    category
    challengeToTeams {
      id
      startsAt
      endAt
      challenge {
        ...
      }
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

mutation UpdateDatesChallenge($id: ID!, $startsAt: DateTime!, $endAt: DateTime) {
    updateDatesChallenge(id: $id, startsAt: $startsAt, endAt: $endAt) {
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

mutation UpdateChallengePremium($challengeName: String!, $level: Level!, $description: String!, $category: [Category!]!, $id: ID!, $startsAt: DateTime, $endAt: DateTime, $img: String) {
updateChallengePremium(challengeName: $challengeName, level: $level, description: $description, category: $category, id: $id, startsAt: $startsAt, endAt: $endAt, img: $img) {
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

mutation DeleteChallenge($id: String!) {
deleteChallenge(id: $id) {
id
challengeName
}
}

```

| Parameter | Type   | Description  |
| :-------- | :----- | :----------- |
| `id`      | `uuid` | **required** |

---
