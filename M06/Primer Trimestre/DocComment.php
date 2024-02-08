<?php
/**
 * Da el resultado de la suma de dos números.
 *
 * Esta función toma dos varianles que representan sus
 *  números como parámetros y devuelve su suma.
 *
 * @param int $numero1 Primer número.
 * @param int $numero2 Segundo número.
 * @return int El resultado de la suma.
 */
function sumar($numero1, $numero2) {
    $resultado = $numero1 + $numero2;
    return $resultado;
}

/**
 * Ejemplo de uso de la función sumar.
 *
 * Se definen dos variables que representan los numeros, se llama a la función sumar
 *  y se muestra por pantalla el resultado.
 */
$valor1 = 5;
$valor2 = 10;


$suma = sumar($valor1, $valor2);



echo "La suma de $valor1 y $valor2 es: $suma";
?>



