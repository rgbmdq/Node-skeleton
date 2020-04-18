import request from "supertest";
import { expect } from "chai";
import server from "../../server";
import { add } from "../../app/models/example";

describe("Example Handler", function() {
  beforeEach(function(done) {
    // Adding two intial examples
    add({ field1: "Example 1" }, function() {
      add({ field1: "Example 2" }, function() {
        done();
      });
    });
  });

  describe("GET /api/examples", function() {
    it("returns an examples list", function(done) {
      request(server)
        .get("/api/examples")
        .end(function(err, res) {
          expect(res.status).to.eq(200);
          expect(res.body.length).to.eq(2);
          expect(res.body[0].field1).to.eq("Example 1");
          expect(res.body[1].field1).to.eq("Example 2");
          done();
        });
    });
  });
});
