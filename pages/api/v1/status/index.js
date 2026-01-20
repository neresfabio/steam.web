import database from "infra/database.js";

// Desafio: Retorne no JSON efaça os testes
/**
 * 1) Versão do Postgres
 * 2) Conexões máximas
 * 3) Consexões usadas
 */

async function status(request, response) {
  const result = await database.query("SHOW server_version;");
  const versionPost = result.rows[0].server_version;
  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnections = maxConnectionsResult.rows[0].max_connections;
  const statActivityResult = await database.query(
    "SELECT count(*) FROM pg_stat_activity WHERE state = 'active';",
  );
  const statActivity = statActivityResult.rows[0].count;

  const updatedAt = new Date().toISOString();
  response.status(200).json({
    updated_at: updatedAt,
    version_db: versionPost,
    max_connections: maxConnections,
    status_activity: statActivity,
  });
}

export default status;
