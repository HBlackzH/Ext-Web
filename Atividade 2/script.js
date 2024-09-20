function calcularSalario() {
    var salario = parseFloat(document.getElementById("salario").value);
    var cargo = document.getElementById("cargo").value;

    var novoSalario;
    var percentual;

    switch (cargo) {
        case 'diretor':
            percentual = 10;
            novoSalario = salario * (1 + percentual / 100);
            break;
        case 'secretario':
            percentual = 20;
            novoSalario = salario * (1 + percentual / 100);
            break;
        case 'operador':
            percentual = 30;
            novoSalario = salario * (1 + percentual / 100);
            break;
        default:
            novoSalario = salario;
            percentual = 0;
            break;
    }

    document.getElementById("resultado").innerHTML = "Novo salário: R$ " + novoSalario.toFixed(2) + " (Aumento de " + percentual + "%)";
}
