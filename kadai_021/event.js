const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',()=>{
    setTimeout(()=>{
   
    const childList = document.createElement('li');

    childList.textContent = 'ボタンをクリックしました';

    text.appendChild(childList);

    text.textContent = 'ボタンをクリックしました';
    
},2000);    

});