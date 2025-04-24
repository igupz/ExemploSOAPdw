const soap = require('soap');

const url = 'http://localhost:3000/mdc?wsdl';
const largura = 1920;
const altura = 1080;

soap.createClient(url, (err, client) => {
  if (err) return console.error('Erro ao criar cliente SOAP:', err);

  client.CalculateMDC({ x: largura, y: altura }, (err, result) => {
    if (err) return console.error('Erro ao chamar serviço:', err);

    const mdc = result.MDC;
    const aspectX = largura / mdc;
    const aspectY = altura / mdc;

    console.log(`MDC: ${mdc}`);
    console.log(`Aspect Ratio: ${aspectX}:${aspectY}`);
  });
});
