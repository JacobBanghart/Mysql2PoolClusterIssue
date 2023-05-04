import { PoolCluster, createPoolCluster } from "mysql2";

const cluster = createPoolCluster({
  canRetry: true,
  restoreNodeTimeout: 1000,
  removeNodeErrorCount: 5,
});

cluster.add("Node1", {
  uri: "mysql://mysql:mysql@localhost:3306",
  timezone: "+00:00",
});

const node = cluster.of("Node1");

node.query("SELECT 1");
