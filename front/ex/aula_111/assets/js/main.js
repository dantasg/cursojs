// // Função request XHR
// const request = obj => {
//     // Novo obj new XMLHttpRequest
//     const xhr = new XMLHttpRequest();

//     // Abri com opne() e manda os objetos mandados no futuro
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText);

//         } else {
//             obj.error(
//                 xhr.statusText
//                 // { code: xhr.status,
//                 // msg: xhr.statusText}
//             );

//         };

//     });

// };

// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if (tag === 'a') {
//         e.preventDefault();
//         carregaPagina(el);
//     };
// });

// function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     // Aqui mandamos os obj success e error
//     request({
//         method: 'GET',
//         url: href,
//         success(response) {
//             loadResult(response);
//         },
//         error(errorText) {
//             console.log(errorText);
//         }
//     });
// };

// function loadResult (response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// };

// =========================================================================
// Modo de fazer com Promises

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

// document.addEventListener('click', e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();

//     if (tag === 'a') {
//         e.preventDefault();
//         carregaPagina(el);
//     };
// });

// function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     const objConfig = {
//         method: 'GET', 
//         url: href
//     };

//     // Aqui usamos o Promise
//     request(objConfig)
//     .then(response => {
//         loadResult(response);
//     })
//     .catch(error => console.log(error));
// };

// function loadResult (response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// };

// ==============================================================================================
// Mode de fazer com promises, async e await. última com todas as alterações

// Função request XHR
const request = obj => {
    // 1- Colocar tudo dentro da promise
    // 2 - Apagar e modificar os callbacks
    return new Promise((resolve, reject) => {
        // Novo obj new XMLHttpRequest
        const xhr = new XMLHttpRequest();
    
        // Abri com opne() e manda os objetos mandados no futuro
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
    
            } else {
                reje(
                    xhr.statusText
                    // { code: xhr.status,
                    // msg: xhr.statusText}
                );
    
            };

        });

    });

};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    };
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET', 
        url: href
    };

    try {
        // Aqui usamos o Promise
        const response = await request(objConfig);
        loadResult(response);
    } catch (e) {
        console.log(e);
    }
};

function loadResult (response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};
