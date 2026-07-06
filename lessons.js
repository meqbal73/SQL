const basicLessons = [
  {
    id:'data-db', tag:'B01', level:'BASIC',
    titleAr:'البيانات والمعلومات وقاعدة البيانات', titleEn:'Data, Information, and Database',
    descAr:'ابدأ من الصفر: ما الفرق بين Data و Information؟ ولماذا نحتاج Database بدل ملفات عشوائية أو Excel؟',
    descEn:'Start from zero: the difference between data and information, and why databases are needed instead of random files or spreadsheets.',
    conceptAr:`البيانات هي حقائق خام مثل اسم الطالب أو رقم الفاتورة أو تاريخ التوظيف. المعلومات هي بيانات تم تنظيمها ومعالجتها حتى تصبح مفيدة لاتخاذ قرار. قاعدة البيانات هي مكان منظم لتخزين البيانات بحيث نقدر نبحث ونعدل ونحذف ونربط البيانات ببعضها بطريقة آمنة وسريعة. مثال: اسم العميل وحده Data، لكن تقرير يوضح أكثر العملاء شراءً خلال الشهر يصبح Information.`,
    conceptEn:`Data is raw facts such as a student name, invoice number, or hire date. Information is processed and organized data that helps decision making. A database stores data in an organized way so it can be searched, updated, deleted, and related safely and efficiently.`,
    bulletsAr:['Data = حقائق خام','Information = معنى مفيد مستخرج من البيانات','Database = تخزين منظم وقابل للاستعلام','Database أفضل من Excel عندما تكبر البيانات أو تحتاج صلاحيات وعلاقات'],
    bulletsEn:['Data = raw facts','Information = useful meaning from data','Database = organized searchable storage','A database is better than Excel when data grows or needs permissions and relationships'],
    example:`Student_ID | Student_Name | Major\n101        | Ahmed        | IT\n102        | Sara         | CS`,
    mistakesAr:['اعتبار Excel دائمًا بديلًا لقاعدة البيانات','خلط معنى البيانات بالمعلومات','تخزين كل شيء في جدول واحد بدون تنظيم'],
    quizAr:'ما الفرق الأساسي بين Data و Information؟', quizEn:'What is the main difference between Data and Information?'
  },
  {
    id:'db-types', tag:'B02', level:'BASIC',
    titleAr:'أنواع قواعد البيانات', titleEn:'Database Types',
    descAr:'تعرف على Relational و Document و Key-Value و Graph ومتى تستخدم كل نوع.',
    descEn:'Learn relational, document, key-value, and graph databases and when to use each one.',
    conceptAr:`ليست كل قواعد البيانات بنفس الشكل. قواعد البيانات العلائقية SQL تخزن البيانات في جداول مترابطة، وهي مناسبة للأنظمة التي تحتاج دقة وعلاقات واضحة مثل الجامعة، المستشفى، المحاسبة، والموارد البشرية. قواعد NoSQL تعطي مرونة أكبر، مثل تخزين مستندات JSON أو علاقات شبكية أو بيانات سريعة.`,
    conceptEn:`Not all databases have the same structure. SQL relational databases store data in related tables and are suitable for systems that need accuracy and clear relationships, such as universities, hospitals, accounting, and HR. NoSQL databases provide more flexibility, such as JSON documents, graph relationships, or fast key-value data.`,
    bulletsAr:['Relational: جداول وعلاقات','Document: مستندات JSON مثل MongoDB','Key-Value: مفتاح وقيمة مثل Redis','Graph: علاقات شبكية مثل Neo4j'],
    bulletsEn:['Relational: tables and relationships','Document: JSON-like documents such as MongoDB','Key-Value: key and value such as Redis','Graph: connected relationships such as Neo4j'],
    example:`SQL: STUDENT table + COURSE table\nNoSQL: { name: "Ahmed", skills: ["SQL", "Java"] }`,
    mistakesAr:['اختيار NoSQL فقط لأنه حديث','اختيار SQL بدون فهم العلاقات','عدم معرفة متطلبات المشروع قبل اختيار النوع'],
    quizAr:'أي نوع مناسب أكثر لنظام فواتير بعلاقات واضحة؟', quizEn:'Which type is most suitable for an invoice system with clear relationships?'
  },
  {
    id:'sql-nosql', tag:'B03', level:'BASIC',
    titleAr:'SQL vs NoSQL', titleEn:'SQL vs NoSQL',
    descAr:'مقارنة مفصلة بين SQL و NoSQL من ناحية التخزين، العلاقات، المرونة، والأمثلة.',
    descEn:'A detailed comparison between SQL and NoSQL in storage, relationships, flexibility, and examples.',
    conceptAr:`SQL يعتمد على الجداول والصفوف والأعمدة، ويستخدم لغة SQL للاستعلام. مناسب عندما تكون البيانات منظمة والعلاقات مهمة. NoSQL لا يلتزم دائمًا بجداول ثابتة؛ قد يستخدم Documents أو Key-Value أو Graph. مناسب عندما تحتاج مرونة عالية أو تغير شكل البيانات بسرعة.`,
    conceptEn:`SQL uses tables, rows, and columns and queries data using SQL. It is best when data is structured and relationships matter. NoSQL does not always use fixed tables; it may use documents, key-value pairs, or graphs. It is useful when flexibility is needed and data structure changes quickly.`,
    bulletsAr:['SQL: Schema ثابت، علاقات قوية، ACID','NoSQL: Schema مرن، توسع أفقي، مناسب للبيانات المتغيرة','SQL أمثلة: Oracle, MySQL, PostgreSQL','NoSQL أمثلة: MongoDB, Firebase, Redis, Neo4j'],
    bulletsEn:['SQL: fixed schema, strong relationships, ACID','NoSQL: flexible schema, horizontal scaling, good for changing data','SQL examples: Oracle, MySQL, PostgreSQL','NoSQL examples: MongoDB, Firebase, Redis, Neo4j'],
    example:`SQL:\nSELECT name, salary FROM employees;\n\nNoSQL document:\n{ "name":"Ahmed", "salary":5000, "skills":["SQL"] }`,
    mistakesAr:['قول إن NoSQL أفضل دائمًا','قول إن SQL قديم وغير مستخدم','عدم ربط الاختيار بطبيعة المشروع'],
    quizAr:'متى تختار SQL؟', quizEn:'When should you choose SQL?'
  },
  {
    id:'srs', tag:'B04', level:'BASIC',
    titleAr:'وثيقة SRS', titleEn:'Software Requirements Specification',
    descAr:'شرح مفصل لوثيقة المتطلبات: الهدف، المكونات، Functional و Non-Functional Requirements.',
    descEn:'A detailed explanation of SRS: purpose, components, functional and non-functional requirements.',
    conceptAr:`SRS هي وثيقة تحدد ماذا يجب أن يفعل النظام قبل البدء بالتصميم والبرمجة. فائدتها أنها تمنع سوء الفهم بين العميل والفريق. تحتوي عادة على مقدمة، أهداف النظام، المستخدمين، المتطلبات الوظيفية، المتطلبات غير الوظيفية، القيود، الافتراضات، وحالات الاستخدام.`,
    conceptEn:`An SRS document defines what the system must do before design and development start. It prevents misunderstanding between the client and the team. It usually includes an introduction, system goals, users, functional requirements, non-functional requirements, constraints, assumptions, and use cases.`,
    bulletsAr:['Functional: ماذا يفعل النظام؟ مثل تسجيل الدخول وإضافة فاتورة','Non-Functional: جودة النظام مثل السرعة والأمان وسهولة الاستخدام','SRS تأتي قبل ERD والبرمجة','كل Requirement لازم يكون واضح وقابل للاختبار'],
    bulletsEn:['Functional: what the system does, such as login and create invoice','Non-functional: system quality such as speed, security, and usability','SRS comes before ERD and coding','Each requirement should be clear and testable'],
    example:`FR-01: The system shall allow the admin to add a new product.\nNFR-01: The page should load in less than 3 seconds.`,
    mistakesAr:['كتابة متطلبات عامة جدًا مثل النظام يكون ممتاز','الخلط بين Functional و Non-Functional','البدء بالبرمجة قبل توثيق المتطلبات'],
    quizAr:'هل الأمان Functional أم Non-Functional؟', quizEn:'Is security functional or non-functional?'
  },
  {
    id:'erd', tag:'B05', level:'BASIC',
    titleAr:'ERD مخطط العلاقات بين الكيانات', titleEn:'Entity Relationship Diagram',
    descAr:'Entity, Attribute, Primary Key, Foreign Key, Cardinality، وكيف تحول المتطلبات إلى تصميم.',
    descEn:'Entity, attribute, primary key, foreign key, cardinality, and how to convert requirements into design.',
    conceptAr:`ERD هو رسم يوضح الكيانات داخل النظام والعلاقات بينها. الكيان هو شيء نخزن عنه بيانات مثل Customer أو Product. الصفة هي معلومة داخل الكيان مثل customer_name. المفتاح الأساسي PK يميز كل سجل، والمفتاح الأجنبي FK يربط جدولًا بجدول آخر. Cardinality توضح نوع العلاقة: واحد لواحد، واحد لكثير، أو كثير لكثير.`,
    conceptEn:`An ERD shows system entities and their relationships. An entity is something we store data about, such as Customer or Product. An attribute is a piece of information such as customer_name. A primary key uniquely identifies each record, and a foreign key connects one table to another. Cardinality describes one-to-one, one-to-many, or many-to-many relationships.`,
    bulletsAr:['Entity = جدول محتمل','Attribute = عمود داخل الجدول','PK = قيمة فريدة لكل صف','FK = رابط بين جدولين','Cardinality = نوع العلاقة'],
    bulletsEn:['Entity = potential table','Attribute = column in the table','PK = unique value for each row','FK = link between tables','Cardinality = relationship type'],
    example:`CUSTOMER (customer_id PK, name, phone)\nINVOICE (invoice_id PK, invoice_date, customer_id FK)\nRelationship: CUSTOMER 1 ---- N INVOICE`,
    mistakesAr:['نسيان المفتاح الأساسي','رسم علاقة كثيرة لكثير بدون جدول وسيط','وضع بيانات متكررة بدل فصلها في جدول مستقل'],
    quizAr:'ما العلاقة بين Customer و Invoice غالبًا؟', quizEn:'What is the usual relationship between Customer and Invoice?'
  },
  {
    id:'schema', tag:'B06', level:'BASIC',
    titleAr:'Schema والجداول قبل الإنشاء', titleEn:'Schema and Table Design Before Creation',
    descAr:'افهم Schema، Table، Row، Column، وكيف تخطط الجدول قبل CREATE TABLE.',
    descEn:'Understand schema, table, row, column, and how to plan a table before CREATE TABLE.',
    conceptAr:`Schema هي مساحة أو مالك داخل قاعدة البيانات يحتوي على جداول وكائنات مثل Views و Sequences و Indexes. في Oracle مثال HR Schema يحتوي على EMPLOYEES و DEPARTMENTS و JOBS. قبل إنشاء الجداول لازم نخطط: ما الجداول؟ ما الأعمدة؟ ما نوع كل عمود؟ ما المفتاح الأساسي؟ ما العلاقات؟`,
    conceptEn:`A schema is an owner or logical space inside a database that contains tables and objects such as views, sequences, and indexes. In Oracle, HR schema contains EMPLOYEES, DEPARTMENTS, and JOBS. Before creating tables, plan the tables, columns, datatypes, primary keys, and relationships.`,
    bulletsAr:['Database تحتوي Schemas','Schema تحتوي Tables وكائنات','Table يحتوي Rows و Columns','Row = سجل واحد','Column = نوع معلومة محدد'],
    bulletsEn:['A database contains schemas','A schema contains tables and objects','A table contains rows and columns','Row = one record','Column = a specific type of information'],
    example:`Oracle Database\n└── HR Schema\n    ├── EMPLOYEES\n    ├── DEPARTMENTS\n    ├── JOBS\n    └── LOCATIONS`,
    mistakesAr:['الخلط بين Database و Schema','البدء بكتابة CREATE TABLE قبل فهم العلاقات','حشر كل الأعمدة في جدول واحد'],
    quizAr:'هل HR في Oracle مثال على Schema أم Table؟', quizEn:'Is HR in Oracle an example of a schema or a table?'
  },
  {
    id:'table-rules', tag:'B07', level:'BASIC',
    titleAr:'قواعد بناء الجدول السبعة', titleEn:'Seven Rules for Table Design',
    descAr:'قواعد عملية لبناء جدول صحيح قبل كتابة SQL: أسماء، مفاتيح، أنواع بيانات، علاقات، وتطبيع.',
    descEn:'Practical rules for correct table design before SQL: names, keys, datatypes, relationships, and normalization.',
    conceptAr:`بناء الجدول ليس مجرد إنشاء أعمدة. الجدول الجيد واضح، قابل للتوسع، قليل التكرار، ومترابط بشكل صحيح. القواعد التالية تساعدك تبني جدولًا احترافيًا قبل كتابة CREATE TABLE.`,
    conceptEn:`Table design is not just creating columns. A good table is clear, scalable, low in duplication, and correctly related. These rules help you design professionally before writing CREATE TABLE.`,
    bulletsAr:['1) اسم الجدول واضح ويمثل كيانًا واحدًا','2) كل جدول له Primary Key','3) أسماء الأعمدة واضحة وموحدة','4) اختر Data Type الصحيح','5) لا تكرر البيانات؛ استخدم التطبيع','6) اربط الجداول بـ Foreign Keys','7) أضف Constraints مثل NOT NULL و UNIQUE و CHECK عند الحاجة'],
    bulletsEn:['1) Table name is clear and represents one entity','2) Every table has a primary key','3) Column names are clear and consistent','4) Choose the correct datatype','5) Avoid duplication using normalization','6) Connect tables using foreign keys','7) Add constraints such as NOT NULL, UNIQUE, and CHECK when needed'],
    example:`Good design:\nPRODUCT(product_id PK, product_name, price)\nCUSTOMER(customer_id PK, customer_name, phone)\nINVOICE(invoice_id PK, customer_id FK, invoice_date)`,
    mistakesAr:['اسم عمود مثل x1 أو data','عدم وجود PK','تخزين اسم العميل داخل كل فاتورة بدل customer_id','اختيار CHAR للنصوص المتغيرة الطويلة'],
    quizAr:'لماذا لا نكرر اسم العميل داخل كل فاتورة؟', quizEn:'Why should we not repeat the customer name inside every invoice?'
  },
  {
    id:'basic-select', tag:'B08', level:'BASIC',
    titleAr:'SELECT البدائي من الصفر', titleEn:'Basic SELECT from Zero',
    descAr:'شرح SELECT و FROM و * و ; و Alias و DISTINCT بطريقة بسيطة جدًا.',
    descEn:'A very simple explanation of SELECT, FROM, *, ;, alias, and DISTINCT.',
    conceptAr:`SELECT تستخدم لعرض بيانات من جدول. FROM تحدد الجدول. النجمة * تعني عرض جميع الأعمدة. الفاصلة المنقوطة ; تعني نهاية الأمر في أدوات SQL كثيرة. الأفضل في المشاريع الحقيقية ألا تستخدم * دائمًا، بل تحدد الأعمدة التي تحتاجها فقط.`,
    conceptEn:`SELECT displays data from a table. FROM specifies the table. The star * means all columns. The semicolon ; ends the statement in many SQL tools. In real projects, avoid using * all the time; select only the columns you need.`,
    bulletsAr:['SELECT = اختر الأعمدة التي تريد عرضها','FROM = من أي جدول؟','* = جميع الأعمدة','Alias = اسم مؤقت للعرض','DISTINCT = إزالة التكرار'],
    bulletsEn:['SELECT = choose columns to display','FROM = from which table','* = all columns','Alias = temporary display name','DISTINCT = remove duplicates'],
    example:`SELECT *\nFROM employees;\n\nSELECT first_name, salary\nFROM employees;\n\nSELECT DISTINCT department_id\nFROM employees;`,
    mistakesAr:['نسيان FROM','كتابة اسم جدول غير موجود','استخدام * في التقارير الكبيرة بدون حاجة','نسيان الفاصلة بين الأعمدة'],
    quizAr:'ماذا تعني النجمة * في SELECT؟', quizEn:'What does * mean in SELECT?'
  },
  {
    id:'where-order', tag:'B09', level:'BASIC',
    titleAr:'WHERE و ORDER BY', titleEn:'WHERE and ORDER BY',
    descAr:'فلترة النتائج وترتيبها: أكبر من، أقل من، IN، LIKE، BETWEEN، ASC/DESC.',
    descEn:'Filter and sort results: greater than, less than, IN, LIKE, BETWEEN, ASC/DESC.',
    conceptAr:`WHERE تستخدم لتحديد الصفوف المطلوبة فقط. ORDER BY تستخدم لترتيب الناتج. نستخدم شروط مثل salary > 5000 أو department_id IN (60,90,100). ونستخدم ASC للترتيب التصاعدي و DESC للتنازلي.`,
    conceptEn:`WHERE selects only the required rows. ORDER BY sorts the output. Conditions include salary > 5000 or department_id IN (60,90,100). ASC sorts ascending and DESC sorts descending.`,
    bulletsAr:['WHERE قبل ORDER BY','النصوص توضع بين علامات تنصيص مفردة','IN لاختيار عدة قيم','LIKE للبحث بنمط','BETWEEN بين قيمتين'],
    bulletsEn:['WHERE comes before ORDER BY','Text values use single quotes','IN checks multiple values','LIKE searches by pattern','BETWEEN checks a range'],
    example:`SELECT last_name, salary\nFROM employees\nWHERE salary < 1000\nORDER BY salary DESC;\n\nSELECT *\nFROM employees\nWHERE department_id IN (60, 90, 100);`,
    mistakesAr:['وضع ORDER BY قبل WHERE','نسيان علامات التنصيص مع النص','استخدام = بدل IN مع أكثر من قيمة'],
    quizAr:'أيهما يأتي أولًا: WHERE أو ORDER BY؟', quizEn:'Which comes first: WHERE or ORDER BY?'
  }
];

