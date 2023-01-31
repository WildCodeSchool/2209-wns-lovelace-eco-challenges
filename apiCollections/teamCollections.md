# Team Collections

_For gql requests_

## Features

- GetTeams
- GetTeamsByCity
- GetTeamsByCountry
- GetTeamByName
- CreateTeam
- UpdateTeam
- DeleteTeam

---

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
    challenges {
      id
      challengeName
      description
      category
      startsAt
      endAt
      level
      img
    }
  }
}
```

---

### Get teams by city

```
query GetTeamByCity($city: String!) {
  teamsByCity(city: $city) {
    id
    teamName
    isPublic
    country
    city
    img
    challenges {
      id
      challengeName
      ...
    }
  }
}
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `city`    | `string` |             |

---

### Get teams by country

```
query GetTeamByCountry($country: String!) {
  teamsByCountry(country: $country) {
    id
    teamName
    isPublic
    city
    country
    img
    challenges {
      id
      challengeName
      ...
    }
  }
}
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `country` | `string` |             |

---

### Get team by Name

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
      ...
    }
  }
}
```

| Parameter  | Type     | Description |
| :--------- | :------- | :---------- |
| `teamName` | `string` |             |

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
