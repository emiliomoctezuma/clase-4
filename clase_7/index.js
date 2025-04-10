document.addEventListener("DOMContentLoaded", () => {
  console.log("Contenido cargado");

  const path = document.querySelector('.line_path');
  const pathLength = path.getTotalLength();

  const path2 = document.querySelector('.lp_2');
  const pathLength2 = path2.getTotalLength();

  // Este lo que hace es asignar el largo del trazo a la máscara
  path.style.strokeDasharray = pathLength;
  // Offset para la máscara
  path.style.strokeDashoffset = pathLength;

  // Este lo que hace es asignar el largo del trazo a la máscara
  path2.style.strokeDasharray = pathLength2;
  // Offset para la máscara
  path2.style.strokeDashoffset = pathLength2;

  // Scrolling
  window.addEventListener('scroll', () => {
    const docElem = document.documentElement;
    const bodyScrollTop = document.body.scrollTop;
    const scrollPercentage = getScrollPercentage(docElem.scrollTop, bodyScrollTop, docElem.scrollHeight, docElem.clientHeight);
    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;

    const drawLength2 = pathLength2 * scrollPercentage;
    path2.style.strokeDashoffset = pathLength2 - drawLength2;
  });

  function getScrollPercentage(dSt, bSt, dSh, dCh){
    const percentage = (dSt + bSt) / (dSh - dCh);
    return percentage; // int
  }

});