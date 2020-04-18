import { query } from "../../database";

class Example {
  constructor(field1) {
    this.field1 = field1;
  }
  static getAll(cb) {
    query("SELECT field1 FROM example_table", cb);
  }
  static add(data, cb) {
    var sqlQuery = `INSERT INTO example_table (field1)
    VALUES ('${data.field1}')`;
    query(sqlQuery, cb);
  }
}

export default Example;
