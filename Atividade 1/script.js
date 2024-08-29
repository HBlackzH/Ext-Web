function calcular() {

    var nascimento = document.getElementById('nascimento').value;

    var ano_atual = new Date().getFullYear();

    var ano = ano_atual - nascimento;

    var result;
    if (ano >= 18) {
        result = 'Você é maior de idade.';
    } else {
        result = 'Você é menor de idade.';
    }

    document.getElementById('result').textContent = `Sua idade é ${ano}. ${result}`;
}
