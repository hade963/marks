const secondLang = document.querySelector('#secondLang');
const fullResult = document.querySelector('#fullResult');
const calculate = document.querySelector('.header .container button');
const show = document.querySelector('.show .container');


calculate.addEventListener('click',()=> { 
  show.innerHTML = "";
  const p2= document.createElement('p');
  const p1 = document.createElement('p');
  const span = document.createElement('span');
  if(!secondLang.value || !fullResult.value) { 
    if(!secondLang.value ){
      let text =document.createTextNode("ادخل مجموع اللغة المستبعدة لتتمكن من حساب مجموع المفاضلة");
      p1.appendChild(text);
      p1.className = 'error';  
      show.appendChild(p1);
    }
    if(!fullResult.value){ 
      let text =document.createTextNode("ادخل المجموع الكلي بلا ديانة لحساب مجموع المفاضلة");
      p2.appendChild(text);
      p2.className = 'error';
      show.appendChild(p2);
    }
  }
  else { 
    const result = +fullResult.value - +secondLang.value;
    p1.appendChild(document.createTextNode('درجة المفاضلة'));
    span.appendChild(document.createTextNode(result));
    show.appendChild(p1);
    show.appendChild(span);
  }
})