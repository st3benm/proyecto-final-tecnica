class final {
    constructor(idTexto, idResultado) {
        this.textarea = document.getElementById(idTexto);   // Conecta el textarea
        this.resultado = document.getElementById(idResultado); // Conecta el div
    }
    contarPalabras() {
        let r = this.textarea.value;
        let r2 = this.resultado
        let cv = 0;
        let enPalabra = false
        for (let c = 0; c < r.length; c++) {
            let p = r[c]
            if (p !== " " && p !== "\n") {
                if (enPalabra === false) {
                    enPalabra = true
                    cv++
                }
            } else {
                if (enPalabra === true) {
                    enPalabra = false
                }
            }

        }
        r2.textContent = (`Numero de palabras: ${cv} `)
    }
    contarSignos() {
        let r = this.textarea.value;
        let r2 = this.resultado
        const signos = ['.', ',', ';', ':', '?', '¿', '¡', '!', '(', ')', '"']
        let cv = 0;
        for (let c = 0; c < r.length; c++) {
            let p = r[c]
            for (let i = 0; i < signos.length; i++) {
                if (p === signos[i]) {
                    cv++
                }
            }
        }
        r2.textContent = (`Hay ${cv} signos de puntuación`)
    }
    contarVocales() {
        let r = this.textarea.value;
        let r2 = this.resultado
        const vocales = ['a', 'e', 'i', 'o', 'u']
        let cv = 0;
        for (let c = 0; c < r.length; c++) {
            let x = r[c].toLowerCase()
            for (let i = 0; i < vocales.length; i++) {
                if (x === vocales[i]) {
                    cv++
                }
            }

        }
        r2.textContent = (`Hay ${cv} vocales`)
    }
    contarConsonantes() {
        let r = this.textarea.value.toLowerCase();
        let r2 = this.resultado
        let cv = 0;
        for (let c = 0; c < r.length; c++) {
            let p = r[c]
            if (p >= 'a' && p <= 'z') {
                if (p !== 'a' && p !== 'e' && p !== 'i' && p !== 'o' && p !== 'u') {
                    cv++
                }

            }
        }
        r2.textContent = (`Hay ${cv} consonantes `)

    }
    contarDigitos() {
        let r = this.textarea.value
        let r2 = this.resultado
        let pila = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let cv = 0;
        for (let c = 0; c < r.length; c++) {
            let p = r[c]
            for (let i = 0; i < pila.length; i++) {
                let x = pila[i]
                if (p >= 0 && p <= 9) {
                    if (p === x) {
                        cv++
                    }

                }
            }
        }
        r2.textContent = (`Hay ${cv} digitos`)
    }

    contarMayuscula() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        let cv = 0;
        let esFalse = true
        for (let c = 0; c < r.length; c++) {
            let p = r[c];
            if (p === " " || p === "\n") {
                esFalse = true
            }
            else {
                if (esFalse && p >= "A" && p <= "Z") {
                    cv++
                }
                esFalse = false
            }
        }
        r2.textContent = `Hay ${cv} palabras que empiezan con mayuscula`;
    }
    contarMinuculas() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        let cv = 0;
        let esFalse = true
        for (let c = 0; c < r.length; c++) {
            let p = r[c]
            if (p === " " || p === "\n") {
                esFalse = true
            } else {
                if (esFalse && p >= 'a' && p <= 'z') {
                    cv++
                }
                esFalse = false
            }
        }
        r2.textContent = (`Hay ${cv} palabras que empiezan con minuscula`)
    }
    contarParrafos() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        let cv = 0;
        for (let c = 0; c < r.length; c++) {
            let p = r[c]
            if (p === "\n") {
                cv++
            }
        }
        cv++;
        r2.textContent = (`Hay ${cv} parrafos`)

    }
    invertirTexto() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        let invertido = "";
        for (let c = r.length - 1; c >= 0; c--) {
            let p = r[c]
            invertido += p

        }
        r2.textContent = (`Texto invertido ${invertido}`)

    }
    contarCaracteres() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        r2.textContent = (`Hay ${r.length} caracteres`)
    }
    buscarpalabra() {
        let texto = this.textarea.value;
        let r2 = this.resultado;
        let palabra = prompt("Ingrese la palabra que quiera buscar");
        let encontrar = false;

        for (let c = 0; c <= texto.length - palabra.length; c++) {
            let coincide = true;

            for (let i = 0; i < palabra.length; i++) {
                if (texto[c + i] !== palabra[i]) {
                    coincide = false;
                }
            }

            if (coincide) {
                encontrar = true;
            }
        }

        if (encontrar) {
            r2.textContent = `Sí existe la palabra "${palabra}" en el texto`;
        } else {
            r2.textContent = `No existe la palabra "${palabra}" en el texto`;
        }
    }
    contarCaracter() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        let cv = 0;
        let caracter = prompt("Ingrese el caracter que quiera buscar");
        for (let c = 0; c < r.length; c++) {
            let p = r[c]
            if (p === caracter) {
                cv++
            }
        }
        if (cv > 0) {
            r2.textContent = (`El caracter ${caracter} existe ${cv} veces en el texto`)
        } else {
            r2.textContent = (`No existe el caracter ${caracter} en el texto`)
        }
    }
    contarPares() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        let cv = 0;
        for (let c = 1; c < r.length; c += 2) {
            cv++;


        }
        r2.textContent = (`Existen ${cv} caracteres que estan en pocisión par `)
    }
    contarImpares() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        let cv = 0
        for (let c = 0; c < r.length; c += 2) {
            cv++

        }
        r2.textContent = (`Hay ${cv} caracteres que estan en posicion impar`)

    }
    añadirTexto() {
        let r = this.textarea.value;
        let r2 = this.resultado;
        let nuevoTexto = "";
        let nuevoTexto2 = "";
        let fragmento = prompt(`Ingrese el fragmento que quiere agregar al texto`)
        for (let c = 0; c < r.length; c++) {
            if (c === 0) {
                nuevoTexto = fragmento+" " + r
            }
            if (c === r.length - 1) {
                nuevoTexto2 = r +" "+ fragmento

            }
        }
      r2.innerHTML = (`<strong>Resultado al inicio:</strong> ${nuevoTexto}<br><br>`)
    r2.innerHTML += (`<strong>Resultado final:</strong> ${nuevoTexto2}`)
}

    }



