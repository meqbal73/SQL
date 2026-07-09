
const detailedLessons = [
{
 id:'database', no:'01', title:'مدخل قواعد البيانات', icon:'🗄️', minutes:'25 دقيقة',
 intro:'هذا الدرس يشرح معنى البيانات وقاعدة البيانات ولماذا نحتاجها قبل الدخول إلى ERD أو SQL.',
 objectives:['تفرق بين Data و Information.','تعرف لماذا نستخدم قاعدة البيانات بدل الملفات العادية.','تفهم معنى Table و Row و Column بصورة مبدئية.'],
 body:`
 <section class="deep-block"><h3>ما هي البيانات؟</h3><p>البيانات هي حقائق خام لم يتم تحليلها بعد، مثل رقم طالب أو اسم موظف أو تاريخ طلب أو سعر منتج. هذه القيم وحدها قد لا تعطي قرارًا، لكنها تصبح مفيدة عندما ننظمها ونربطها ونستخرج منها معنى.</p></section>
 <section class="deep-block"><h3>ما هي قاعدة البيانات؟</h3><p>قاعدة البيانات هي مكان منظم لتخزين البيانات بطريقة تسمح بالبحث، التعديل، الحذف، التحليل، وحماية البيانات من التكرار والفوضى. الفكرة ليست التخزين فقط، بل تنظيم البيانات بطريقة تجعل النظام قادرًا على استخراج إجابات دقيقة.</p></section>
 <div class="lesson-diagram"><div class="diagram-flow"><div>بيانات خام</div><span>←</span><div>تنظيم داخل قاعدة البيانات</div><span>←</span><div>استعلام SQL</div><span>←</span><div>معلومة مفيدة</div></div></div>
 <section class="deep-block info"><h3>مثال جامعة</h3><p>بدل وضع الطلاب والمواد والدرجات في ملف واحد، نقسمها إلى جداول مترابطة: STUDENTS للطلاب، COURSES للمواد، ENROLLMENTS للتسجيل والدرجات.</p></section>
 <div class="schema-grid"><div class="schema-table"><h4>STUDENTS</h4><code>student_id PK\nstudent_name\nmajor</code></div><div class="schema-table"><h4>COURSES</h4><code>course_id PK\ncourse_name\ncredit_hours</code></div><div class="schema-table"><h4>ENROLLMENTS</h4><code>student_id FK\ncourse_id FK\ngrade</code></div></div>`
},
{
 id:'sql-nosql', no:'02', title:'SQL و NoSQL', icon:'⚖️', minutes:'30 دقيقة',
 intro:'قبل اختيار قاعدة البيانات يجب أن تفهم الفرق بين SQL و NoSQL ومتى تستخدم كل نوع.',
 objectives:['تفهم فكرة الجداول والعلاقات في SQL.','تفهم مرونة NoSQL.','تعرف متى تختار SQL ومتى تختار NoSQL.'],
 body:`
 <div class="compare big"><div><h3>SQL</h3><p>يعتمد على الجداول والصفوف والأعمدة والعلاقات. مناسب للأنظمة التي تحتاج دقة عالية مثل الجامعات والبنوك والفواتير.</p><ul><li>Schema واضح</li><li>علاقات قوية</li><li>يدعم المفاتيح والقيود</li><li>أمثلة: Oracle, MySQL</li></ul></div><div><h3>NoSQL</h3><p>يعتمد على نماذج مرنة مثل Documents أو Key-Value أو Graph. مناسب للبيانات المرنة أو التطبيقات التي تحتاج توسعًا عاليًا.</p><ul><li>Schema مرن</li><li>مناسب لـ JSON</li><li>توسع أفقي أسهل</li><li>أمثلة: MongoDB, Firebase</li></ul></div></div>
 <section class="deep-block"><h3>متى SQL أفضل؟</h3><p>إذا عندك علاقات مهمة: عميل يملك فواتير، فاتورة تحتوي منتجات، طالب يسجل في مواد. هنا SQL أفضل لأنه يحافظ على العلاقات بالمفاتيح الأجنبية والقيود.</p></section>
 <section class="deep-block"><h3>متى NoSQL أفضل؟</h3><p>إذا شكل البيانات يتغير كثيرًا أو تخزن مستندات مختلفة بين المستخدمين أو تحتاج مرونة عالية وسرعة توسع.</p></section>`
},
{
 id:'srs', no:'03', title:'وثيقة SRS', icon:'📄', minutes:'35 دقيقة',
 intro:'SRS هي الوثيقة التي تسبق التصميم والبرمجة، ومنها نستخرج الكيانات والعلاقات التي تظهر في ERD.',
 objectives:['تعرف وظيفة SRS في المشروع.','تفرق بين Functional و Non-Functional Requirements.','تتعلم كيف تستخرج الكيانات من المتطلبات.'],
 body:`
 <section class="deep-block"><h3>ما معنى SRS؟</h3><p>SRS اختصار Software Requirements Specification. هي وثيقة تشرح ماذا يريد العميل من النظام قبل أن يبدأ التصميم أو البرمجة.</p></section>
 <div class="lesson-diagram"><div class="diagram-flow"><div>فكرة المشروع</div><span>←</span><div>SRS</div><span>←</span><div>ERD</div><span>←</span><div>Schema</div><span>←</span><div>SQL</div></div></div>
 <section class="deep-block"><h3>المتطلبات الوظيفية</h3><p>هي الأشياء التي يجب أن يقوم بها النظام. مثال: يستطيع الموظف إضافة كتاب جديد، يستطيع العضو استعارة كتاب، يستطيع النظام تسجيل تاريخ الإرجاع.</p></section>
 <section class="deep-block"><h3>المتطلبات غير الوظيفية</h3><p>هي صفات جودة النظام مثل السرعة والأمان وسهولة الاستخدام والتوفر. مثال: صفحة البحث تظهر خلال أقل من ثانيتين.</p></section>
 <section class="deep-block info"><h3>كيف نطلع ERD من SRS؟</h3><p>نقرأ الجمل ونبحث عن الأسماء المهمة: عضو، كتاب، استعارة، موظف. غالبًا هذه الأسماء تتحول إلى Entities. ثم نبحث عن الأفعال: يستعير، يدير، يحتوي. غالبًا هذه تتحول إلى Relationships.</p></section>`
},
{
 id:'erd', no:'04', title:'شرح ERD بنفس فكرة الرسم', icon:'🧩', minutes:'75 دقيقة',
 intro:'هذا الدرس يشرح ERD من الأساس حتى قراءة مخطط COMPANY، ثم يجهزك لتحويله إلى Schema خطوة بخطوة.',
 objectives:['تفهم رموز ERD: كيان، خاصية، علاقة، مفتاح.','تميز بين العلاقة 1:1 و 1:N و M:N.','تقرأ مثال COMPANY كاملًا قبل تحويله إلى Schema.'],
 body:`
 <section class="deep-block"><h3>ما هو ERD؟</h3><p>ERD هو مخطط الكيانات والعلاقات. وظيفته تحويل متطلبات SRS إلى رسم واضح يبين: ما الأشياء التي سنخزنها؟ ما خصائص كل شيء؟ وكيف ترتبط هذه الأشياء ببعضها؟ بعد ذلك نحول الرسم إلى جداول SQL فعلية.</p></section>
 <div class="symbol-grid">
   <div class="symbol-card"><div class="chen-rect">ENTITY</div><h4>كيان</h4><p>شيء مستقل نخزن عنه بيانات مثل EMPLOYEE أو PROJECT. غالبًا يتحول إلى جدول.</p></div>
   <div class="symbol-card"><div class="chen-weak">WEAK ENTITY</div><h4>كيان ضعيف</h4><p>لا يملك مفتاحًا مستقلًا، ويعتمد على كيان آخر مثل DEPENDENT.</p></div>
   <div class="symbol-card"><div class="chen-diamond">REL</div><h4>علاقة</h4><p>تربط كيانين أو أكثر مثل WORKS_FOR أو MANAGES.</p></div>
   <div class="symbol-card"><div class="chen-diamond double">ID</div><h4>علاقة معرفة</h4><p>تربط الكيان الضعيف بمالكه وتعطيه هويته.</p></div>
   <div class="symbol-card"><div class="chen-oval">Attribute</div><h4>خاصية</h4><p>معلومة تصف الكيان وتتحول لاحقًا إلى عمود.</p></div>
   <div class="symbol-card"><div class="chen-oval key">Key</div><h4>خاصية مفتاحية</h4><p>خاصية فريدة تميز كل سجل، مثل Ssn أو Number.</p></div>
   <div class="symbol-card"><div class="chen-oval multi">Multi</div><h4>متعددة القيم</h4><p>قد تحمل أكثر من قيمة مثل Locations للقسم.</p></div>
   <div class="symbol-card"><div class="chen-oval derived">Derived</div><h4>مشتقة</h4><p>تحسب من بيانات أخرى ولا تخزن غالبًا مثل عدد الموظفين.</p></div>
 </div>
 <section class="deep-block"><h3>أنواع العلاقات Cardinality</h3><p>الكارديناليتي تحدد كم عنصرًا من كيان يرتبط بكم عنصر من كيان آخر. هذه النقطة مهمة جدًا لأنها تقرر أين نضع المفتاح الأجنبي أو هل نحتاج جدولًا وسيطًا.</p></section>
 <div class="relation-gallery">
  <div class="relation-card"><h4>واحد لواحد 1:1</h4><p>كل سجل من الطرف الأول يرتبط بسجل واحد فقط من الطرف الثاني.</p><div class="simple-rel"><b>USER</b><span>1 ─ 1</span><b>PASSPORT</b></div></div>
  <div class="relation-card"><h4>واحد لمتعدد 1:N</h4><p>قسم واحد يحتوي عدة موظفين، وكل موظف يتبع قسمًا واحدًا.</p><div class="simple-rel"><b>DEPARTMENT</b><span>1 ─ N</span><b>EMPLOYEE</b></div></div>
  <div class="relation-card"><h4>متعدد لمتعدد M:N</h4><p>الموظف يعمل على عدة مشاريع، والمشروع يضم عدة موظفين.</p><div class="simple-rel"><b>EMPLOYEE</b><span>M ─ N</span><b>PROJECT</b></div></div>
 </div>
 <section class="deep-block info"><h3>مثال COMPANY كما في الرسم</h3><p>المثال يحتوي أربعة كيانات أساسية: EMPLOYEE و DEPARTMENT و PROJECT و DEPENDENT. كما يحتوي علاقات مهمة: WORKS_FOR و MANAGES و CONTROLS و WORKS_ON و SUPERVISION و DEPENDENTS_OF.</p></section>
 <figure class="erd-image-card">
   <a href="erd-company-dark.png" target="_blank" aria-label="فتح مخطط ERD بالحجم الكامل">
     <img class="responsive-erd-img" src="erd-company-dark.png" alt="مخطط ERD كامل لمثال COMPANY مع الكيانات والعلاقات والخصائص ومفتاح الرموز">
   </a>
   <figcaption>مخطط ERD كامل لمثال COMPANY باستخدام ترميز Chen: الكيانات، الخصائص، العلاقات، والكاردينالية.</figcaption>
 </figure>
 <section class="deep-block info"><h3>ملاحظة مهمة: علاقة الموظف التكرارية</h3><p>في الرسم، علاقة <b>SUPERVISION</b> هي علاقة تكرارية لأن كيان <b>EMPLOYEE</b> يرتبط بنفسه بدورين مختلفين: موظف مشرف <b>Supervisor</b> وموظف تحت الإشراف <b>Supervisee</b>. عند التحويل إلى Schema لا ننشئ جدولًا جديدًا؛ بل نضيف عمود <b>Super_ssn</b> داخل جدول EMPLOYEE كمفتاح أجنبي يشير إلى <b>EMPLOYEE(Ssn)</b>.</p></section>
 <section class="deep-block"><h3>تفكيك الكيانات والصفات</h3><table class="mini-table"><tr><th>الكيان</th><th>الصفات المهمة</th><th>ملاحظات</th></tr><tr><td>EMPLOYEE</td><td>Ssn, Name, Bdate, Address, Salary, Sex</td><td>Ssn مفتاح أساسي، و Name مركبة إلى Fname و Minit و Lname.</td></tr><tr><td>DEPARTMENT</td><td>Number, Name, Locations, Number_of_employees</td><td>Number مفتاح، Locations متعددة القيم، Number_of_employees مشتقة.</td></tr><tr><td>PROJECT</td><td>Number, Name, Location</td><td>Number مفتاح أساسي.</td></tr><tr><td>DEPENDENT</td><td>Name, Sex, Birth_date, Relationship</td><td>كيان ضعيف؛ Name مفتاح جزئي وليس مفتاحًا كاملًا وحده.</td></tr></table></section>
 <section class="deep-block"><h3>تفكيك العلاقات</h3><table class="mini-table"><tr><th>العلاقة</th><th>الكارديناليتي</th><th>المعنى</th></tr><tr><td>WORKS_FOR</td><td>EMPLOYEE N : 1 DEPARTMENT</td><td>كل موظف يعمل في قسم واحد، والقسم يضم عدة موظفين.</td></tr><tr><td>MANAGES</td><td>EMPLOYEE 1 : 1 DEPARTMENT</td><td>موظف واحد يدير قسمًا، و Start_date صفة للعلاقة.</td></tr><tr><td>CONTROLS</td><td>DEPARTMENT 1 : N PROJECT</td><td>القسم يشرف على عدة مشاريع.</td></tr><tr><td>WORKS_ON</td><td>EMPLOYEE M : N PROJECT</td><td>الموظف قد يعمل على عدة مشاريع، والمشروع يضم عدة موظفين، و Hours صفة للعلاقة.</td></tr><tr><td>SUPERVISION</td><td>EMPLOYEE 1 : N EMPLOYEE</td><td>علاقة تكرارية: موظف يشرف على موظفين آخرين.</td></tr><tr><td>DEPENDENTS_OF</td><td>EMPLOYEE 1 : N DEPENDENT</td><td>علاقة معرفة تربط الكيان الضعيف بمالكه.</td></tr></table></section>
 <section class="deep-block warn"><h3>الفكرة المهمة قبل التحويل</h3><p>لا نحول الرسم بشكل عشوائي. أولًا نقرأ الكيانات والصفات، ثم نحدد المفاتيح، ثم نطبق قواعد التحويل حسب نوع العلاقة. الدرس التالي يحول نفس المثال إلى Schema خطوة بخطوة.</p></section>`
},
{
 id:'erd-schema', no:'05', title:'تحويل مثال COMPANY إلى Schema', icon:'🔁', minutes:'80 دقيقة',
 intro:'هنا نحول مثال ERD السابق إلى Schema خطوة بخطوة: جداول، أعمدة، مفاتيح أساسية، مفاتيح أجنبية، وجدول وسيط.',
 objectives:['تحول كل Entity إلى Table.','تضع FK في جهة N عند علاقة 1:N.','تنشئ جدول وسيط لعلاقة M:N.','تحول الكيان الضعيف والصفة متعددة القيم بشكل صحيح.'],
 body:`
 <section class="deep-block"><h3>قاعدة التحويل العامة</h3><p>الـ Schema هو الشكل الجدولي الناتج من ERD. أي أننا نحول الرسم إلى جداول حقيقية يمكن تنفيذها في SQL.</p><div class="diagram-flow"><div>ERD</div><span>←</span><div>Entities</div><span>←</span><div>Tables</div><span>←</span><div>PK/FK</div><span>←</span><div>Schema</div></div></section>
 <section class="mapping-step"><span class="step-badge">1</span><h3>كل Entity قوي يتحول إلى جدول</h3><p>نبدأ بالكيانات القوية لأنها أساس النظام: EMPLOYEE و DEPARTMENT و PROJECT.</p><div class="schema-grid"><div class="schema-table"><h4>EMPLOYEE</h4><code>Ssn PK\nFname\nMinit\nLname\nBdate\nAddress\nSalary\nSex</code></div><div class="schema-table"><h4>DEPARTMENT</h4><code>Dnumber PK\nDname</code></div><div class="schema-table"><h4>PROJECT</h4><code>Pnumber PK\nPname\nPlocation</code></div></div></section>
 <section class="mapping-step"><span class="step-badge">2</span><h3>الخاصية المركبة تتحول إلى أعمدة بسيطة</h3><p>في الرسم، Name للموظف خاصية مركبة تتفرع إلى Fname و Minit و Lname. عند التحويل لا نخزن Name كبيضاوية، بل نخزن أجزائها كأعمدة.</p><div class="map-transform"><div class="chen-oval">Name</div><span>←</span><div class="schema-table"><h4>EMPLOYEE</h4><code>Fname\nMinit\nLname</code></div></div></section>
 <section class="mapping-step"><span class="step-badge">3</span><h3>علاقة WORKS_FOR 1:N</h3><p>كل موظف يعمل في قسم واحد، والقسم يحتوي عدة موظفين. في علاقة 1:N نضع المفتاح الأجنبي في جهة N، أي داخل EMPLOYEE.</p><div class="erd-box"><div class="entity"><b>DEPARTMENT</b><span>Dnumber PK</span></div><div class="rel">1 ───── N<br><small>WORKS_FOR</small></div><div class="entity"><b>EMPLOYEE</b><span>Ssn PK</span><span>Dno FK</span></div></div><p class="note">الناتج: نضيف Dno داخل EMPLOYEE ويشير إلى DEPARTMENT(Dnumber).</p></section>
 <section class="mapping-step"><span class="step-badge">4</span><h3>علاقة MANAGES 1:1 مع صفة Start_date</h3><p>العلاقة MANAGES بين EMPLOYEE و DEPARTMENT ومعها Start_date. نضع مفتاح المدير داخل DEPARTMENT مثل Mgr_ssn، ونضع Start_date كعمود في DEPARTMENT لأنها صفة مرتبطة بإدارة القسم.</p><div class="schema-table"><h4>DEPARTMENT بعد MANAGES</h4><code>Dnumber PK\nDname\nMgr_ssn FK → EMPLOYEE(Ssn)\nMgr_start_date</code></div></section>
 <section class="mapping-step"><span class="step-badge">5</span><h3>علاقة CONTROLS 1:N</h3><p>القسم يتحكم في عدة مشاريع، وكل مشروع تابع لقسم واحد. إذن نضع Dnum داخل PROJECT لأنه جهة N.</p><div class="schema-table"><h4>PROJECT بعد CONTROLS</h4><code>Pnumber PK\nPname\nPlocation\nDnum FK → DEPARTMENT(Dnumber)</code></div></section>
 <section class="mapping-step"><span class="step-badge">6</span><h3>علاقة WORKS_ON M:N تتحول إلى جدول وسيط</h3><p>الموظف قد يعمل على عدة مشاريع، والمشروع قد يعمل عليه عدة موظفين. لا يمكن وضع FK واحد فقط، لذلك ننشئ جدولًا وسيطًا WORKS_ON. صفة Hours توضع في الجدول الوسيط لأنها تخص زوج: موظف + مشروع.</p><div class="erd-box"><div class="entity"><b>EMPLOYEE</b><span>Ssn PK</span></div><div class="rel">M ─ WORKS_ON ─ N<br><small>Hours</small></div><div class="entity"><b>PROJECT</b><span>Pnumber PK</span></div></div><div class="schema-table"><h4>WORKS_ON</h4><code>Essn FK → EMPLOYEE(Ssn)\nPno FK → PROJECT(Pnumber)\nHours\nPK(Essn, Pno)</code></div></section>
 <section class="mapping-step"><span class="step-badge">7</span><h3>العلاقة التكرارية SUPERVISION</h3><p>SUPERVISION تربط EMPLOYEE بنفسه: موظف مشرف وموظف تحت الإشراف. عند التحويل نضيف Super_ssn داخل EMPLOYEE كـ FK يشير إلى EMPLOYEE(Ssn).</p><div class="schema-table"><h4>EMPLOYEE بعد SUPERVISION</h4><code>Ssn PK\nFname\nMinit\nLname\nBdate\nAddress\nSalary\nSex\nSuper_ssn FK → EMPLOYEE(Ssn)\nDno FK → DEPARTMENT(Dnumber)</code></div></section>
 <section class="mapping-step"><span class="step-badge">8</span><h3>الكيان الضعيف DEPENDENT</h3><p>DEPENDENT لا يملك مفتاحًا مستقلًا. لذلك جدول DEPENDENT يأخذ مفتاح مالكه EMPLOYEE وهو Essn، ويجمعه مع الاسم dependent_name ليصبح المفتاح الأساسي المركب.</p><div class="schema-table"><h4>DEPENDENT</h4><code>Essn FK → EMPLOYEE(Ssn)\nDependent_name partial key\nSex\nBirth_date\nRelationship\nPK(Essn, Dependent_name)</code></div></section>
 <section class="mapping-step"><span class="step-badge">9</span><h3>الخاصية متعددة القيم Locations</h3><p>Locations في DEPARTMENT متعددة القيم، يعني القسم قد يكون له أكثر من موقع. لا نضع عدة مواقع في عمود واحد، بل ننشئ جدولًا مستقلًا DEPT_LOCATIONS.</p><div class="schema-table"><h4>DEPT_LOCATIONS</h4><code>Dnumber FK → DEPARTMENT(Dnumber)\nDlocation\nPK(Dnumber, Dlocation)</code></div></section>
 <section class="deep-block info"><h3>الشكل النهائي للـ Schema</h3><div class="final-schema"><div>EMPLOYEE(<u>Ssn</u>, Fname, Minit, Lname, Bdate, Address, Salary, Sex, Super_ssn FK, Dno FK)</div><div>DEPARTMENT(<u>Dnumber</u>, Dname, Mgr_ssn FK, Mgr_start_date)</div><div>PROJECT(<u>Pnumber</u>, Pname, Plocation, Dnum FK)</div><div>WORKS_ON(<u>Essn</u> FK, <u>Pno</u> FK, Hours)</div><div>DEPENDENT(<u>Essn</u> FK, <u>Dependent_name</u>, Sex, Birth_date, Relationship)</div><div>DEPT_LOCATIONS(<u>Dnumber</u> FK, <u>Dlocation</u>)</div></div></section>
 <section class="deep-block"><h3>كود SQL الناتج</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>CREATE TABLE employee (
  ssn INT PRIMARY KEY,
  fname VARCHAR2(30),
  minit CHAR(1),
  lname VARCHAR2(30),
  bdate DATE,
  address VARCHAR2(100),
  salary NUMBER(10,2),
  sex CHAR(1),
  super_ssn INT REFERENCES employee(ssn),
  dno INT
);

CREATE TABLE department (
  dnumber INT PRIMARY KEY,
  dname VARCHAR2(50),
  mgr_ssn INT REFERENCES employee(ssn),
  mgr_start_date DATE
);

ALTER TABLE employee
ADD CONSTRAINT fk_emp_dept
FOREIGN KEY (dno) REFERENCES department(dnumber);

CREATE TABLE project (
  pnumber INT PRIMARY KEY,
  pname VARCHAR2(50),
  plocation VARCHAR2(50),
  dnum INT REFERENCES department(dnumber)
);

CREATE TABLE works_on (
  essn INT REFERENCES employee(ssn),
  pno INT REFERENCES project(pnumber),
  hours NUMBER(5,2),
  PRIMARY KEY (essn, pno)
);

CREATE TABLE dependent (
  essn INT REFERENCES employee(ssn),
  dependent_name VARCHAR2(50),
  sex CHAR(1),
  birth_date DATE,
  relationship VARCHAR2(30),
  PRIMARY KEY (essn, dependent_name)
);

CREATE TABLE dept_locations (
  dnumber INT REFERENCES department(dnumber),
  dlocation VARCHAR2(50),
  PRIMARY KEY (dnumber, dlocation)
);</pre></div></section>
 <section class="deep-block warn"><h3>خلاصة التحويل</h3><ul><li>Entity قوي ← Table.</li><li>Attribute بسيط ← Column.</li><li>Composite Attribute ← الأعمدة الفرعية فقط.</li><li>1:N ← FK في جهة N.</li><li>M:N ← جدول وسيط.</li><li>Weak Entity ← مفتاح مركب من مفتاح المالك + المفتاح الجزئي.</li><li>Multivalued Attribute ← جدول مستقل.</li></ul></section>`
},
{
 id:'schema', no:'06', title:'Schema والجداول في Oracle', icon:'🏗️', minutes:'35 دقيقة',
 intro:'بعد تحويل ERD إلى Schema، نحتاج فهم معنى Schema داخل Oracle وكيف تظهر الجداول والأعمدة والصفوف والمفاتيح.',
 objectives:['تعرف الفرق بين Database و Schema و Table.','تفهم HR Schema.','تعرف معنى Row و Column و Constraint.'],
 body:`
 <section class="deep-block"><h3>ما معنى Schema؟</h3><p>في Oracle، الـ Schema هي مجموعة كائنات يملكها مستخدم معين، مثل الجداول والفهارس والعروض. مثال HR Schema يحتوي جداول تدريبية مثل EMPLOYEES و DEPARTMENTS.</p></section>
 <div class="tree"><b>Oracle Database</b><ul><li>HR Schema<ul><li>EMPLOYEES</li><li>DEPARTMENTS</li><li>JOBS</li><li>LOCATIONS</li><li>COUNTRIES</li></ul></li><li>SALES Schema</li><li>FINANCE Schema</li></ul></div>
 <section class="deep-block"><h3>الجدول والصف والعمود</h3><p>الجدول يخزن نوعًا واحدًا من البيانات. الصف يمثل سجلًا واحدًا. العمود يمثل معلومة محددة داخل السجل.</p></section>
 <table class="mini-table"><tr><th>employee_id</th><th>first_name</th><th>salary</th><th>department_id</th></tr><tr><td>100</td><td>Steven</td><td>24000</td><td>90</td></tr><tr><td>101</td><td>Neena</td><td>17000</td><td>90</td></tr></table>`
},
{
 id:'select', no:'07', title:'SELECT من الصفر', icon:'💻', minutes:'35 دقيقة',
 intro:'SELECT هو أول أمر SQL تستخدمه لعرض البيانات. لا يغير البيانات، فقط يسترجعها من جدول.',
 objectives:['تفهم SELECT و FROM و * و ;.','تعرف لماذا نحدد الأعمدة بدل النجمة.','تقرأ نتيجة الاستعلام بشكل صحيح.'],
 body:`
 <section class="deep-block"><h3>الصيغة الأساسية</h3><div class="sql-map"><span>SELECT</span><span>الأعمدة</span><span>FROM</span><span>الجدول</span><span>;</span></div><p>SELECT يعني ماذا تريد أن تعرض. FROM يعني من أي جدول. الفاصلة المنقوطة تعني نهاية الأمر في أدوات كثيرة.</p></section>
 <section class="deep-block"><h3>مثال</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>SELECT first_name, last_name, salary
FROM employees;</pre></div><table class="mini-table"><tr><th>first_name</th><th>last_name</th><th>salary</th></tr><tr><td>Steven</td><td>King</td><td>24000</td></tr><tr><td>Neena</td><td>Kochhar</td><td>17000</td></tr></table></section>`
},
{
 id:'where-order', no:'08', title:'WHERE و ORDER BY', icon:'🔎', minutes:'30 دقيقة',
 intro:'WHERE يختار الصفوف، و ORDER BY يرتب النتيجة.',
 objectives:['تستخدم WHERE لتصفية الصفوف.','ترتب النتائج باستخدام ORDER BY.'],
 body:`
 <section class="deep-block"><h3>WHERE</h3><p>WHERE تحدد شرطًا. الصف الذي يحقق الشرط يظهر في النتيجة.</p><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>SELECT last_name, salary
FROM employees
WHERE salary > 10000;</pre></div></section>
 <section class="deep-block"><h3>ORDER BY</h3><p>ORDER BY يرتب النتيجة. DESC من الأكبر إلى الأصغر.</p><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>SELECT last_name, salary
FROM employees
WHERE salary > 10000
ORDER BY salary DESC;</pre></div></section>`
}
,
{
 id:'api', no:'09', title:'شرح API بالتفصيل', icon:'🔌', minutes:'60 دقيقة',
 intro:'API هو الجسر الذي يسمح للتطبيقات بالتواصل مع بعضها. في هذا الدرس ستفهم API من الصفر: ما هو، لماذا نستخدمه، كيف يعمل Request و Response، وما علاقة API بقواعد البيانات والمواقع.',
 objectives:['تعرف معنى API ببساطة.','تفهم الفرق بين Client و Server.','تتعلم مكونات Request و Response.','تميز بين GET و POST و PUT و DELETE.','تفهم كيف يرتبط API بقاعدة البيانات.','تقرأ أمثلة JSON و HTTP بشكل واضح.','تفهم Status Codes مثل 200 و201 و400 و401 و403 و404 و500.'],
 body:`
 <section class="deep-block"><h3>ما هو API؟</h3><p>API اختصار <b>Application Programming Interface</b>. معناه ببساطة: طريقة منظمة تسمح لتطبيق أن يطلب خدمة أو بيانات من تطبيق آخر بدون أن يعرف تفاصيله الداخلية. المستخدم لا يتعامل مع قاعدة البيانات مباشرة، بل يرسل التطبيق طلبًا إلى API، والـ API يتعامل مع النظام ثم يرجع النتيجة.</p></section>
 <div class="lesson-diagram"><div class="diagram-flow"><div>المستخدم</div><span>←</span><div>واجهة التطبيق</div><span>←</span><div>API</div><span>←</span><div>قاعدة البيانات</div><span>←</span><div>النتيجة</div></div></div>
 <section class="deep-block info"><h3>مثال من الحياة</h3><p>تخيل أنك في مطعم. أنت لا تدخل المطبخ بنفسك، بل تطلب من النادل. النادل يأخذ طلبك للمطبخ ثم يرجع لك بالوجبة. في البرمجة، التطبيق مثل العميل، والـ API مثل النادل، وقاعدة البيانات أو السيرفر مثل المطبخ.</p></section>
 <div class="compare big"><div><h3>بدون API</h3><p>كل تطبيق يحتاج يعرف تفاصيل قاعدة البيانات والأنظمة الداخلية، وهذا خطر وصعب الصيانة.</p><ul><li>تعقيد عالي</li><li>أمان أقل</li><li>تكرار في الكود</li></ul></div><div><h3>مع API</h3><p>التطبيق يطلب البيانات بطريقة واضحة، والـ API يتحكم بالوصول ويجهز الرد بشكل مناسب.</p><ul><li>تنظيم أفضل</li><li>أمان أعلى</li><li>سهولة ربط الأنظمة</li></ul></div></div>
 <section class="deep-block"><h3>Client و Server</h3><p><b>Client</b> هو الطرف الذي يطلب البيانات، مثل المتصفح أو تطبيق الجوال. <b>Server</b> هو الطرف الذي يستقبل الطلب ويعالجه ثم يرجع الرد. الـ API غالبًا يكون موجودًا في السيرفر ويستقبل طلبات من الـ Client.</p></section>
 <div class="erd-box"><div class="entity"><b>CLIENT</b><span>Browser</span><span>Mobile App</span></div><div class="rel">HTTP Request<br><small>طلب</small></div><div class="entity"><b>API SERVER</b><span>Routes</span><span>Logic</span><span>Security</span></div><div class="rel">SQL Query<br><small>استعلام</small></div><div class="entity"><b>DATABASE</b><span>Tables</span><span>Rows</span></div></div>
 <section class="deep-block"><h3>كيف يعمل API؟</h3><p>العملية غالبًا تمر بأربع مراحل: يرسل العميل طلبًا، يستقبل السيرفر الطلب، ينفذ المنطق المطلوب مثل قراءة قاعدة البيانات، ثم يرجع ردًا غالبًا بصيغة JSON.</p></section>
 <div class="lesson-diagram"><div class="diagram-flow"><div>1 طلب Request</div><span>←</span><div>2 معالجة Logic</div><span>←</span><div>3 قاعدة البيانات</div><span>←</span><div>4 رد Response</div></div></div>
 <section class="deep-block"><h3>ما هو Request؟</h3><p>Request هو الطلب الذي يرسله العميل إلى API. يحتوي عادة على رابط URL، وطريقة HTTP Method، وربما Headers، وربما Body إذا كان الطلب يرسل بيانات.</p><table class="mini-table"><tr><th>العنصر</th><th>المعنى</th><th>مثال</th></tr><tr><td>URL</td><td>عنوان المورد المطلوب</td><td>/api/students</td></tr><tr><td>Method</td><td>نوع العملية</td><td>GET أو POST</td></tr><tr><td>Headers</td><td>معلومات إضافية مثل نوع البيانات أو التوثيق</td><td>Authorization</td></tr><tr><td>Body</td><td>البيانات المرسلة مع الطلب</td><td>اسم طالب جديد</td></tr></table></section>
 <section class="deep-block"><h3>ما هو Response؟</h3><p>Response هو الرد الذي يرجعه API. الرد لا يحتوي على البيانات فقط، بل يحتوي أيضًا على <b>Status Code</b>، وهو رقم يوضح نتيجة الطلب: هل نجح، هل فشل بسبب المستخدم، أم فشل بسبب السيرفر.</p><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 101,
  "name": "Ali"
}</pre></div></section>
 <section class="deep-block info"><h3>ما هو Status Code؟</h3><p>Status Code هو رقم يرجع من السيرفر مع كل Response. هذا الرقم يعطيك معنى سريعًا لحالة الطلب. مثلًا: <b>200</b> يعني الطلب نجح، <b>404</b> يعني الرابط أو البيانات غير موجودة، و <b>500</b> يعني هناك مشكلة داخل السيرفر.</p><div class="lesson-diagram"><div class="diagram-flow"><div>Client</div><span>←</span><div>Request</div><span>←</span><div>Server</div><span>←</span><div>Status + Data</div></div></div></section>
 <section class="deep-block"><h3>تصنيفات Status Codes</h3><div class="relation-gallery"><div class="relation-card"><h4>🟢 2xx نجاح</h4><p>الطلب وصل للسيرفر وتم تنفيذه بنجاح.</p><code>200 OK<br>201 Created<br>204 No Content</code></div><div class="relation-card"><h4>🔵 3xx تحويل</h4><p>المورد انتقل أو يحتاج إعادة توجيه.</p><code>301 Moved<br>302 Found<br>304 Not Modified</code></div><div class="relation-card"><h4>🟡 4xx خطأ من العميل</h4><p>المشكلة غالبًا في الطلب نفسه أو الصلاحيات.</p><code>400 Bad Request<br>401 Unauthorized<br>403 Forbidden<br>404 Not Found</code></div><div class="relation-card"><h4>🔴 5xx خطأ من السيرفر</h4><p>السيرفر استقبل الطلب لكن فشل في معالجته.</p><code>500 Server Error<br>502 Bad Gateway<br>503 Unavailable<br>504 Timeout</code></div></div></section>
 <section class="deep-block"><h3>أشهر الأكواد ومعناها</h3><table class="mini-table"><tr><th>الكود</th><th>الاسم</th><th>متى يظهر؟</th><th>مثال بسيط</th></tr><tr><td>200</td><td>OK</td><td>نجح الطلب وتم إرجاع البيانات.</td><td>عرض بيانات طالب موجود.</td></tr><tr><td>201</td><td>Created</td><td>تم إنشاء سجل جديد.</td><td>إضافة طالب جديد باستخدام POST.</td></tr><tr><td>204</td><td>No Content</td><td>نجح الطلب لكن لا يوجد محتوى للعرض.</td><td>حذف سجل بنجاح.</td></tr><tr><td>400</td><td>Bad Request</td><td>الطلب ناقص أو صيغته خاطئة.</td><td>إرسال رقم جوال بحروف.</td></tr><tr><td>401</td><td>Unauthorized</td><td>لم يتم تسجيل الدخول أو Token غير موجود.</td><td>طلب صفحة خاصة بدون تسجيل دخول.</td></tr><tr><td>403</td><td>Forbidden</td><td>أنت معروف لكن لا تملك صلاحية.</td><td>طالب يحاول حذف مستخدم.</td></tr><tr><td>404</td><td>Not Found</td><td>المسار أو السجل غير موجود.</td><td>GET /students/9999</td></tr><tr><td>409</td><td>Conflict</td><td>تعارض مع بيانات موجودة.</td><td>إيميل مستخدم مسبقًا.</td></tr><tr><td>422</td><td>Unprocessable Entity</td><td>الطلب مفهوم لكن البيانات غير مقبولة.</td><td>كلمة مرور أقل من الحد المطلوب.</td></tr><tr><td>429</td><td>Too Many Requests</td><td>طلبات كثيرة جدًا خلال وقت قصير.</td><td>محاولات تسجيل دخول متكررة.</td></tr><tr><td>500</td><td>Internal Server Error</td><td>خطأ داخلي في السيرفر.</td><td>خطأ في كود السيرفر.</td></tr><tr><td>503</td><td>Service Unavailable</td><td>الخدمة غير متاحة مؤقتًا.</td><td>السيرفر تحت الصيانة.</td></tr></table></section>
 <section class="deep-block"><h3>أمثلة واضحة على Status Codes</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>GET /api/students/101
→ 200 OK

POST /api/students
→ 201 Created

GET /api/students/9999
→ 404 Not Found

POST /api/login بدون كلمة مرور
→ 400 Bad Request

GET /api/admin بدون صلاحية
→ 403 Forbidden

مشكلة داخل السيرفر
→ 500 Internal Server Error</pre></div></section>
 <section class="deep-block warn"><h3>الفرق بين 401 و 403</h3><p><b>401 Unauthorized</b> تعني أنك لم تثبت هويتك بعد، مثل دخول بدون Token. أما <b>403 Forbidden</b> فتعني أن هويتك معروفة، لكن لا تملك صلاحية تنفيذ العملية.</p><div class="compare"><div><h3>401</h3><p>من أنت؟ لم تسجل دخول أو Token غير صحيح.</p></div><div><h3>403</h3><p>نعرف من أنت، لكن ليس لديك صلاحية.</p></div></div></section>
 <section class="deep-block"><h3>أشهر HTTP Methods</h3><p>كل Method تعبر عن نوع عملية مختلف على البيانات. في الأنظمة التعليمية والمتاجر نستخدمها كثيرًا مع الجداول.</p><table class="mini-table"><tr><th>Method</th><th>الوظيفة</th><th>مثال</th></tr><tr><td>GET</td><td>قراءة بيانات</td><td>عرض كل الطلاب</td></tr><tr><td>POST</td><td>إضافة بيانات جديدة</td><td>إضافة طالب</td></tr><tr><td>PUT</td><td>تعديل بيانات كاملة</td><td>تعديل بيانات طالب</td></tr><tr><td>PATCH</td><td>تعديل جزئي</td><td>تغيير رقم الجوال فقط</td></tr><tr><td>DELETE</td><td>حذف بيانات</td><td>حذف طالب</td></tr></table></section>
 <section class="deep-block"><h3>مثال API للطلاب</h3><p>لو عندك جدول STUDENTS في قاعدة البيانات، ممكن تبني API يسمح للتطبيق بعرض الطلاب وإضافة طالب جديد.</p><div class="schema-grid"><div class="schema-table"><h4>STUDENTS</h4><code>student_id PK\nstudent_name\nmajor\nphone</code></div><div class="schema-table"><h4>API Endpoints</h4><code>GET /api/students\nGET /api/students/101\nPOST /api/students\nPUT /api/students/101\nDELETE /api/students/101</code></div></div></section>
 <section class="deep-block"><h3>مثال Request بصيغة JSON</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>POST /api/students
Content-Type: application/json

{
  "student_name": "Ali",
  "major": "IT",
  "phone": "0550000000"
}</pre></div><p>هذا الطلب يعني: أضف طالبًا جديدًا إلى النظام. الـ API يستقبل JSON، يتحقق من البيانات، ثم يحفظها في قاعدة البيانات.</p></section>
 <section class="deep-block"><h3>مثال Response</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "تمت إضافة الطالب بنجاح",
  "student": {
    "student_id": 101,
    "student_name": "Ali",
    "major": "IT"
  }
}</pre></div><p>الكود 201 يعني أن السيرفر أنشأ سجلًا جديدًا بنجاح.</p></section>
 <section class="deep-block"><h3>علاقة API بقاعدة البيانات</h3><p>الـ API لا يكون بديلًا عن قاعدة البيانات. هو طبقة بين التطبيق وقاعدة البيانات. التطبيق يرسل طلبًا، والـ API يحوله إلى عملية مناسبة مثل SELECT أو INSERT أو UPDATE أو DELETE.</p><table class="mini-table"><tr><th>طلب API</th><th>عملية SQL المقابلة</th></tr><tr><td>GET /api/students</td><td>SELECT * FROM students</td></tr><tr><td>POST /api/students</td><td>INSERT INTO students</td></tr><tr><td>PUT /api/students/101</td><td>UPDATE students WHERE student_id = 101</td></tr><tr><td>DELETE /api/students/101</td><td>DELETE FROM students WHERE student_id = 101</td></tr></table></section>
 <section class="deep-block"><h3>ما هو REST API؟</h3><p>REST أسلوب شائع لتنظيم API. يعتمد على موارد Resources مثل students أو products أو orders، ويستخدم HTTP Methods للتعامل معها. مثلًا students مورد، و GET يقرأ، و POST يضيف، و DELETE يحذف.</p></section>
 <section class="deep-block"><h3>ما هو JSON؟</h3><p>JSON صيغة خفيفة لتبادل البيانات بين الأنظمة. تشبه شكل الكائنات في JavaScript، لكنها تستخدم في لغات كثيرة جدًا. أغلب APIs الحديثة ترجع البيانات بصيغة JSON لأنها واضحة وسهلة القراءة.</p><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>{
  "order_id": 5001,
  "customer": "Ahmed",
  "total": 250,
  "items": ["Keyboard", "Mouse"]
}</pre></div></section>
 <section class="deep-block"><h3>Authentication و Authorization</h3><p><b>Authentication</b> يعني التحقق من هوية المستخدم: من أنت؟ أما <b>Authorization</b> يعني الصلاحيات: ماذا يسمح لك أن تفعل؟ قد يكون المستخدم مسجل دخول، لكن لا يملك صلاحية حذف البيانات.</p><div class="compare"><div><h3>Authentication</h3><p>تسجيل دخول، كلمة مرور، Token.</p></div><div><h3>Authorization</h3><p>صلاحيات: Admin، Student، Employee.</p></div></div></section>
 <section class="deep-block"><h3>مثال عملي كامل: نظام مكتبة</h3><p>في نظام مكتبة، عند استعارة كتاب لا يكتب المستخدم مباشرة في جدول BORROW. بل الواجهة ترسل طلبًا إلى API، والـ API يتحقق من توفر الكتاب ثم يسجل الاستعارة.</p><div class="lesson-diagram"><div class="diagram-flow"><div>زر استعارة</div><span>←</span><div>POST /api/borrows</div><span>←</span><div>فحص توفر الكتاب</div><span>←</span><div>INSERT BORROW</div></div></div><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>POST /api/borrows

{
  "member_id": 10,
  "book_id": 55,
  "employee_id": 3
}</pre></div></section>
 <section class="deep-block warn"><h3>أخطاء شائعة في فهم API</h3><ul><li>اعتقاد أن API هو قاعدة البيانات نفسها.</li><li>إرسال بيانات حساسة بدون حماية أو Token.</li><li>استخدام GET للإضافة أو الحذف بدل POST و DELETE.</li><li>عدم التحقق من البيانات قبل حفظها.</li><li>إرجاع رسائل خطأ غير واضحة للمستخدم.</li></ul></section>
 <section class="deep-block info"><h3>أفضل الممارسات</h3><ul><li>اجعل أسماء الروابط واضحة مثل /api/students و /api/orders.</li><li>استخدم Status Codes بشكل صحيح.</li><li>لا تكشف تفاصيل قاعدة البيانات للمستخدم.</li><li>تحقق من البيانات قبل الحفظ.</li><li>استخدم Authentication عند التعامل مع بيانات خاصة.</li><li>اكتب توثيقًا واضحًا لكل Endpoint.</li></ul></section>
 <section class="deep-block"><h3>أسئلة مقابلات شائعة</h3><ol><li>ما الفرق بين API و Database؟</li><li>ما الفرق بين GET و POST؟</li><li>ما معنى Status Code 404؟</li><li>ما الفرق بين 401 و 403؟</li><li>متى نستخدم 201 بدل 200؟</li><li>ما الفرق بين Authentication و Authorization؟</li><li>لماذا نستخدم JSON في API؟</li></ol></section>`
},
{
 id:'llm', no:'10', title:'ما هو LLM؟', icon:'🤖', minutes:'55 دقيقة',
 intro:'LLM هو اختصار Large Language Model، ويعني نموذج لغوي ضخم. هذا الدرس يشرح الفكرة من الصفر: ما معنى النموذج اللغوي، كيف يتعامل مع النصوص، ما الفرق بينه وبين API، وكيف يمكن استخدامه داخل التطبيقات الحديثة.',
 objectives:['تفهم معنى LLM بدون حفظ فقط.','تميز بين AI و Machine Learning و Deep Learning و LLM.','تعرف معنى Prompt و Response و Token و Context Window.','تفهم كيف يتصل التطبيق بالنموذج عبر API.','تعرف استخدامات LLM وحدوده وأخطاؤه الشائعة.'],
 body:`
 <section class="deep-block"><h3>الهدف من الدرس</h3><p>الهدف أن تفهم ما الذي يحدث عندما تكتب سؤالًا لنموذج مثل ChatGPT أو Gemini. النموذج لا يكون مجرد صفحة دردشة، بل هو نظام لغوي ضخم يمكن ربطه بالتطبيقات، المواقع، قواعد البيانات، وخدمات API.</p></section>
 <section class="deep-block"><h3>ما معنى LLM؟</h3><p>LLM اختصار لـ <b>Large Language Model</b>. كلمة Large تعني أنه تدرب على كمية ضخمة من النصوص، وكلمة Language تعني أنه متخصص في اللغة، وكلمة Model تعني أنه نظام رياضي يتعلم الأنماط من البيانات ثم يستخدمها لتوليد إجابة مناسبة.</p><div class="lesson-diagram"><div class="diagram-flow"><div>نصوص ضخمة</div><span>←</span><div>تدريب</div><span>←</span><div>نموذج لغوي</div><span>←</span><div>إجابات</div></div></div></section>
 <section class="deep-block"><h3>الفكرة ببساطة</h3><p>عندما تكتب: “اشرح لي SELECT”، فإن النموذج يحلل الكلمات والسياق، ثم يتوقع أفضل إجابة بناءً على الأنماط التي تعلمها. هو لا يبحث دائمًا في الإنترنت، ولا يعني ذلك أن كل إجابة صحيحة 100%. لذلك في المجالات المهمة يجب التحقق من الإجابة.</p></section>
 <section class="deep-block"><h3>الفرق بين AI و ML و DL و LLM</h3><div class="tree"><b>Artificial Intelligence - الذكاء الاصطناعي</b><ul><li>Machine Learning - تعلم الآلة</li><li>Deep Learning - التعلم العميق<ul><li>Large Language Models - النماذج اللغوية الضخمة</li></ul></li></ul></div><p>LLM هو جزء من الذكاء الاصطناعي، وليس كل الذكاء الاصطناعي. هو نوع متخصص في فهم وتوليد اللغة، وقد يستخدم في الشرح، البرمجة، التلخيص، الترجمة، والتحليل.</p></section>
 <section class="deep-block"><h3>دورة عمل LLM</h3><div class="lesson-diagram"><div class="diagram-flow"><div>المستخدم</div><span>←</span><div>Prompt</div><span>←</span><div>LLM</div><span>←</span><div>Response</div></div></div><p><b>Prompt</b> هو الطلب الذي تكتبه. <b>Response</b> هي الإجابة التي يرجعها النموذج. جودة الإجابة تعتمد كثيرًا على وضوح الطلب والسياق الذي تعطيه للنموذج.</p></section>
 <section class="deep-block"><h3>ما هو Prompt؟</h3><p>Prompt هو النص أو الأمر الذي ترسله للنموذج. كلما كان الطلب واضحًا ومحددًا، زادت فرصة الحصول على إجابة جيدة.</p><div class="compare"><div><h3>طلب ضعيف</h3><p>اشرح SQL</p></div><div><h3>طلب أفضل</h3><p>اشرح SELECT في Oracle SQL لطالب مبتدئ مع مثال وجدول ناتج.</p></div></div></section>
 <section class="deep-block"><h3>ما هو Token؟</h3><p>النموذج لا يعالج النص دائمًا ككلمات كاملة. غالبًا يقسم النص إلى أجزاء صغيرة تسمى Tokens. قد يكون الـ Token كلمة، جزءًا من كلمة، رقمًا، أو علامة ترقيم.</p><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>الجملة: اشرح ERD ببساطة
Tokens تقريبية: [اشرح] [ERD] [ببساطة]</pre></div></section>
 <section class="deep-block"><h3>ما هي Context Window؟</h3><p>Context Window هي كمية النص التي يستطيع النموذج قراءتها واستخدامها في نفس الطلب أو المحادثة. إذا كان النص طويلًا جدًا، قد لا يستطيع النموذج استخدام كل التفاصيل القديمة. لذلك في التطبيقات الكبيرة نحتاج تنظيم المعلومات أو استخدام تقنيات مثل RAG.</p></section>
 <section class="deep-block"><h3>ما معنى Temperature؟</h3><p>Temperature إعداد يتحكم في درجة تنوع الإجابة. قيمة منخفضة تجعل الإجابة أكثر ثباتًا ومباشرة. قيمة أعلى تجعل الإجابة أكثر تنوعًا وإبداعًا، لكنها قد تزيد احتمال الإجابات غير الدقيقة.</p><div class="relation-gallery"><div class="relation-card"><h4>Temperature منخفض</h4><p>مناسب للتلخيص، الأكواد، والإجابات الدقيقة.</p></div><div class="relation-card"><h4>Temperature مرتفع</h4><p>مناسب للأفكار الإبداعية والكتابة الحرة.</p></div></div></section>
 <section class="deep-block"><h3>ما علاقة LLM بالـ API؟</h3><p>LLM هو النموذج نفسه، أما API فهو الطريق الذي يستخدمه التطبيق للتواصل مع النموذج. مثلًا موقعك يرسل Prompt إلى API، والـ API يرجع Response من النموذج.</p><div class="lesson-diagram"><div class="diagram-flow"><div>المستخدم</div><span>←</span><div>الموقع</div><span>←</span><div>API</div><span>←</span><div>LLM</div><span>←</span><div>الإجابة</div></div></div></section>
 <section class="deep-block"><h3>مثال طلب إلى LLM عبر API</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>POST /chat/completions
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "model": "example-llm-model",
  "messages": [
    {"role": "user", "content": "اشرح ERD بطريقة بسيطة"}
  ]
}</pre></div><p>هذا مثال تعليمي يوضح الفكرة العامة: التطبيق يرسل رسالة المستخدم إلى النموذج، ثم يستقبل الإجابة ويعرضها في الواجهة.</p></section>
 <section class="deep-block"><h3>أشهر استخدامات LLM</h3><div class="relation-gallery"><div class="relation-card"><h4>التعليم</h4><p>شرح الدروس وتوليد أمثلة وأسئلة.</p></div><div class="relation-card"><h4>البرمجة</h4><p>مساعدة في كتابة الكود وفهم الأخطاء.</p></div><div class="relation-card"><h4>خدمة العملاء</h4><p>شات بوت يرد على الأسئلة المتكررة.</p></div><div class="relation-card"><h4>تحليل النصوص</h4><p>تلخيص، تصنيف، استخراج معلومات.</p></div></div></section>
 <section class="deep-block warn"><h3>قيود مهمة</h3><ul><li>قد يعطي إجابة خاطئة لكنها تبدو مقنعة.</li><li>قد لا يعرف معلومات حديثة إذا لم يكن متصلًا بمصدر محدث.</li><li>لا يجب استخدامه وحده في القرارات الطبية أو القانونية أو المالية المهمة.</li><li>قد يفهم الطلب بشكل خاطئ إذا كان Prompt غامضًا.</li></ul></section>
 <section class="deep-block info"><h3>أفضل الممارسات في كتابة Prompt</h3><ul><li>اكتب المطلوب بوضوح.</li><li>حدد مستوى الشرح: مبتدئ، متوسط، متقدم.</li><li>اطلب مثالًا وجدولًا أو خطوات إذا احتجت.</li><li>أعطِ سياقًا كافيًا.</li><li>راجع الإجابات المهمة ولا تعتمد عليها بشكل أعمى.</li></ul></section>
 <section class="deep-block"><h3>أسئلة مراجعة</h3><ol><li>ما معنى LLM؟</li><li>ما الفرق بين Prompt و Response؟</li><li>هل LLM هو نفسه API؟ ولماذا؟</li><li>ما فائدة Context Window؟</li><li>لماذا يجب مراجعة إجابات النماذج اللغوية؟</li></ol></section>`
}


];


