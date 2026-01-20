test("GET to /api/v1/status should return 200", async () => {
  // Capturando o retorno da API
  const response = await fetch("http://localhost:3000/api/v1/status");

  // Status HTTP
  expect(response.status).toBe(200);
  const responseBody = await response.json();

  // Estrutura basica
  // BeDefined: Testa de o valor existe.
  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.version_db).toBeDefined();

  //HaveProperty: Testa se a propriedade existe no Objeto, ou seja, não funciona em strings. Está validando a estrutura da resposta.
  expect(responseBody).toHaveProperty("version_db");
  expect(responseBody).toHaveProperty("max_connections");
  expect(responseBody).toHaveProperty("status_activity");

  // Match: Testa o conteudo, garante que realmente veio uma versão do Postgres, não um texto qualquer.
  expect(responseBody.version_db).toMatch(/^\d+(\.\d+)?$/);

  // Updated_at deve ser uma ISO Date válida
  const parsedUpdatedAt = new Date(responseBody.updated_at);
  expect(parsedUpdatedAt.toISOString()).toBe(responseBody.updated_at);

  // Tipos esperados
  expect(typeof responseBody.version_db).toBe("string");
  expect(typeof responseBody.max_connections).toBe("string");
  expect(typeof responseBody.status_activity).toBe("string");
});