let analizador = new final("texto", "resultado");

function uno() {
    analizador.contarPalabras();
}
function dos() {
    analizador.contarSignos();
}
function tres() {
    analizador.contarVocales();
}
function cuatro() {
    analizador.contarConsonantes();
}
function cinco() {
    analizador.contarDigitos();
}
function seis() {
    analizador.contarMayuscula();
}
function siete() {
    analizador.contarMinuculas();
}
function ocho() {
    analizador.contarParrafos();
}
function nueve() {
    analizador.invertirTexto();
}
function diez() {
    analizador.contarCaracteres();
}
function once() {
    analizador.buscarpalabra();
}
function doce() {
    analizador.contarCaracter();
}
function trece() {
    analizador.contarPares();
}
function catorce() {
    analizador.contarImpares();
}
function quince() {
    analizador.añadirTexto();
}
function dieciséis() {
    const textarea = document.getElementById('texto');
    const inicio = textarea.selectionStart;
    const fin = textarea.selectionEnd;
    const textoSeleccionado = textarea.value.substring(inicio, fin);
    
    if (textoSeleccionado.length === 0) {
        document.getElementById('resultado').innerHTML = '<strong>⚠️ Error:</strong> Por favor, selecciona una palabra primero';
        return;
    }
    
    const textoNegrita = '**' + textoSeleccionado + '**';
    const textoAntes = textarea.value.substring(0, inicio);
    const textoDespues = textarea.value.substring(fin);
    textarea.value = textoAntes + textoNegrita + textoDespues;
    
    document.getElementById('resultado').innerHTML = '<strong>✓ Hecho:</strong> La palabra "<strong>' + textoSeleccionado + '</strong>" se puso en negrita';
}
function diecisiete() {
    const textarea = document.getElementById('texto');
    const inicio = textarea.selectionStart;
    const fin = textarea.selectionEnd;
    const textoSeleccionado = textarea.value.substring(inicio, fin);
    
    if (textoSeleccionado.length === 0) {
        document.getElementById('resultado').innerHTML = '<strong>⚠️ Error:</strong> Por favor, selecciona una palabra primero';
        return;
    }
    
    const textoTachado = '~~' + textoSeleccionado + '~~';
    const textoAntes = textarea.value.substring(0, inicio);
    const textoDespues = textarea.value.substring(fin);
    textarea.value = textoAntes + textoTachado + textoDespues;
    
    document.getElementById('resultado').innerHTML = '<strong>✓ Hecho:</strong> La palabra "<s>' + textoSeleccionado + '</s>" se tachó';
}