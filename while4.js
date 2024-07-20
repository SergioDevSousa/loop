
    let votos = {
        a: 0,
        b: 0,
        c: 0
    };

    while (true) {
        let voto = prompt("Digite o candidato (a, b, c) ou 'x' para encerrar a votação:").toLowerCase();

        if (voto === 'x') {
            break;
        } else if (voto === 'a' || voto === 'b' || voto === 'c') {
            votos[voto]++;
            alert("Voto registrado com sucesso.");
        } else {
            alert("Candidato não encontrado.");
        }
    }

    alert(`Resultados da votação:\nCandidato a: ${votos.a} votos\nCandidato b: ${votos.b} votos\nCandidato c: ${votos.c} votos`);



