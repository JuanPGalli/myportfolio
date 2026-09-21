import { useEffect, useState } from 'react';

const SEPARATOR = '\u0000';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Efecto máquina de escribir.
 *
 * @param {string | string[]} input  Frase (o lista de frases) a escribir.
 * @param {object}  [options]
 * @param {number}  [options.typeSpeed=70]     ms entre letras al escribir.
 * @param {number}  [options.deleteSpeed=35]   ms entre letras al borrar.
 * @param {number}  [options.pause=2200]       ms de pausa con la frase completa.
 * @param {boolean} [options.loop=false]       Si es true borra y repite; si es false
 *                                             escribe una vez y se queda.
 * @returns {string} el texto acumulado hasta el momento.
 *
 * Las letras se acumulan con `slice(0, n)` sobre un contador local del efecto,
 * así que no dependen de estado viejo ni de que el componente se re-renderice.
 * El efecto sólo se reinicia cuando cambia el CONTENIDO del texto (por ejemplo
 * al cambiar de idioma), no cuando cambia la identidad del array.
 */
export const useTypingText = (
  input,
  { typeSpeed = 70, deleteSpeed = 35, pause = 2200, loop = false } = {},
) => {
  const [text, setText] = useState('');

  // Clave estable: dos arrays con el mismo contenido producen la misma clave.
  const key = (Array.isArray(input) ? input : [input]).filter(Boolean).join(SEPARATOR);

  useEffect(() => {
    const phrases = key ? key.split(SEPARATOR) : [];

    if (phrases.length === 0) {
      setText('');
      return undefined;
    }

    // Accesibilidad: sin animación si el usuario lo pidió en su sistema.
    if (prefersReducedMotion()) {
      setText(phrases[0]);
      return undefined;
    }

    let phraseIndex = 0;
    let charCount = 0;
    let deleting = false;
    let timer;

    setText('');

    const tick = () => {
      const current = phrases[phraseIndex];

      if (!deleting) {
        charCount += 1;
        setText(current.slice(0, charCount));

        if (charCount < current.length) {
          timer = setTimeout(tick, typeSpeed);
          return;
        }

        // Frase completa: si no hay loop y era la última, terminamos acá.
        if (!loop && phraseIndex === phrases.length - 1) return;

        deleting = true;
        timer = setTimeout(tick, pause);
        return;
      }

      charCount -= 1;
      setText(current.slice(0, charCount));

      if (charCount > 0) {
        timer = setTimeout(tick, deleteSpeed);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timer = setTimeout(tick, typeSpeed * 4);
    };

    timer = setTimeout(tick, typeSpeed * 4);

    return () => clearTimeout(timer);
  }, [key, typeSpeed, deleteSpeed, pause, loop]);

  return text;
};
