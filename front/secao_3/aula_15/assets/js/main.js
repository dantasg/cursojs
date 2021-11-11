const paragrafos = document.querySelector('.paragrafo');
const paragra = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
// console.log(backgroundColorBody)

for (let p of paragra) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}