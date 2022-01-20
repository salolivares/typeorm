import "reflect-metadata";
import { createTestingConnections, closeTestingConnections, reloadTestingDatabases } from "../../utils/test-utils";
import { Connection } from "../../../src/connection/Connection";
import { expect } from "chai";
import { User } from "./entity/User";

describe("github issues > #4179 PrimaryGeneratedColumn does not have `transformer` option", () => {

    let connections: Connection[];
    before(async () => connections = await createTestingConnections({
        entities: [__dirname + "/entity/*{.js,.ts}"],
        schemaCreate: true,
        dropSchema: true,
    }));
    beforeEach(() => reloadTestingDatabases(connections));
    after(() => closeTestingConnections(connections));

    it("should call transformer for PrimaryGeneratedColumn", () => Promise.all(connections.map(async connection => {
      const user1 = new User();
      user1.name = "John";
      await connection.manager.save(user1);

      const user2 = new User();
      user2.name = "Joe";
      await connection.manager.save(user2);

      console.log(user1.id, typeof user1.id);
      console.log(user2.id, typeof user2.id);

      expect(user1.id).to.be.equal(BigInt(1));
      expect(user2.id).to.be.equal(BigInt(2));
    })));

    // you can add additional tests if needed

});