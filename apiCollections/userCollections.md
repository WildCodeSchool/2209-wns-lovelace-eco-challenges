# User Collections

_For gql requests_

## Features

- UserByNickname
- UserById

---

### Get user by nickname

```
query UserByNickname($nickname: String!) {
  userByNickname(nickname: $nickname) {
    city
    score
    ...
    userToTeams {
      team {
        teamName
        isPublic
        city
        ...
        challenges {
          challengeName
          ...
        }
      }
      userRole
      ...
    }
  }
}

```

| Parameter  | Type     | Description |
| :--------- | :------- | :---------- |
| `nickname` | `string` |             |

---

### Get user by Id

```
query UserById($id: String!) {
  userById(id: id) {
    nickname
    ...
    userToTeams {
      userRole
      ...
      team {
        teamName
        isPublic
        city
        ...
        challenges {
          challengeName
          endAt
          category
          ...
        }
      }
      score
      ...
    }
  }
}

```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `id`      | `string` | uuid        |

---