const oracleLessons = [
  {tag:'O01', titleAr:'مقدمة Oracle Database', titleEn:'Oracle Database Introduction', descAr:'أهداف الدورة وبيئة Oracle SQL Developer و SQL*Plus.', descEn:'Course goals and development environments such as SQL Developer and SQL*Plus.'},
  {tag:'O02', titleAr:'HR Schema', titleEn:'HR Schema', descAr:'EMPLOYEES و DEPARTMENTS و JOBS والجداول المستخدمة في التدريب.', descEn:'EMPLOYEES, DEPARTMENTS, JOBS, and training tables.'},
  {tag:'O03', titleAr:'Single-Row Functions', titleEn:'Single-Row Functions', descAr:'دوال ترجع نتيجة واحدة لكل صف ويمكن دمجها داخل SELECT.', descEn:'Functions that return one result per row and can be used in SELECT.'},
  {tag:'O04', titleAr:'Character Functions', titleEn:'Character Functions', descAr:'LOWER, UPPER, INITCAP, CONCAT, SUBSTR, LENGTH, INSTR.', descEn:'LOWER, UPPER, INITCAP, CONCAT, SUBSTR, LENGTH, and INSTR.'},
  {tag:'O05', titleAr:'Number Functions', titleEn:'Number Functions', descAr:'ROUND, TRUNC, MOD مع أمثلة عملية.', descEn:'ROUND, TRUNC, and MOD with practical examples.'},
  {tag:'O06', titleAr:'Date Functions', titleEn:'Date Functions', descAr:'SYSDATE, MONTHS_BETWEEN, ADD_MONTHS, NEXT_DAY, LAST_DAY.', descEn:'SYSDATE, MONTHS_BETWEEN, ADD_MONTHS, NEXT_DAY, and LAST_DAY.'}
];

