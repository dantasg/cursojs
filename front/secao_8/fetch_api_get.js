
// // Função request XHR
// const request = obj => {
//     // 1- Colocar tudo dentro da promise
//     // 2 - Apagar e modificar os callbacks
//     return new Promise((resolve, reject) => {
//         // Novo obj new XMLHttpRequest
//         const xhr = new XMLHttpRequest();
    
//         // Abri com opne() e manda os objetos mandados no futuro
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
    
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
    
//             } else {
//                 reje(
//                     xhr.statusText
//                     // { code: xhr.status,
//                     // msg: xhr.statusText}
//                 );
    
//             };

//         });

//     });

// };

// Toda a função do ex 111, foi resumida a esse código com fetch.

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    };
});

function carregaPagina(el) {
    const href = el.getAttribute('href');
    
    try {
        // Aqui usamos o Promise
        fetch(href)
            .then(response => {
                if(response.status !== 200) throw new Error('Erro 404!')
                return response.text();
            })
            .then(html => loadResult(response))
            .catch(e => console.error(e))
    } catch (e) {
        console.log(e);
    }
};

function loadResult (response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};

// fetch('pagina1.html')
//     .then(resposta => {
//         if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO.');
//         return resposta.text();
//     })
//     .then(html => console.log(html))
//     .catch(e => console.error(e));

// =================================================================
// Agora colocaremos async e await

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    };
});

async function carregaPagina(el) {

    try {
        const href = el.getAttribute('href');
    
        const responde  = await fetch(href);
    
        if(response.status !== 200) throw new Error('Erro 404!')
    
        const html = await responde.text();
    
        carregaPagina(html);
    } catch(e) {
        console.error(e);
    }

};

function loadResult (response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};


// fetch('pagina1.html')
//     .then(resposta => {
//         if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO.');
//         return resposta.text();
//     })
//     .then(html => console.log(html))
//     .catch(e => console.error(e));