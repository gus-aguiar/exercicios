import validator from 'validator';
const submit = document.getElementById('submit')
const texto = document.getElementById('text').value
submit.addEventListener('click', (event) =>{event.preventDefault()
    const campos = {
        cpf: validator.isTaxID(texto.value, 'pt-BR'),
        hexColor: validator.isHexColor(texto.value),
        email: validator.isEmail(texto.value),
        uuid: validator.isUUID(texto.value, 4),
        url: validator.isURL(texto.value),
      };
      textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;

})