const lessonListEl = document.getElementById('lessonList');
const lessonReaderEl = document.getElementById('lessonReader');
const lessonSearchEl = document.getElementById('lessonSearch');

const lessonGroups = [
  {
    id:'fundamentals',
    title:'أساسيات قواعد البيانات',
    icon:'📘',
    desc:'المفاهيم الأولى قبل SQL',
    lessons:['database','sql-nosql','srs','erd','erd-schema','schema']
  },
  {
    id:'oracle-sql',
    title:'أساسيات Oracle SQL',
    icon:'💻',
    desc:'قراءة البيانات وتصفيتها',
    lessons:['select','where-order']
  },
  {
    id:'web-api',
    title:'تطوير الويب والـ API',
    icon:'🌐',
    desc:'ربط التطبيقات والأنظمة',
    lessons:['api','llm']
  }
];

function getLesson(id){return detailedLessons.find(x=>x.id===id)||detailedLessons[0]}
function lessonDone(id){return localStorage.getItem('lesson_'+id)==='1'}
function groupProgress(group){
  const total = group.lessons.length;
  const done = group.lessons.filter(lessonDone).length;
  return {done,total,percent: total ? Math.round((done/total)*100) : 0};
}
function groupForLesson(id){return lessonGroups.find(g=>g.lessons.includes(id)) || lessonGroups[0]}
function getOpenGroupId(){
  const hashId = location.hash.replace('#','');
  if(hashId) return groupForLesson(hashId).id;
  return localStorage.getItem('openLessonGroup') || lessonGroups[0].id;
}

