const qs=[
['أي أمر ينشئ جدولًا؟','Which command creates a table?',['CREATE TABLE','INSERT','GRANT','SELECT'],0],
['أي أمر يضيف سجلًا؟','Which command adds a row?',['UPDATE','INSERT','ALTER','REVOKE'],1],
['أي أمر يغيّر بنية الجدول؟','Which command changes table structure?',['ALTER TABLE','UPDATE','MERGE','COMMIT'],0],
['أي أمر يحذف جميع السجلات بسرعة مع بقاء الجدول؟','Which command quickly removes all rows but keeps the table?',['DROP','TRUNCATE','RENAME','GRANT'],1],
['أي أمر يمنح صلاحية؟','Which command gives a privilege?',['REVOKE','GRANT','DELETE','COMMENT'],1],
['ما وظيفة PRIMARY KEY؟','What does a PRIMARY KEY do?',['يسمح بالتكرار','يميز كل سجل','يحذف الجدول','يربط كل الجداول تلقائيًا'],1],
['ما وظيفة FOREIGN KEY؟','What does a FOREIGN KEY do?',['يربط الجداول','ينشئ مستخدمًا','يرتب النتائج','يغيّر النوع'],0],
['أي كائن يعطي أرقامًا متسلسلة؟','Which object generates sequential numbers?',['VIEW','INDEX','SEQUENCE','SYNONYM'],2],
['أي كائن هو استعلام محفوظ؟','Which object is a saved query?',['VIEW','TABLE','SEQUENCE','USER'],0],
['INNER JOIN يعرض ماذا؟','What does INNER JOIN return?',['كل التركيبات','السجلات المتطابقة','أول سجل فقط','الأعمدة فقط'],1],
['CROSS JOIN ينتج ماذا؟','What does CROSS JOIN produce?',['Cartesian product','Matched rows only','No rows','One column'],0],
['أي أمر يلغي صلاحية؟','Which command removes a privilege?',['REVOKE','GRANT','INSERT','ALTER'],0]
];let score=0,answered=new Set();function render(){const lang=localStorage.getItem('lang')||'ar',area=document.getElementById('quizArea');area.innerHTML=qs.map((q,i)=>`<div class="question"><h3>${i+1}. ${lang==='ar'?q[0]:q[1]}</h3><div class="options">${q[2].map((o,j)=>`<button class="option" onclick="answer(${i},${j},this)">${o}</button>`).join('')}</div></div>`).join('');document.getElementById('score').textContent=score}function answer(i,j,b){if(answered.has(i))return;answered.add(i);const all=b.parentElement.children;for(let k=0;k<all.length;k++){all[k].disabled=true;if(k===qs[i][3])all[k].classList.add('correct')}if(j!==qs[i][3])b.classList.add('wrong');else score++;document.getElementById('score').textContent=score}document.addEventListener('DOMContentLoaded',()=>{render();document.getElementById('resetQuiz').onclick=()=>{score=0;answered.clear();render()}});window.addEventListener('languagechange',render);
