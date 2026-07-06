
const lessons=[
{tag:'01',titleAr:'مقدمة Oracle Database',titleEn:'Oracle Database Introduction',descAr:'تعرف على أهداف الدورة وبيئة Oracle SQL Developer و SQL*Plus.',descEn:'Understand course goals and development environments such as Oracle SQL Developer and SQL*Plus.'},
{tag:'02',titleAr:'مفهوم قواعد البيانات العلائقية',titleEn:'Relational Database Concepts',descAr:'الجداول، الصفوف، الأعمدة، العلاقات، المفاتيح الأساسية والأجنبية.',descEn:'Tables, rows, columns, relations, primary keys, and foreign keys.'},
{tag:'03',titleAr:'HR Schema',titleEn:'HR Schema',descAr:'الجداول المستخدمة في التدريب مثل EMPLOYEES و DEPARTMENTS و JOBS.',descEn:'Training tables such as EMPLOYEES, DEPARTMENTS, and JOBS.'},
{tag:'04',titleAr:'SELECT Statement',titleEn:'SELECT Statement',descAr:'استرجاع البيانات من الجداول وعرض الأعمدة المطلوبة.',descEn:'Retrieve table data and display selected columns.'},
{tag:'05',titleAr:'Character Functions',titleEn:'Character Functions',descAr:'LOWER, UPPER, INITCAP, CONCAT, SUBSTR, LENGTH, INSTR.',descEn:'LOWER, UPPER, INITCAP, CONCAT, SUBSTR, LENGTH, and INSTR.'},
{tag:'06',titleAr:'Number & Date Functions',titleEn:'Number & Date Functions',descAr:'ROUND, TRUNC, MOD, SYSDATE, MONTHS_BETWEEN, ADD_MONTHS.',descEn:'ROUND, TRUNC, MOD, SYSDATE, MONTHS_BETWEEN, and ADD_MONTHS.'}
];
const grid=document.getElementById('lessonGrid');function render(){const lang=localStorage.getItem('lang')||'ar';grid.innerHTML=lessons.map((l,i)=>`<article class="lesson-card"><span class="tag">${l.tag}</span><h3>${lang==='ar'?l.titleAr:l.titleEn}</h3><p>${lang==='ar'?l.descAr:l.descEn}</p><a class="btn ghost" href="oracle-practice.html#lab-${i}">${lang==='ar'?'افتح الدرس':'Open lesson'}</a></article>`).join('')}render();window.addEventListener('storage',render);document.getElementById('langToggle')?.addEventListener('click',()=>setTimeout(render,0));