function renderList(filter=''){
 const q=(filter||'').trim().toLowerCase();
 const activeId = location.hash.replace('#','') || 'database';
 const openId = q ? 'all' : getOpenGroupId();
 lessonListEl.innerHTML = lessonGroups.map(group=>{
   const lessons = group.lessons.map(getLesson).filter(l => !q || (l.title+' '+l.intro).toLowerCase().includes(q));
   if(q && lessons.length===0) return '';
   const progress = groupProgress(group);
   const isOpen = q || group.id === openId;
   return `
   <div class="lesson-group ${isOpen?'open':''}" data-group="${group.id}">
     <button class="lesson-group-head" type="button" aria-expanded="${isOpen?'true':'false'}">
       <span class="group-ico">${group.icon}</span>
       <span class="group-text"><b>${group.title}</b><small>${group.desc}</small></span>
       <span class="group-progress">${progress.done}/${progress.total}</span>
       <span class="group-arrow">⌄</span>
     </button>
     <div class="lesson-group-body"><div class="lesson-group-inner">
       ${lessons.map(l=>`<button class="lesson-link ${lessonDone(l.id)?'is-done':''}" data-id="${l.id}" type="button"><b>${l.no}</b><span>${l.icon} ${l.title}<small>${l.minutes}</small></span><i>${lessonDone(l.id)?'✓':''}</i></button>`).join('')}
     </div></div>
   </div>`;
 }).join('') || `<div class="empty-lessons">لا توجد نتائج مطابقة للبحث.</div>`;

 document.querySelectorAll('.lesson-group-head').forEach(head=>{
   head.onclick=()=>{
     const groupEl = head.closest('.lesson-group');
     const groupId = groupEl.dataset.group;
     const willOpen = !groupEl.classList.contains('open');
     document.querySelectorAll('.lesson-group').forEach(g=>{
       g.classList.remove('open');
       g.querySelector('.lesson-group-head')?.setAttribute('aria-expanded','false');
     });
     if(willOpen){
       groupEl.classList.add('open');
       head.setAttribute('aria-expanded','true');
       localStorage.setItem('openLessonGroup',groupId);
     }
   };
 });
 document.querySelectorAll('.lesson-link').forEach(b=>{
   b.onclick=()=>{
     const id=b.dataset.id;
     const groupId = groupForLesson(id).id;
     localStorage.setItem('openLessonGroup',groupId);
     location.hash=id;
     renderReader(id);
     renderList(lessonSearchEl?.value || '');
   };
 });
 document.querySelectorAll('.lesson-link').forEach(b=>b.classList.toggle('active',b.dataset.id===activeId));
}
function renderReader(id){
 const l=getLesson(id);
 localStorage.setItem('openLessonGroup', groupForLesson(l.id).id);
 document.querySelectorAll('.lesson-link').forEach(b=>b.classList.toggle('active',b.dataset.id===l.id));
 lessonReaderEl.innerHTML=`
 <div class="lesson-hero"><span class="lesson-icon">${l.icon}</span><div><p class="eyebrow">الدرس ${l.no} · ${l.minutes}</p><h2>${l.title}</h2><p>${l.intro}</p></div></div>
 <section class="deep-block info"><h3>🎯 أهداف الدرس</h3><ul>${l.objectives.map(o=>`<li>${o}</li>`).join('')}</ul></section>
 ${l.body}
 <section class="deep-block"><h3>📌 ملخص سريع</h3><p>راجع الرسم أولًا، ثم اربط الفكرة بالتحويل إلى جداول. في قواعد البيانات أهم سلسلة هي: متطلبات ← ERD ← Schema ← SQL.</p></section>
 <section class="deep-block"><h3>📝 أسئلة مراجعة</h3><ol><li>ما أهم قاعدة تعلمتها في هذا الدرس؟</li><li>كيف تطبقها على نظام مكتبة أو متجر؟</li><li>ما الخطأ الذي يجب أن تتجنبه؟</li></ol></section>
 <div class="lesson-actions"><button class="btn primary" id="doneLesson">علّم الدرس كمكتمل</button><a class="btn ghost" href="oracle-practice.html">اذهب إلى الأمثلة</a></div>`;
 document.getElementById('doneLesson').onclick=()=>{
   localStorage.setItem('lesson_'+l.id,'1');
   document.getElementById('doneLesson').textContent='تم حفظ إنجازك ✅';
   renderList(lessonSearchEl?.value || '');
 };
 window.scrollTo({top:0,behavior:'smooth'});
}
renderList();
renderReader(location.hash.replace('#','')||'database');
lessonSearchEl?.addEventListener('input',e=>renderList(e.target.value));
window.addEventListener('hashchange',()=>{renderReader(location.hash.replace('#',''));renderList(lessonSearchEl?.value || '')});
