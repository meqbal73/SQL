const detailedLessons = [
{
 id:'database', no:'01', title:'ما هي قاعدة البيانات؟', en:'What is a Database?', icon:'🗄️',
 intro:'قاعدة البيانات هي مكان منظم لتخزين البيانات بحيث نستطيع البحث عنها وتعديلها وتحليلها بسرعة وبدقة. الفكرة ليست مجرد حفظ معلومات، بل تنظيمها بطريقة تمنع التكرار وتساعد النظام على استخراج الإجابات.',
 sections:[
  ['الفكرة ببساطة','تخيل جامعة فيها طلاب، مواد، درجات، مدرسين، وجداول. لو حفظنا كل شيء في ملفات Word أو Excel عشوائية ستظهر مشاكل: تكرار، صعوبة بحث، اختلاف نسخ، وأخطاء. قاعدة البيانات تحل المشكلة لأنها تجعل كل نوع من البيانات في جدول واضح، وكل جدول مرتبط بالجداول الأخرى.'],
  ['Data vs Information','البيانات Data هي حقائق خام مثل: 101، Ahmed، 5000. المعلومات Information هي معنى ناتج من معالجة البيانات مثل: عدد الطلاب الناجحين 85%. إذن قاعدة البيانات تحفظ البيانات، و SQL يساعدنا نحولها إلى معلومات مفيدة.'],
  ['لماذا لا نستخدم Excel فقط؟','Excel ممتاز للجداول الصغيرة، لكنه ليس مناسبًا لأنظمة كبيرة فيها آلاف المستخدمين، صلاحيات، علاقات، أمان، نسخ احتياطي، واستعلامات معقدة. قواعد البيانات مصممة لهذا المستوى.'],
  ['أمثلة واقعية','نظام بنك يحفظ العملاء والحسابات والعمليات. نظام مستشفى يحفظ المرضى والمواعيد والأطباء. نظام متجر يحفظ المنتجات والعملاء والفواتير. كل هذه تحتاج قاعدة بيانات.']
 ],
 diagram:`<div class="diagram-flow"><div>Data</div><span>→</span><div>Database</div><span>→</span><div>SQL</div><span>→</span><div>Information</div></div>`,
 example:`Student_ID | Name | Major\n101        | Ali  | IT\n102        | Sara | CS`,
 mistakes:['خلط كل البيانات في جدول واحد كبير.','عدم استخدام مفاتيح Primary Key.','تكرار نفس المعلومة في أكثر من مكان بدون حاجة.'],
 quiz:['ما الفرق بين Data و Information؟','اذكر مثالًا على نظام يحتاج قاعدة بيانات.']
},
{
 id:'sql-nosql', no:'02', title:'SQL و NoSQL', en:'SQL vs NoSQL', icon:'⚖️',
 intro:'SQL و NoSQL طريقتان مختلفتان لتخزين البيانات. SQL مناسب عندما تكون البيانات منظمة وعلاقاتها واضحة. NoSQL مناسب عندما تكون البيانات مرنة أو متغيرة كثيرًا أو تحتاج توسع سريع.',
 sections:[
  ['SQL','يعتمد على الجداول Tables والصفوف Rows والأعمدة Columns. مثل Oracle, MySQL, SQL Server. قوي جدًا في العلاقات، التقارير، الأنظمة المالية، أنظمة الجامعات، والفواتير.'],
  ['NoSQL','لا يلتزم دائمًا بشكل الجداول. قد يكون Document مثل MongoDB، أو Key-Value مثل Redis، أو Graph مثل Neo4j. مناسب للتطبيقات التي تتغير بياناتها بسرعة أو تحتاج توسع أفقي كبير.'],
  ['متى أختار SQL؟','إذا عندك علاقات مهمة مثل: طالب يسجل في مواد، عميل يملك فواتير، موظف ينتمي لقسم. إذا تحتاج دقة عالية وقيود وحماية من الأخطاء، SQL غالبًا أفضل.'],
  ['متى أختار NoSQL؟','إذا البيانات غير ثابتة الشكل، مثل ملفات JSON مختلفة بين المستخدمين، أو تطبيق يحتاج سرعة قراءة عالية وتخزين مرن مثل بعض تطبيقات المحادثات والتحليلات.']
 ],
 diagram:`<div class="compare"><div><h3>SQL</h3><p>Tables</p><p>Fixed Schema</p><p>Strong Relations</p><p>Oracle / MySQL</p></div><div><h3>NoSQL</h3><p>Documents / Keys</p><p>Flexible Schema</p><p>High Scalability</p><p>MongoDB / Firebase</p></div></div>`,
 example:`SQL: employees table, departments table, relationship by department_id\nNoSQL: { name:'Ali', skills:['SQL','JavaScript'] }`,
 mistakes:['اختيار NoSQL فقط لأنه جديد.','استخدام SQL بدون تصميم علاقات صحيح.','اعتقاد أن NoSQL يعني لا يوجد Query أبدًا.'],
 quiz:['متى يكون SQL أفضل من NoSQL؟','اذكر مثالًا على قاعدة بيانات Document.']
},
{
 id:'srs', no:'03', title:'وثيقة SRS', en:'Software Requirements Specification', icon:'📄',
 intro:'SRS هي وثيقة توضح ماذا يريد العميل من النظام قبل التصميم والبرمجة. هي الجسر بين الفكرة والتنفيذ، وتمنع سوء الفهم بين العميل والمطور.',
 sections:[
  ['تعريف SRS','اختصار Software Requirements Specification. تحتوي وصف النظام، المستخدمين، الوظائف المطلوبة، القيود، والمتطلبات غير الوظيفية مثل الأداء والأمان.'],
  ['لماذا مهمة؟','لأنها تجعل المطلوب واضحًا. بدل أن يقول العميل “أبغى نظام مكتبة”، نكتب تفاصيل: إضافة كتاب، تسجيل عضو، استعارة، إرجاع، غرامة تأخير، صلاحيات الموظف.'],
  ['Functional Requirements','هي الأشياء التي يجب أن يفعلها النظام. مثال: يستطيع الموظف إضافة كتاب جديد. يستطيع العضو البحث عن كتاب. يستطيع النظام تسجيل عملية استعارة.'],
  ['Non-Functional Requirements','هي جودة النظام: السرعة، الأمان، سهولة الاستخدام، التوفر، قابلية الصيانة. مثال: صفحة البحث تظهر خلال أقل من ثانيتين.'],
  ['من SRS إلى ERD','بعد كتابة المتطلبات نستخرج منها الكيانات. إذا قالت الوثيقة “العضو يستعير كتابًا”، نعرف أن لدينا MEMBER و BOOK و BORROW وعلاقة بينهم.']
 ],
 diagram:`<div class="diagram-flow"><div>Idea</div><span>→</span><div>SRS</div><span>→</span><div>ERD</div><span>→</span><div>Tables</div><span>→</span><div>Code</div></div>`,
 example:`Requirement: The employee can register a new borrow transaction.\nEntities: EMPLOYEE, MEMBER, BOOK, BORROW`,
 mistakes:['البدء بالبرمجة قبل فهم المتطلبات.','كتابة متطلبات عامة جدًا بدون تفاصيل.','خلط المتطلبات الوظيفية وغير الوظيفية.'],
 quiz:['ما الفرق بين Functional و Non-Functional؟','كيف تساعد SRS في رسم ERD؟']
},
{
 id:'erd', no:'04', title:'مخطط ERD بالتفصيل', en:'Entity Relationship Diagram', icon:'🧩',
 intro:'ERD هو رسم يوضح كيانات النظام وصفاتها والعلاقات بينها. قبل بناء الجداول في قاعدة البيانات نرسم ERD حتى نفهم النظام بشكل بصري واضح.',
 sections:[
  ['Entity','الكيان هو شيء مهم في النظام ونحتاج نخزن عنه بيانات. مثل STUDENT، COURSE، EMPLOYEE، PRODUCT. غالبًا يتحول الكيان لاحقًا إلى جدول.'],
  ['Attribute','الصفة هي معلومة تخص الكيان. مثال STUDENT لديه student_id, name, phone. الصفة تتحول غالبًا إلى عمود داخل الجدول.'],
  ['Primary Key','مفتاح يميز كل صف عن غيره. لا يتكرر ولا يكون فارغًا. مثل student_id. وجوده مهم جدًا حتى نستطيع تحديد كل سجل بدقة.'],
  ['Foreign Key','عمود يربط جدولًا بجدول آخر. مثال department_id داخل EMPLOYEE يربط الموظف بالقسم الموجود في جدول DEPARTMENT.'],
  ['One To One','كل سجل في الجدول الأول يرتبط بسجل واحد فقط في الثاني. مثال: شخص واحد له جواز واحد.'],
  ['One To Many','الأكثر استخدامًا. قسم واحد يحتوي عدة موظفين، لكن الموظف ينتمي لقسم واحد.'],
  ['Many To Many','طالب يسجل في عدة مواد، والمادة تحتوي عدة طلاب. لا ننفذها مباشرة كعمودين فقط، بل نستخدم جدول وسيط مثل ENROLLMENT.'],
  ['Cardinality','توضح عدد السجلات الممكنة في العلاقة: واحد، كثير، اختياري، إلزامي. هي التي تساعدك تعرف هل العلاقة 1:1 أو 1:N أو M:N.'],
  ['مثال مكتبة','MEMBER يستعير BOOK من خلال BORROW. هنا BORROW ليس مجرد علاقة، بل جدول مهم لأنه يحتوي تاريخ الاستعارة وتاريخ الإرجاع.']
 ],
 diagram:`<div class="erd-box"><div class="entity"><b>DEPARTMENT</b><span># department_id</span><span>department_name</span></div><div class="rel">1 ──────── N<br><small>has / belongs to</small></div><div class="entity"><b>EMPLOYEE</b><span># employee_id</span><span>employee_name</span><span>* department_id FK</span></div></div><div class="erd-box"><div class="entity"><b>STUDENT</b><span># student_id</span><span>name</span></div><div class="rel">M ── ENROLLMENT ── N</div><div class="entity"><b>COURSE</b><span># course_id</span><span>course_name</span></div></div>`,
 example:`Library ERD:\nMEMBER 1 --- N BORROW N --- 1 BOOK\nEMPLOYEE 1 --- N BORROW`,
 mistakes:['رسم Many-to-Many بدون جدول وسيط.','استخدام الاسم كـ Primary Key.','نسيان تحديد Cardinality.','خلط Entity مع Attribute.'],
 quiz:['لماذا نحتاج جدول وسيط في Many-to-Many؟','ما الفرق بين PK و FK؟']
},
{
 id:'schema', no:'05', title:'Schema والجداول', en:'Schema and Tables', icon:'🏗️',
 intro:'Schema هي مساحة تنظيمية داخل قاعدة البيانات تحتوي الجداول والعناصر الأخرى. في Oracle مثال مشهور هو HR Schema وفيه جداول مثل EMPLOYEES و DEPARTMENTS.',
 sections:[
  ['Database vs Schema','Database هي النظام الكبير الذي يخزن كل شيء. Schema مثل مجلد أو مساحة داخل قاعدة البيانات تحتوي كائنات مستخدم معين مثل الجداول والفهارس والعروض.'],
  ['Table','الجدول يخزن نوعًا واحدًا من البيانات. جدول EMPLOYEES يخزن الموظفين، وجدول DEPARTMENTS يخزن الأقسام.'],
  ['Row','الصف يمثل سجلًا واحدًا. في EMPLOYEES كل صف يعني موظف واحد.'],
  ['Column','العمود يمثل نوع معلومة. مثل first_name أو salary أو hire_date.'],
  ['Constraint','قيد يحمي البيانات من الأخطاء. مثل NOT NULL يمنع الفراغ، و UNIQUE يمنع التكرار، و FK يحافظ على العلاقة.'],
  ['HR Schema','في تدريب Oracle، HR Schema يستخدم للتعلم لأنه يحتوي جداول مترابطة: EMPLOYEES, DEPARTMENTS, JOBS, LOCATIONS, COUNTRIES, REGIONS.']
 ],
 diagram:`<div class="tree"><b>Oracle Database</b><ul><li>HR Schema<ul><li>EMPLOYEES</li><li>DEPARTMENTS</li><li>JOBS</li><li>LOCATIONS</li></ul></li><li>Sales Schema</li><li>Finance Schema</li></ul></div>`,
 example:`EMPLOYEES(employee_id, first_name, last_name, salary, department_id)\nDEPARTMENTS(department_id, department_name)`,
 mistakes:['اعتبار Schema نفس Table.','وضع كل النظام في جدول واحد.','عدم ربط الجداول بالمفاتيح الأجنبية.'],
 quiz:['ما الفرق بين Table و Schema؟','ما معنى Row؟']
},
{
 id:'table-rules', no:'06', title:'قواعد بناء الجدول', en:'Table Design Rules', icon:'📐',
 intro:'تصميم الجدول ليس مجرد اختيار أسماء أعمدة. التصميم الصحيح يمنع التكرار ويسهل الاستعلامات ويحافظ على جودة البيانات.',
 sections:[
  ['Rule 1: اسم واضح','اسم الجدول يجب أن يوضح محتواه. استخدم EMPLOYEE أو EMPLOYEES، وتجنب أسماء غامضة مثل data1 أو info. الأهم أن تكون متسقًا في كل المشروع.'],
  ['Rule 2: Primary Key','كل جدول يحتاج مفتاحًا أساسيًا يميز كل سجل. مثال employee_id. لا تستخدم الاسم أو رقم الجوال كمفتاح أساسي لأنها قد تتغير أو تتكرر.'],
  ['Rule 3: أعمدة محددة','كل عمود يخزن معلومة واحدة فقط. لا تضع الاسم الكامل في عمود واحد إذا كنت تحتاج first_name و last_name منفصلين.'],
  ['Rule 4: Datatype صحيح','اختر نوع البيانات بناءً على طبيعة القيمة. الاسم VARCHAR2، الراتب NUMBER، تاريخ التوظيف DATE.'],
  ['Rule 5: لا تكرر البيانات','إذا كان القسم يتكرر مع كل موظف، اجعل له جدول DEPARTMENTS واربطه بـ department_id بدل تكرار اسم القسم في كل صف.'],
  ['Rule 6: العلاقات واضحة','حدد هل العلاقة واحد لكثير أو كثير لكثير. العلاقة تحدد أين نضع Foreign Key.'],
  ['Rule 7: قيود البيانات','استخدم NOT NULL للحقول الضرورية، UNIQUE للقيم التي لا تتكرر، CHECK للقيم المسموحة، DEFAULT للقيم الافتراضية.']
 ],
 diagram:`<div class="compare"><div><h3>تصميم ضعيف</h3><p>Employee(name, department_name, department_location)</p><p>تكرار اسم القسم والموقع</p></div><div><h3>تصميم أفضل</h3><p>EMPLOYEES(..., department_id)</p><p>DEPARTMENTS(department_id, name, location)</p></div></div>`,
 example:`Good columns:\nemployee_id NUMBER PK\nfirst_name VARCHAR2(50)\nsalary NUMBER(8,2)\nhire_date DATE\ndepartment_id NUMBER FK`,
 mistakes:['اختيار CHAR لكل النصوص.','عدم وضع PK.','تكرار بيانات علاقة يمكن فصلها في جدول.'],
 quiz:['لماذا لا نستخدم name كمفتاح أساسي؟','أين نضع FK في علاقة One-to-Many؟']
},
{
 id:'select', no:'07', title:'SELECT البدائي', en:'Basic SELECT', icon:'💻',
 intro:'SELECT هو أول أمر يتعلمه الطالب في SQL. وظيفته استرجاع البيانات من جدول. لا يغير البيانات، فقط يعرضها.',
 sections:[
  ['الصيغة الأساسية','نكتب SELECT ثم الأعمدة التي نريدها، ثم FROM ثم اسم الجدول. علامة ; تعني نهاية الأمر في أدوات كثيرة مثل SQL Developer و SQL*Plus.'],
  ['استخدام النجمة *','النجمة تعني عرض كل الأعمدة. مفيدة في التعلم، لكن في العمل الأفضل تحدد الأعمدة المطلوبة فقط لتحسين الأداء والوضوح.'],
  ['اختيار أعمدة محددة','بدل SELECT * نكتب SELECT first_name, salary FROM employees; وهذا يعرض عمودين فقط.'],
  ['Alias','يمكن تغيير اسم العمود في النتيجة باستخدام Alias مثل salary AS monthly_salary. هذا لا يغير اسم العمود الحقيقي في الجدول.'],
  ['DISTINCT','تستخدم لإزالة التكرار من النتائج. مثال عرض أرقام الأقسام بدون تكرار.']
 ],
 diagram:`<div class="sql-map"><span>SELECT</span><span>columns</span><span>FROM</span><span>table</span><span>;</span></div>`,
 example:`SELECT *\nFROM employees;\n\nSELECT first_name, last_name, salary\nFROM employees;\n\nSELECT DISTINCT department_id\nFROM employees;`,
 mistakes:['نسيان FROM.','كتابة اسم جدول غير موجود.','استخدام * دائمًا في التقارير النهائية.'],
 quiz:['ماذا تعني * في SELECT؟','هل SELECT يغير البيانات؟']
},
{
 id:'where-order', no:'08', title:'WHERE و ORDER BY', en:'WHERE and ORDER BY', icon:'🔎',
 intro:'بعد أن تعرفنا على SELECT، نحتاج تصفية النتائج وترتيبها. WHERE تختار الصفوف المطلوبة، و ORDER BY يرتب النتائج.',
 sections:[
  ['WHERE','تستخدم لعرض الصفوف التي تحقق شرطًا معينًا. مثال: الموظفون الذين رواتبهم أكبر من 10000.'],
  ['المقارنات','يمكن استخدام =, >, <, >=, <=, <>. مثال department_id = 60.'],
  ['AND و OR','AND يعني كل الشروط يجب أن تكون صحيحة. OR يعني يكفي شرط واحد صحيح.'],
  ['ORDER BY','تستخدم لترتيب النتائج تصاعديًا ASC أو تنازليًا DESC. إذا لم تكتب ASC أو DESC فالافتراضي غالبًا ASC.'],
  ['الفرق المهم','WHERE يحدث قبل عرض النتيجة لأنه يفلتر الصفوف. ORDER BY يحدث في النهاية لأنه يرتب ما تم اختياره.']
 ],
 diagram:`<div class="diagram-flow"><div>FROM</div><span>→</span><div>WHERE</div><span>→</span><div>SELECT</div><span>→</span><div>ORDER BY</div></div>`,
 example:`SELECT last_name, salary\nFROM employees\nWHERE salary > 10000\nORDER BY salary DESC;`,
 mistakes:['وضع ORDER BY قبل WHERE.','نسيان علامات النصوص مثل last_name = \'King\'.','استخدام = مع NULL بدل IS NULL.'],
 quiz:['ما وظيفة WHERE؟','ما الفرق بين ASC و DESC؟']
},
{
 id:'functions', no:'09', title:'الدوال الأساسية في Oracle SQL', en:'Basic Oracle SQL Functions', icon:'🧮',
 intro:'الدوال تساعدنا نعدل شكل البيانات أو نحسب قيمة جديدة أثناء العرض. في Oracle توجد دوال نصية ورقمية وتاريخية، وكثير منها يرجع نتيجة لكل صف.',
 sections:[
  ['Single-row Functions','هي دوال تعمل على كل صف وترجع نتيجة لكل صف. مثل UPPER(last_name) أو ROUND(salary).'],
  ['Character Functions','LOWER يحول النص لصغير، UPPER لكبير، INITCAP يجعل أول حرف كبير، LENGTH يحسب الطول، SUBSTR يقتطع جزءًا من النص.'],
  ['Number Functions','ROUND يقرب الرقم، TRUNC يقطع بدون تقريب، MOD يرجع باقي القسمة.'],
  ['Date Functions','SYSDATE يرجع تاريخ ووقت النظام، MONTHS_BETWEEN يحسب الفرق بالشهور، ADD_MONTHS يضيف شهورًا للتاريخ.'],
  ['Nesting Functions','يمكن وضع دالة داخل دالة. مثال UPPER(SUBSTR(last_name,1,3)) يأخذ أول 3 أحرف ثم يحولها لكبير.']
 ],
 diagram:`<div class="diagram-flow"><div>Input</div><span>→</span><div>Function</div><span>→</span><div>Output</div></div>`,
 example:`SELECT UPPER(last_name), LENGTH(last_name)\nFROM employees;\n\nSELECT ROUND(45.926, 2), TRUNC(45.926, 2)\nFROM dual;\n\nSELECT SYSDATE\nFROM dual;`,
 mistakes:['خلط ROUND و TRUNC.','نسيان أن بعض الدوال تحتاج معاملات بالترتيب الصحيح.','استخدام دوال النصوص مع أرقام بدون فهم التحويل.'],
 quiz:['ما الفرق بين ROUND و TRUNC؟','ماذا ترجع SYSDATE؟']
}
];

