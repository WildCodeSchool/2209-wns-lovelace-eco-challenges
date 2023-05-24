# Eco Playground

## Development environment

### Integrate with coding tools

Install dependencies on host system to get autocomplete and other IDE features:

```
cd back-end && npm i && cd ..
cd web-app && npm i && cd ..
```

### Run app

At the root, create an `.env` file following the `.env.example` model.

Docker and Docker Compose are required on host system.

Build and start in dev mode:

```
./build-start.dev.sh
```

### Run tests

Back-end:

```
docker compose exec back-end npm run test
```

_with watch:_

```
./run-test.sh
```

Web-app:

```
docker compose exec web-app npm run test
```
