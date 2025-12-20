function status(request, response) {
  response.status(200).json({
    chave: "Funcionando ação!",
  });
}

export default status;