const list = document.getElementById('lessonList');
const reader = document.getElementById('lessonReader');
const lessonSearch = document.getElementById('lessonSearch');
function getLesson(id){return detailedLessons.find(x=>x.id===id)||detailedLessons[0]}
function renderList(filter=''){
 const q=filter.trim().toLowerCase();
 const data=detailedLessons.filter(l=>(l.title+' '+l.en+' '+l.intro).toLowerCase().includes(q));
 list.innerHTML=data.map(l=>`<button class="lesson-link" data-id="${l.id}"><b>${l.no}</b><span>${l.icon} ${l.title}</span></button>`).join('');
 document.querySelectorAll('.lesson-link').forEach(b=>b.onclick=()=>{location.hash=b.dataset.id;renderReader(b.dataset.id)});
}
function renderReader(id){
 const l=getLesson(id);
 document.querySelectorAll('.lesson-link').forEach(b=>b.classList.toggle('active',b.dataset.id===l.id));
 reader.innerHTML=`
 <div class="lesson-hero"><span class="lesson-icon">${l.icon}</span><div><p class="eyebrow">LESSON ${l.no}</p><h2>${l.title}</h2><p>${l.intro}</p></div></div>
 <div class="lesson-diagram">${l.diagram}</div>
 <div class="lesson-sections">${l.sections.map((s,i)=>`<section class="deep-block"><h3>${i+1}. ${s[0]}</h3><p>${s[1]}</p></section>`).join('')}</div>
 <section class="deep-block"><h3>مثال عملي</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">Copy</button><pre>${l.example}</pre></div></section>
 <section class="deep-block warn"><h3>أخطاء شائعة</h3><ul>${l.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></section>
 <section class="deep-block"><h3>تأكد من فهمك</h3><ol>${l.quiz.map(q=>`<li>${q}</li>`).join('')}</ol></section>
 <div class="lesson-actions"><button class="btn primary" id="doneLesson">علّم الدرس كمكتمل</button><a class="btn ghost" href="playground.html">افتح المحاكي</a></div>`;
 document.getElementById('doneLesson').onclick=()=>{localStorage.setItem('lesson_'+l.id,'1');document.getElementById('doneLesson').textContent='تم حفظ إنجازك ✅'};
 window.scrollTo({top:0,behavior:'smooth'});
}
renderList();renderReader(location.hash.replace('#','')||'database');
search?.addEventListener('input',e=>renderList(e.target.value));
window.addEventListener('hashchange',()=>renderReader(location.hash.replace('#','')));
