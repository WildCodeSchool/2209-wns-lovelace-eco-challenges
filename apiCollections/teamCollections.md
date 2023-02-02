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
query GetTeams($itemsByPage: Int!, $pageNumber: Int!) {
  teams(itemsByPage: $itemsByPage, pageNumber: $pageNumber) {
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
```

| Parameter     | Type     | Description |
| :------------ | :------- | :---------- |
| `itemsByPage` | `number` |             |
| `pageNumber`  | `number` |             |

---

### Get teams by city

```
query GetTeamByCity($city: String!, $itemsByPage: Int!, $pageNumber: Int!) {
  teamsByCity(city: $city, itemsByPage: $itemsByPage, pageNumber: $pageNumber) {
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
```

| Parameter     | Type     | Description |
| :------------ | :------- | :---------- |
| `city`        | `string` |             |
| `itemsByPage` | `number` |             |
| `pageNumber`  | `number` |             |

---

### Get teams by country

```
query GetTeamByCountry($country: String!, $itemsByPage: Int!, $pageNumber: Int!) {
  teamsByCountry(country: $country, itemsByPage: $itemsByPage, pageNumber: $pageNumber) {
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
```

| Parameter     | Type     | Description |
| :------------ | :------- | :---------- |
| `country`     | `string` |             |
| `itemsByPage` | `number` |             |
| `pageNumber`  | `number` |             |

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
    userToTeams {
      userRole
      ...
      user {
        nickname
        city
        ...
      }
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
