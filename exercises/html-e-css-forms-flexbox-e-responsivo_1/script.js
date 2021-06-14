function createStates() {
    let estadosDoBrasil = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO'];
    let estados = document.getElementById('estados');
    
for (let index = 0; index < estadosDoBrasil.length; index += 1) {
  let option = document.createElement('option');
  estados.appendChild(option).innerText = estadosDoBrasil[index];
  estados.appendChild(option).value = estadosDoBrasil[index];
  }
}

createStates();