const basicGrid=document.getElementById('basicGrid');
const oracleGrid=document.getElementById('oracleGrid');
const detail=document.getElementById('lessonDetail');
const search=document.getElementById('lessonSearch');

function lang(){return localStorage.getItem('lang')||'ar'}
function tr(ar,en){return lang()==='ar'?ar:en}
function card(l, type){return `<article class="lesson-card" data-id="${l.id||''}"><span class="tag">${l.tag} · ${l.level||'ORACLE'}</span><h3>${tr(l.titleAr,l.titleEn)}</h3><p>${tr(l.descAr,l.descEn)}</p><button class="btn ghost open-lesson" data-id="${l.id||''}" data-type="${type}">${tr('افتح الشرح المفصل','Open detailed lesson')}</button></article>`}
function renderCards(){
  const q=(search?.value||'').toLowerCase();
  const filter=l=>`${l.titleAr} ${l.titleEn} ${l.descAr} ${l.descEn}`.toLowerCase().includes(q);
  basicGrid.innerHTML=basicLessons.filter(filter).map(l=>card(l,'basic')).join('');
  oracleGrid.innerHTML=oracleLessons.filter(filter).map(l=>card(l,'oracle')).join('');
  document.querySelectorAll('.open-lesson').forEach(btn=>btn.addEventListener('click',()=>openLesson(btn.dataset.id,btn.dataset.type)));
}
function openLesson(id,type){
  const l= type==='basic' ? basicLessons.find(x=>x.id===id) : oracleLessons.find(x=>x.tag===id);
  if(!l) return;
  if(type==='oracle'){
    detail.innerHTML=`<article class="deep-card"><span class="tag">${l.tag}</span><h2>${tr(l.titleAr,l.titleEn)}</h2><p>${tr(l.descAr,l.descEn)}</p><div class="note">${tr('افتح صفحة العملي لمشاهدة الأمثلة التنفيذية لهذا القسم مع Copy و Run Demo.','Open the Practice page to see executable-style examples for this section with Copy and Run Demo.')}</div><a class="btn primary" href="oracle-practice.html">${tr('اذهب للعملي','Go to practice')}</a></article>`;
  }else{
    detail.innerHTML=`<article class="deep-card" id="detail-${l.id}">
      <div class="detail-head"><span class="tag">${l.tag} · BASIC</span><button class="btn ghost" onclick="localStorage.setItem('completed_${l.id}','1'); this.textContent='${tr('تم الحفظ','Saved')}'">${tr('علّم الدرس كمكتمل','Mark as complete')}</button></div>
      <h2>${tr(l.titleAr,l.titleEn)}</h2>
      <p class="big-text">${tr(l.conceptAr,l.conceptEn)}</p>
      <div class="mini-grid">
        <section class="mini-card"><h3>${tr('النقاط المهمة','Key Points')}</h3><ul>${tr(l.bulletsAr,l.bulletsEn).map(x=>`<li>${x}</li>`).join('')}</ul></section>
        <section class="mini-card"><h3>${tr('مثال','Example')}</h3><pre class="codebox"><code>${escapeHtml(l.example)}</code><button class="copy-btn chip" onclick="copyText(\`${l.example.replace(/`/g,'\\`')}\`)">${tr('نسخ','Copy')}</button></pre></section>
      </div>
      <section class="mini-card"><h3>${tr('الأخطاء الشائعة','Common Mistakes')}</h3><ul>${tr(l.mistakesAr,l.mistakesEn||l.mistakesAr).map(x=>`<li>${x}</li>`).join('')}</ul></section>
      <section class="mini-card"><h3>${tr('سؤال سريع','Quick Quiz')}</h3><p>${tr(l.quizAr,l.quizEn)}</p><button class="btn primary" onclick="this.nextElementSibling.hidden=false">${tr('اعرض تلميح','Show hint')}</button><p hidden class="note">${tr('ارجع للنقاط المهمة واقرأ علاقة المفهوم بالمثال.','Review the key points and connect the concept to the example.')}</p></section>
    </article>`;
  }
  detail.scrollIntoView({behavior:'smooth',block:'start'});
}
function escapeHtml(s){return s.replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
renderCards();
search?.addEventListener('input',renderCards);
document.getElementById('langToggle')?.addEventListener('click',()=>setTimeout(()=>{renderCards(); if(detail.innerHTML) detail.innerHTML='';},0));
