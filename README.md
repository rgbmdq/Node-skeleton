# Node Skeleton

## Setup
```bash
npm install
```

## Run Test

- Create db `test_db`
- run tests

```bash
NODE_ENV=test npm test
```

## run test with the BD

- Modify`.env.test` file with test DB name
- Create test db on `.env.test` (Just the first time)
- Update `./dbscripts/create-test-db.sql` file wiith creat db script
- Update test
- Run test!

```bash
NODE_ENV=test npm test
```

## Run server

- create `.env` file (copy `.env.test` config and modify)
- Create db on `.env` (Just the first time)
- run server

```bash
node server.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
```
## License
[ISC](https://opensource.org/licenses/ISC)

