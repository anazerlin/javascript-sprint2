// Variáveis para armazenar os inputs
let nameInput, emailInput, recyclingInput, energyInput;

// Função para realizar a validação e processamento dos dados
function processForm(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obter os valores dos inputs
  nameInput = document.getElementById('name').value;
  emailInput = document.getElementById('email').value;
  recyclingInput = document.getElementById('recycling').value;
  energyInput = document.getElementById('energy').value;

  // Realizar validação dos dados
  if (!nameInput || !emailInput) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Realizar buscas e comparações de elementos
  // Aqui você pode adicionar a lógica de busca e comparação desejada com base nos valores dos inputs
  if (recyclingInput === 'sim') {
    console.log('O usuário participa da coleta seletiva.');
  } else {
    console.log('O usuário não participa da coleta seletiva.');
  }

  if (energyInput === 'sim') {
    console.log('O usuário utiliza fontes de energia renovável.');
  } else {
    console.log('O usuário não utiliza fontes de energia renovável.');
  }

  // Exemplo de saída dos valores dos inputs
  console.log('Nome:', nameInput);
  console.log('Email:', emailInput);
  console.log('Telefone:', telefoneInput);
  

  // Limpar os campos do formulário
  document.getElementById('sustainabilityForm').reset();
}

// Adicionar um evento de envio ao formulário
document.getElementById('sustainabilityForm').addEventListener('submit', processForm);
