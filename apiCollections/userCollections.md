# User Collections

_For gql requests_

## Features

- UserByNickname
- UserById
- UpdateUser

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
        challengeToTeams {
          startsAt
          endAt
          challenge {
            challengeName
            ...
          }
        }
      }
      userRole
      ...
    }
  }
}

```

| Parameter  | Type     | Description  |
| :--------- | :------- | :----------- |
| `nickname` | `string` | **required** |

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
        challengeToTeams {
          startsAt
          endAt
          challenge {
            challengeName
            ...
          }
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

### Update user

mandatory arguments with ! like : `$appUserId: ID!"`

```
mutation UpdateUser(
  $appUserId: ID!,
  $firstName: String,
  $lastName: String,
  $nickname: String,
  $email: String,
  $city: String,
  $country: String,
  $img: String,
  $hobbies: [Hobbies!]
  ) {
  updateAppUser(
    id: $appUserId,
    firstName: $firstName,
    lastName: $lastName,
    nickname: $nickname,
    email: $email,
    city: $city,
    country: $country,
    img: $img,
    hobbies: $hobbies
    ) {
        here put the modified fields
      }
    }

```

| Parameter   | Type     | Description                                         |
| :---------- | :------- | :-------------------------------------------------- |
| `appUserId` | `uuid`   | **required**                                        |
| `firstName` | `string` |                                                     |
| `lastName`  | `string` |                                                     |
| `nickName`  | `string` |                                                     |
| `email`     | `string` | email                                               |
| `city`      | `string` |                                                     |
| `country`   | `string` |                                                     |
| `img`       | `string` |                                                     |
| `hobbies`   | `[enum]` | [SPORT, TRIPS, MUSIC, ART, BOOK, COOK, GAMES, PETS] |
