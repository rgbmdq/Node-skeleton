import { getAll } from "../models/example";

function getList(req, res) {
  getAll(function(err, result) {
    if (err) {
      return res.status(500).json({
        message: err
      });
    }
    res.status(200).json(result);
  });
}

const _getList = getList;
export { _getList as getList };
