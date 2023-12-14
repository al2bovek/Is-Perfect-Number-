"use strict";
import isPerfect from "./isPerfect.js";
const i_1 = document.querySelector('#i_1');
const i_2 = document.querySelector('#i_2');
const i_3 = document.querySelector('#i_3');
const sp_4 = document.querySelector('#sp_4');

i_1.addEventListener('input', ()=> i_2.value = isPerfect(i_1.value)[1]);
i_1.addEventListener('input', ()=> i_3.value = isPerfect(i_1.value)[2]);
i_1.addEventListener('input', ()=> i_1.value === i_3.value ? sp_4.textContent = 'Yes' : sp_4.textContent = 'Nope');
i_1.addEventListener('input', ()=> i_1.value.length == '' ? i_3.value = 'sum of divisiors' : ' ');
i_1.addEventListener('input', ()=> i_1.value.length == '' ? sp_4.textContent = 'This will be a result.' : '');
i_1.addEventListener('input', ()=> {if(i_1.value[0] == '-' || i_1.value.length > 5) i_2.value = 'Error positive integer maximun five digits only'});
