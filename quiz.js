const qs=[
{q:'ما وظيفة SELECT؟',o:['حذف جدول','استرجاع بيانات','إنشاء مستخدم'],a:1},
{q:'في علاقة 1:N أين نضع المفتاح الأجنبي؟',o:['في جهة الواحد','في جهة المتعدد','لا نستخدم FK'],a:1},
{q:'ما الحل الصحيح لعلاقة M:N؟',o:['عمود واحد فقط','جدول وسيط','حذف العلاقة'],a:1},
{q:'ما وظيفة SRS؟',o:['توثيق المتطلبات','ترتيب النتائج','حذف البيانات'],a:0},
{q:'ما معنى Primary Key؟',o:['قيمة تميز كل صف','قيمة تتكرر دائمًا','اسم قاعدة البيانات'],a:0}
];
function draw(){document.getElementById('quizArea').innerHTML=qs.map((x,i)=>`<div class="question"><h3>${i+1}. ${x.q}</h3>${x.o.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}</div>`).join('')}
document.getElementById('submitQuiz').onclick=()=>{let s=0;qs.forEach((q,i)=>{const v=document.querySelector(`input[name=q${i}]:checked`);if(v&&Number(v.value)===q.a)s++});localStorage.setItem('quizScore',s+'/'+qs.length);document.getElementById('quizResult').innerHTML=`<h2>${s}/${qs.length}</h2><p class="note">${s>=4?'🏆 ممتاز':'راجع الدروس ثم حاول مرة ثانية'}</p>`};draw();
