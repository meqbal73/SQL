(function(){
const detailedLessons = [
{
 id:'database', no:'01', title:'ما هي قاعدة البيانات؟', en:'What is a Database?', icon:'🗄️',
 intro:'قاعدة البيانات هي مكان منظم لتخزين البيانات بحيث نستطيع البحث عنها، تعديلها، ربطها، وتحليلها بسرعة ودقة. ليست مجرد ملف يحفظ معلومات؛ بل نظام ينظم البيانات ويمنع التكرار ويحافظ على العلاقات.',
 diagram:`<div class="diagram-flow"><div>Data</div><span>→</span><div>Database</div><span>→</span><div>SQL</div><span>→</span><div>Information</div></div>`,
 sections:[
  ['الفكرة ببساطة','تخيل جامعة فيها طلاب، مواد، مدرسين، درجات، وجداول. لو حفظنا كل شيء في ملفات عشوائية ستظهر مشاكل: تكرار، صعوبة بحث، اختلاف نسخ، وأخطاء. قاعدة البيانات تجعل كل نوع من البيانات في مكان واضح، ثم تربط هذه الأماكن ببعضها.'],
  ['Data vs Information','Data هي حقائق خام مثل 101 أو Ahmed أو 5000. Information هي معنى ناتج من معالجة البيانات مثل: متوسط رواتب الموظفين 8500. قاعدة البيانات تحفظ Data، و SQL يحولها إلى Information.'],
  ['لماذا لا يكفي Excel؟','Excel جيد للجداول الصغيرة، لكنه لا يكفي عندما يوجد آلاف المستخدمين، صلاحيات، علاقات، أمان، نسخ احتياطي، واستعلامات معقدة. قواعد البيانات صممت لهذا المستوى.']
 ],
 example:`Student_ID | Name | Major\n101        | Ali  | IT\n102        | Sara | CS`,
 mistakes:['وضع كل البيانات في جدول واحد كبير.','عدم استخدام Primary Key.','تكرار نفس المعلومة في أكثر من جدول بدون حاجة.'],
 quiz:['ما الفرق بين Data و Information؟','اذكر مثالًا لنظام يحتاج قاعدة بيانات.']
},
{
 id:'sql-nosql', no:'02', title:'SQL و NoSQL', en:'SQL vs NoSQL', icon:'⚖️',
 intro:'SQL و NoSQL طريقتان لتخزين البيانات. SQL مناسب للبيانات المنظمة والعلاقات الواضحة. NoSQL مناسب للبيانات المرنة أو المتغيرة كثيرًا.',
 diagram:`<div class="compare"><div><h3>SQL</h3><p>Tables / Rows / Columns</p><p>Schema ثابت</p><p>Relations قوية</p><p>Oracle - MySQL - SQL Server</p></div><div><h3>NoSQL</h3><p>Documents / Keys / Graph</p><p>Schema مرن</p><p>Scalability عالية</p><p>MongoDB - Firebase - Redis</p></div></div>`,
 sections:[
  ['SQL','يعتمد على الجداول والصفوف والأعمدة. ممتاز للأنظمة المالية والجامعات والفواتير لأنه يحافظ على العلاقات والقيود والدقة.'],
  ['NoSQL','قد يخزن البيانات كـ Document أو Key-Value أو Graph. مناسب عندما يكون شكل البيانات متغيرًا أو تحتاج توسع سريع.'],
  ['متى أستخدم SQL؟','إذا كانت العلاقات مهمة: طالب يسجل في مواد، عميل يملك فواتير، موظف ينتمي لقسم.'],
  ['متى أستخدم NoSQL؟','إذا كانت البيانات غير ثابتة الشكل مثل JSON مختلف بين المستخدمين أو تطبيق يحتاج قراءة سريعة جدًا وتخزين مرن.']
 ],
 example:`SQL: employees table + departments table linked by department_id\nNoSQL: { name:'Ali', skills:['SQL','JavaScript'] }`,
 mistakes:['اختيار NoSQL فقط لأنه جديد.','استخدام SQL بدون تصميم علاقات صحيح.','اعتقاد أن NoSQL يعني لا توجد استعلامات.'],
 quiz:['متى يكون SQL أفضل؟','اذكر مثالًا على قاعدة Document.']
},
{
 id:'srs', no:'03', title:'وثيقة SRS', en:'Software Requirements Specification', icon:'📄',
 intro:'SRS هي وثيقة توضح ماذا يريد العميل من النظام قبل التصميم والبرمجة. هي الجسر بين الفكرة والتنفيذ، ومنها نبدأ استخراج الكيانات والعلاقات.',
 diagram:`<div class="diagram-flow"><div>Idea</div><span>→</span><div>SRS</div><span>→</span><div>ERD</div><span>→</span><div>Schema</div><span>→</span><div>SQL</div></div>`,
 sections:[
  ['تعريف SRS','اختصار Software Requirements Specification. تحتوي وصف النظام، المستخدمين، الوظائف المطلوبة، القيود، والمتطلبات غير الوظيفية مثل الأداء والأمان.'],
  ['Functional Requirements','هي الأشياء التي يجب أن يفعلها النظام. مثال: يستطيع الموظف إضافة كتاب. يستطيع العضو استعارة كتاب.'],
  ['Non-Functional Requirements','هي جودة النظام: السرعة، الأمان، سهولة الاستخدام، التوفر، قابلية الصيانة. مثال: صفحة البحث تظهر خلال أقل من ثانيتين.'],
  ['من SRS إلى ERD','إذا قالت الوثيقة: العضو يستعير كتابًا، نستخرج MEMBER و BOOK و BORROW ونحدد العلاقة بينهم.']
 ],
 example:`Requirement: The employee can register a borrow transaction.\nEntities: EMPLOYEE, MEMBER, BOOK, BORROW`,
 mistakes:['البدء بالبرمجة قبل فهم المتطلبات.','كتابة متطلبات عامة جدًا.','خلط functional مع non-functional.'],
 quiz:['ما فائدة SRS؟','كيف تساعد SRS في رسم ERD؟']
},
{
 id:'erd', no:'04', title:'مخطط ERD بالتفصيل', en:'Entity Relationship Diagram', icon:'🧩',
 intro:'ERD هو الرسم الذي يوضح كيانات النظام وصفاتها والعلاقات بينها. قبل أن تبني جداول SQL، ترسم ERD حتى تعرف ماذا ستخزن وكيف ستربط البيانات.',
 diagram:`<div class="erd-box"><div class="entity"><b>DEPARTMENT</b><span># department_id</span><span>department_name</span></div><div class="rel">1 ─────── N<br><small>has / works for</small></div><div class="entity"><b>EMPLOYEE</b><span># employee_id</span><span>employee_name</span><span>* department_id FK</span></div></div><div class="erd-box"><div class="entity"><b>STUDENT</b><span># student_id</span><span>name</span></div><div class="rel">M ── ENROLLMENT ── N</div><div class="entity"><b>COURSE</b><span># course_id</span><span>course_name</span></div></div>`,
 sections:[
  ['Entity - الكيان','شيء مهم في النظام ونحتاج نخزن عنه بيانات. مثل STUDENT أو EMPLOYEE أو PRODUCT. غالبًا يتحول الكيان إلى جدول.'],
  ['Attribute - الخاصية','معلومة تصف الكيان. مثال STUDENT لديه student_id و name و phone. غالبًا تتحول الخاصية إلى عمود.'],
  ['Primary Key - المفتاح الأساسي','عمود أو أكثر يميز كل صف عن غيره. لا يتكرر ولا يكون فارغًا. مثل student_id.'],
  ['Foreign Key - المفتاح الأجنبي','عمود يربط جدولًا بجدول آخر. مثال department_id داخل EMPLOYEE يشير إلى DEPARTMENT.'],
  ['Cardinality - الكارديناليتي','تحدد نوع العلاقة: 1:1 أو 1:N أو M:N. وهي أهم شيء قبل التحويل إلى Schema.'],
  ['Weak Entity - الكيان الضعيف','كيان لا يملك هوية كاملة وحده، مثل DEPENDENT الذي يعتمد على EMPLOYEE.']
 ],
 example:`Library ERD:\nMEMBER 1 --- N BORROW N --- 1 BOOK\nEMPLOYEE 1 --- N BORROW`,
 mistakes:['رسم Many-to-Many بدون جدول وسيط.','استخدام الاسم كمفتاح أساسي.','نسيان تحديد Cardinality.','خلط Entity مع Attribute.'],
 quiz:['لماذا نحتاج جدول وسيط في M:N؟','ما الفرق بين PK و FK؟']
},
{
 id:'erd-to-schema', no:'05', title:'تحويل ERD إلى Schema خطوة بخطوة', en:'ERD to Relational Schema Mapping', icon:'🔁',
 intro:'هذا الدرس هو المقصود بقواعد التحويل: كيف نأخذ ERD مثل مثال COMPANY ونحوله إلى جداول فعلية: EMPLOYEE, DEPARTMENT, PROJECT, DEPENDENT, EMP_PROJECT, DE_LOCATION. سنمشي خطوة بخطوة مثل الصورة والمخطط في ملفك.',
 diagram:`<div class="mapping-visual"><div class="map-row"><div class="map-label">ERD</div><div class="rel-arrow"></div></div><div class="map-row"><div class="map-label">Entities</div><div>EMPLOYEE - DEPARTMENT - PROJECT - DEPENDENT</div></div><div class="map-row"><div class="map-label">Relations</div><div>WORKS_FOR - MANAGES - CONTROLS - WORKS_ON - SUPERVISION - DEPENDENTS_OF</div></div><div class="map-row"><div class="map-label">Schema</div><div>Tables + Columns + PK + FK</div></div></div>`,
 sections:[
  ['الخطوة 1: الكيانات القوية تتحول إلى جداول','كل Entity قوي يتحول إلى Table. في مثال COMPANY عندنا: EMPLOYEE و DEPARTMENT و PROJECT. نبدأ بها لأنها مستقلة ولها مفاتيح خاصة.'],
  ['الخطوة 2: الخصائص البسيطة تتحول إلى أعمدة','خصائص EMPLOYEE مثل Ssn و Bdate و Address و Salary و Sex تصبح أعمدة. خصائص PROJECT مثل Name و Number و Location تصبح أعمدة.'],
  ['الخطوة 3: الخاصية المركبة Composite','خاصية Name في EMPLOYEE مركبة وتتفرع إلى Fname و Minit و Lname. عند التحويل لا نخزن Name ككتلة واحدة إذا نحتاج أجزاءه، بل نخزن Fname, Minit, Lname كأعمدة.'],
  ['الخطوة 4: الخاصية المفتاحية تصبح Primary Key','Ssn في EMPLOYEE يصبح PK. Number في DEPARTMENT يصبح PK. Number في PROJECT يصبح PK. المفتاح الأساسي يحدد كل صف بشكل فريد.'],
  ['الخطوة 5: الخاصية متعددة القيم Multivalued تصبح جدولًا جديدًا','Locations في DEPARTMENT متعددة القيم؛ القسم قد يكون له أكثر من موقع. لذلك لا نضعها كعمود واحد داخل DEPARTMENT. ننشئ جدول DE_LOCATION يحتوي Dnumber و Location، ويكون المفتاح غالبًا مركبًا منهما.'],
  ['الخطوة 6: الخاصية المشتقة Derived لا نخزنها غالبًا','Number_of_employees خاصية مشتقة لأنها تحسب من عدد الموظفين المرتبطين بالقسم. الأفضل لا نخزنها حتى لا تتعارض مع البيانات، بل نحسبها باستعلام COUNT.'],
  ['الخطوة 7: علاقة 1:N نضع FK في جهة N','WORKS_FOR بين DEPARTMENT و EMPLOYEE: القسم الواحد لديه عدة موظفين، والموظف يعمل في قسم واحد. لذلك نضع Dnumber داخل EMPLOYEE كـ FK يشير إلى DEPARTMENT(Number).'],
  ['الخطوة 8: علاقة 1:1 نضع FK في أحد الجدولين ومعها صفة العلاقة','MANAGES بين EMPLOYEE و DEPARTMENT علاقة 1:1 تقريبًا. نضع Mgr_ssn داخل DEPARTMENT لأنه كل قسم له مدير واحد. صفة Start_date التابعة للعلاقة تصبح أيضًا داخل DEPARTMENT باسم Mgr_start_date.'],
  ['الخطوة 9: علاقة 1:N بين DEPARTMENT و PROJECT','CONTROLS: القسم الواحد يشرف على عدة مشاريع، والمشروع تابع لقسم واحد. لذلك نضع Dnumber داخل PROJECT كـ FK يشير إلى DEPARTMENT(Number).'],
  ['الخطوة 10: علاقة تكرارية Recursive','SUPERVISION تربط EMPLOYEE بنفسه: موظف مشرف وموظف تحت إشرافه. نضيف Super_ssn داخل EMPLOYEE كـ FK يشير إلى EMPLOYEE(Ssn).'],
  ['الخطوة 11: علاقة M:N تتحول إلى جدول وسيط','WORKS_ON بين EMPLOYEE و PROJECT علاقة M:N. الموظف يعمل على عدة مشاريع والمشروع يضم عدة موظفين. لذلك ننشئ EMP_PROJECT وفيه Essn و Pnumber و Hours. المفتاح الأساسي يكون (Essn, Pnumber).'],
  ['الخطوة 12: الكيان الضعيف Weak Entity','DEPENDENT كيان ضعيف لا يملك مفتاحًا مستقلًا كاملًا. يعتمد على EMPLOYEE. لذلك جدول DEPENDENT يحتوي Essn كـ FK و Dependent_name كمفتاح جزئي، ويصبح المفتاح الأساسي المركب (Essn, Dependent_name).']
 ],
 extra:`<section class="deep-block info"><h3>الشكل النهائي للجداول من مثال COMPANY</h3><div class="schema-grid"><div class="schema-table"><h4>EMPLOYEE</h4><code>SSN PK\nFname\nMinit\nLname\nBdate\nAddress\nSalary\nSex\nSuper_ssn FK → EMPLOYEE.SSN\nDnumber FK → DEPARTMENT.Number</code></div><div class="schema-table"><h4>DEPARTMENT</h4><code>Number PK\nName\nMgr_ssn FK → EMPLOYEE.SSN\nMgr_start_date</code></div><div class="schema-table"><h4>PROJECT</h4><code>Number PK\nName\nLocation\nDnumber FK → DEPARTMENT.Number</code></div><div class="schema-table"><h4>DEPENDENT</h4><code>Essn FK → EMPLOYEE.SSN\nDependent_name\nSex\nBirth_date\nRelationship\nPK(Essn, Dependent_name)</code></div><div class="schema-table"><h4>EMP_PROJECT</h4><code>Essn FK → EMPLOYEE.SSN\nPnumber FK → PROJECT.Number\nHours\nPK(Essn, Pnumber)</code></div><div class="schema-table"><h4>DE_LOCATION</h4><code>Dnumber FK → DEPARTMENT.Number\nLocation\nPK(Dnumber, Location)</code></div></div></section><section class="deep-block"><h3>ملخص قواعد التحويل السريعة</h3><table class="mini-table"><tr><th>في ERD</th><th>في Schema</th></tr><tr><td>Strong Entity</td><td>Table</td></tr><tr><td>Simple Attribute</td><td>Column</td></tr><tr><td>Composite Attribute</td><td>Columns للأجزاء المهمة</td></tr><tr><td>Multivalued Attribute</td><td>Table جديد</td></tr><tr><td>Derived Attribute</td><td>لا تخزن غالبًا، تحسب باستعلام</td></tr><tr><td>1:N Relationship</td><td>FK في جهة N</td></tr><tr><td>1:1 Relationship</td><td>FK في أحد الجدولين + صفات العلاقة</td></tr><tr><td>M:N Relationship</td><td>جدول وسيط</td></tr><tr><td>Weak Entity</td><td>جدول بمفتاح مركب: مفتاح المالك + المفتاح الجزئي</td></tr></table></section>`,
 example:`CREATE TABLE employee (\n  ssn NUMBER PRIMARY KEY,\n  fname VARCHAR2(30),\n  minit CHAR(1),\n  lname VARCHAR2(30),\n  bdate DATE,\n  address VARCHAR2(100),\n  salary NUMBER(10,2),\n  sex CHAR(1),\n  super_ssn NUMBER REFERENCES employee(ssn),\n  dnumber NUMBER\n);\n\nCREATE TABLE dependent (\n  essn NUMBER REFERENCES employee(ssn),\n  dependent_name VARCHAR2(50),\n  sex CHAR(1),\n  birth_date DATE,\n  relationship VARCHAR2(30),\n  PRIMARY KEY (essn, dependent_name)\n);\n\nCREATE TABLE emp_project (\n  essn NUMBER REFERENCES employee(ssn),\n  pnumber NUMBER,\n  hours NUMBER(5,2),\n  PRIMARY KEY (essn, pnumber)\n);`,
 mistakes:['تحويل M:N إلى FK واحد فقط بدل جدول وسيط.','تخزين الخاصية متعددة القيم داخل عمود واحد مثل “Jeddah,Riyadh”.','تخزين الخاصية المشتقة Number_of_employees بدل حسابها.','نسيان صفة العلاقة مثل Hours أو Start_date.','نسيان المفتاح المركب في الكيان الضعيف.'],
 quiz:['أين نضع FK في علاقة 1:N؟','كيف نحول Multivalued Attribute؟','لماذا DEPENDENT يحتاج مفتاحًا مركبًا؟','لماذا WORKS_ON تتحول إلى EMP_PROJECT؟']
},
{
 id:'schema', no:'06', title:'Schema والجداول', en:'Schema and Tables', icon:'🏗️',
 intro:'Schema هي مساحة تنظيمية داخل قاعدة البيانات تحتوي الجداول والعناصر الأخرى. في Oracle يوجد مثال مشهور اسمه HR Schema وفيه EMPLOYEES و DEPARTMENTS و JOBS.',
 diagram:`<div class="tree"><b>Oracle Database</b><ul><li>HR Schema<ul><li>EMPLOYEES</li><li>DEPARTMENTS</li><li>JOBS</li><li>LOCATIONS</li></ul></li><li>Sales Schema</li><li>Finance Schema</li></ul></div>`,
 sections:[
  ['Database vs Schema','Database هي النظام الكبير الذي يخزن كل شيء. Schema مثل مساحة داخل قاعدة البيانات تحتوي كائنات مستخدم معين مثل الجداول والفهارس والعروض.'],
  ['Table','الجدول يخزن نوعًا واحدًا من البيانات. EMPLOYEES يخزن الموظفين، و DEPARTMENTS يخزن الأقسام.'],
  ['Row','الصف يمثل سجلًا واحدًا. في EMPLOYEES كل صف يعني موظف واحد.'],
  ['Column','العمود يمثل نوع معلومة. مثل first_name أو salary أو hire_date.'],
  ['Constraint','قيد يحمي البيانات من الأخطاء مثل PK و FK و NOT NULL و UNIQUE.']
 ],
 example:`EMPLOYEES(employee_id, first_name, last_name, salary, department_id)\nDEPARTMENTS(department_id, department_name)`,
 mistakes:['اعتبار Schema نفس Table.','وضع كل النظام في جدول واحد.','عدم ربط الجداول بالمفاتيح الأجنبية.'],
 quiz:['ما الفرق بين Table و Schema؟','ما معنى Row؟']
},
{
 id:'select', no:'07', title:'SELECT البدائي', en:'Basic SELECT', icon:'💻',
 intro:'SELECT هو أول أمر في SQL. وظيفته استرجاع البيانات من جدول. هو لا يغير البيانات؛ فقط يعرضها.',
 diagram:`<div class="sql-map"><span>SELECT</span><span>columns</span><span>FROM</span><span>table</span><span>;</span></div>`,
 sections:[
  ['الصيغة الأساسية','نكتب SELECT ثم الأعمدة المطلوبة، ثم FROM ثم اسم الجدول. الفاصلة المنقوطة ; تعني نهاية الأمر في أدوات كثيرة.'],
  ['استخدام النجمة *','النجمة تعني عرض كل الأعمدة. مفيدة للتعلم، لكن في العمل الأفضل تحديد الأعمدة المطلوبة.'],
  ['اختيار أعمدة محددة','بدل SELECT * نكتب SELECT first_name, salary FROM employees لعرض عمودين فقط.'],
  ['Alias','يمكن تغيير اسم العمود في النتيجة باستخدام AS. هذا لا يغير اسم العمود الحقيقي في الجدول.'],
  ['DISTINCT','تستخدم لإزالة التكرار من النتائج مثل عرض أرقام الأقسام بدون تكرار.']
 ],
 example:`SELECT *\nFROM employees;\n\nSELECT first_name, last_name, salary\nFROM employees;\n\nSELECT DISTINCT department_id\nFROM employees;`,
 mistakes:['نسيان FROM.','كتابة اسم جدول غير موجود.','استخدام * دائمًا في التقارير النهائية.'],
 quiz:['ماذا تعني * في SELECT؟','هل SELECT يغير البيانات؟']
},
{
 id:'where-order', no:'08', title:'WHERE و ORDER BY', en:'WHERE and ORDER BY', icon:'🔎',
 intro:'WHERE يفلتر الصفوف، و ORDER BY يرتب النتيجة. هذا يجعل الاستعلام أكثر فائدة من عرض كل البيانات.',
 diagram:`<div class="diagram-flow"><div>FROM</div><span>→</span><div>WHERE</div><span>→</span><div>SELECT</div><span>→</span><div>ORDER BY</div></div>`,
 sections:[
  ['WHERE','تعرض الصفوف التي تحقق شرطًا معينًا. مثال: الموظفون الذين رواتبهم أكبر من 10000.'],
  ['Operators','يمكن استخدام = و > و < و >= و <= و <>. مثال department_id = 60.'],
  ['AND و OR','AND يعني كل الشروط يجب أن تكون صحيحة. OR يعني يكفي شرط واحد صحيح.'],
  ['ORDER BY','يرتب النتائج تصاعديًا ASC أو تنازليًا DESC. الافتراضي غالبًا ASC.'],
  ['الترتيب المنطقي','الفلترة تحدث قبل الترتيب: FROM ثم WHERE ثم SELECT ثم ORDER BY.']
 ],
 example:`SELECT last_name, salary\nFROM employees\nWHERE salary > 10000\nORDER BY salary DESC;`,
 mistakes:['وضع ORDER BY قبل WHERE.','نسيان علامات النصوص مثل last_name = \'King\'.','استخدام = مع NULL بدل IS NULL.'],
 quiz:['ما وظيفة WHERE؟','ما الفرق بين ASC و DESC؟']
},
{
 id:'functions', no:'09', title:'الدوال الأساسية في Oracle SQL', en:'Basic Oracle SQL Functions', icon:'🧮',
 intro:'الدوال تساعدنا نعدل شكل البيانات أو نحسب قيمة جديدة أثناء العرض. في Oracle توجد دوال نصية ورقمية وتاريخية.',
 diagram:`<div class="diagram-flow"><div>Input</div><span>→</span><div>Function</div><span>→</span><div>Output</div></div>`,
 sections:[
  ['Single-row Functions','دوال تعمل على كل صف وترجع نتيجة لكل صف مثل UPPER(last_name) أو ROUND(salary).'],
  ['Character Functions','LOWER و UPPER و INITCAP و LENGTH و SUBSTR و INSTR. تستخدم لمعالجة النصوص.'],
  ['Number Functions','ROUND يقرب الرقم، TRUNC يقطع بدون تقريب، MOD يرجع باقي القسمة.'],
  ['Date Functions','SYSDATE يرجع تاريخ ووقت النظام، MONTHS_BETWEEN يحسب الفرق بالشهور، ADD_MONTHS يضيف شهورًا.'],
  ['Nesting Functions','يمكن وضع دالة داخل دالة مثل UPPER(SUBSTR(last_name,1,3)).']
 ],
 example:`SELECT UPPER(last_name), LENGTH(last_name)\nFROM employees;\n\nSELECT ROUND(45.926, 2), TRUNC(45.926, 2)\nFROM dual;\n\nSELECT SYSDATE\nFROM dual;`,
 mistakes:['خلط ROUND و TRUNC.','نسيان ترتيب معاملات الدالة.','استخدام دوال النصوص مع أرقام بدون فهم التحويل.'],
 quiz:['ما الفرق بين ROUND و TRUNC؟','ماذا ترجع SYSDATE؟']
}
];

const lessonListEl = document.getElementById('lessonList');
const lessonReaderEl = document.getElementById('lessonReader');
const lessonSearchEl = document.getElementById('lessonSearch');

function getLesson(id){return detailedLessons.find(x=>x.id===id)||detailedLessons[0];}
function copyLessonText(text){navigator.clipboard?.writeText(text).catch(()=>{});}
window.copyLessonText = copyLessonText;
function renderList(filter=''){
 const q=filter.trim().toLowerCase();
 const data=detailedLessons.filter(l=>(l.title+' '+l.en+' '+l.intro).toLowerCase().includes(q));
 lessonListEl.innerHTML=data.map(l=>`<button class="lesson-link" data-id="${l.id}"><b>${l.no}</b><span>${l.icon} ${l.title}<small>${l.en}</small></span></button>`).join('');
 document.querySelectorAll('.lesson-link').forEach(b=>b.onclick=()=>{location.hash=b.dataset.id;renderReader(b.dataset.id);});
}
function escapeHtml(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function renderReader(id){
 const l=getLesson(id);
 document.querySelectorAll('.lesson-link').forEach(b=>b.classList.toggle('active',b.dataset.id===l.id));
 lessonReaderEl.innerHTML=`
 <div class="lesson-hero"><span class="lesson-icon">${l.icon}</span><div><p class="eyebrow">LESSON ${l.no}</p><h2>${l.title}</h2><p>${l.intro}</p></div></div>
 <div class="lesson-diagram">${l.diagram}</div>
 <div class="lesson-sections">${l.sections.map((s,i)=>`<section class="deep-block"><h3><span class="step-badge">${i+1}</span>${s[0]}</h3><p>${s[1]}</p></section>`).join('')}</div>
 ${l.extra||''}
 <section class="deep-block"><h3>مثال عملي</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyLessonText(this.nextElementSibling.innerText)">Copy</button><pre>${escapeHtml(l.example)}</pre></div></section>
 <section class="deep-block warn"><h3>أخطاء شائعة</h3><ul>${l.mistakes.map(m=>`<li>${m}</li>`).join('')}</ul></section>
 <section class="deep-block"><h3>تأكد من فهمك</h3><ol>${l.quiz.map(q=>`<li>${q}</li>`).join('')}</ol></section>
 <div class="lesson-actions"><button class="btn primary" id="doneLesson">علّم الدرس كمكتمل</button><a class="btn ghost" href="playground.html">افتح المحاكي</a></div>`;
 const done=document.getElementById('doneLesson');
 if(localStorage.getItem('lesson_'+l.id)==='1') done.textContent='الدرس مكتمل ✅';
 done.onclick=()=>{localStorage.setItem('lesson_'+l.id,'1');done.textContent='تم حفظ إنجازك ✅';};
 window.scrollTo({top:0,behavior:'smooth'});
}
renderList();renderReader(location.hash.replace('#','')||'database');
if (lessonSearchEl) { lessonSearchEl.addEventListener('input', function(e){ renderList(e.target.value); }); }
window.addEventListener('hashchange',()=>renderReader(location.hash.replace('#','')));
})();
