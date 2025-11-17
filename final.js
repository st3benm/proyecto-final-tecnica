class final {
    constructor(idTexto, idResultado) {
        this.textarea = document.getElementById(idTexto);   // Conecta el textarea
        this.resultado = document.getElementById(idResultado); // Conecta el div
    }
    contarPalabras() {
        let r = this.textarea.value;
        let r2 = this.resultado
        let cv = 0;
        for (let c = 0; c < r.length; c++) {
            let p = r[c]
            if (p !== " " && p[c + 1] !== "") {

            }
        }
        r2.textContent = (`Palabras ${cv}`)
    }
}


