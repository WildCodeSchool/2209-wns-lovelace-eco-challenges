# Operation Collections

_For gql requests_

## Features

| Challenge               | Team              |
| :---------------------- | :---------------- |
| GetChallenges           | GetTeams          |
| GetChallengesByCategory | GetTeamsByCity    |
| GetChallengesByLevel    | GetTeamsByCountry |
| CreateChallenge         | GetTeamByName     |
| UpdateChallengeDates    | CreateTeam        |
| UpdateChallengePremium  | UpdateTeam        |
| DeleteChallenge         | DeleteTeam        |

## Challenges

### Get all challenges

```
query GetChallenges {
    challenges {
        id
        challengeName
        description
        level
        category
        startsAt
        endAt
        img
    }
}
```

---

---

### Get challenges by category

```
query GetChallengesByCategory($category: [Category!]!) {
  challengeByCategory(category: $category) {
    id
    challengeName
    description
    level
    startsAt
    endAt
    img
    category
  }
}
```

| Parameter  | Type     | Description                                                                          |
| :--------- | :------- | :----------------------------------------------------------------------------------- |
| `category` | `[enum]` | [CARPOOLING, WASTE, WATER, ELECTRICITY, MEAT, PROTECTSNATURE, SELFSUFFICIENCY, LESS] |

---

---

### Get challenges by level

```
query GetChallengesByLevel($level: Level!) {
  challengeByLevel(level: $level) {
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

| Parameter | Type   | Description                             |
| :-------- | :----- | :-------------------------------------- |
| `level`   | `enum` | EASY, MODERATE, CHALLENGING, SUPERGREEN |

---

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

---

### Update all challenge - _premium_

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

---

---

## Teams

### Get all Teams

```
query GetTeams {
  teams {
    id
    teamName
    isPublic
    city
    country
    img
  }
}
```

---

---

### Get teams by city

```
query GetTeamsByCity($city: String!) {
  teamsByCity(city: $city) {
    id
    teamName
    isPublic
    country
    city
    img
  }
}
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `city`    | `string` |             |

---

---

### Get teams by country

```
query GetTeamsByCountry($country: String!) {
  teamsByCountry(country: $country) {
    id
    teamName
    isPublic
    city
    country
    img
  }
}
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `country` | `string` |             |

---

---

### Get teams by Name

```
query GetTeamByName($teamName: String!) {
  teamByName(teamName: $teamName) {
    id
    teamName
    isPublic
    country
    city
    img
    challenges {
      id
      challengeName
    }
  }
}
```

| Parameter  | Type     | Description |
| :--------- | :------- | :---------- |
| `teamName` | `string` |             |

---

---

### Create a new team

```
mutation CreateTeam($teamName: String!, $city: String!, $country: String!, $isPublic: Boolean!, $img: String) {
  createTeam(teamName: $teamName, city: $city, country: $country, isPublic: $isPublic, img: $img) {
    teamName
    city
    country
    isPublic
    img
  }
}
```

| Parameter  | Type      | Description  |
| :--------- | :-------- | :----------- |
| `teamName` | `string`  | **required** |
| `city`     | `string`  | **required** |
| `country`  | `string`  | **required** |
| `isPublic` | `boolean` | **required** |
| `img`      | `string`  |              |

---

---

### Update a team

```
mutation UpdateTeam($teamName: String!, $city: String!, $country: String!, $isPublic: Boolean!, $Id: ID!, $img: String) {
  updateTeam(teamName: $teamName, city: $city, country: $country, isPublic: $isPublic, id: $Id, img: $img) {
    id
    teamName
    isPublic
    img
    country
    city
  }
}
```

| Parameter  | Type      | Description  |
| :--------- | :-------- | :----------- |
| `Id`       | `uuid`    | **required** |
| `teamName` | `string`  | **required** |
| `city`     | `string`  | **required** |
| `country`  | `string`  | **required** |
| `isPublic` | `boolean` | **required** |
| `img`      | `string`  |              |

---

---

### Delete a team

```
mutation DeleteTeam($Id: String!) {
  deleteTeam(id: $Id) {
    id
    teamName
  }
}
```

| Parameter | Type   | Description  |
| :-------- | :----- | :----------- |
| `id`      | `uuid` | **required** |

---

---

---
