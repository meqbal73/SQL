
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
];

const lessonListEl = document.getElementById('lessonList');
const lessonReaderEl = document.getElementById('lessonReader');
const lessonSearchEl = document.getElementById('lessonSearch');
function getLesson(id){return detailedLessons.find(x=>x.id===id)||detailedLessons[0]}
function renderList(filter=''){
 const q=(filter||'').trim().toLowerCase();
 const data=detailedLessons.filter(l=>(l.title+' '+l.intro).toLowerCase().includes(q));
 lessonListEl.innerHTML=data.map(l=>`<button class="lesson-link" data-id="${l.id}"><b>${l.no}</b><span>${l.icon} ${l.title}<small>${l.minutes}</small></span></button>`).join('');
 document.querySelectorAll('.lesson-link').forEach(b=>b.onclick=()=>{location.hash=b.dataset.id;renderReader(b.dataset.id)});
}
function renderReader(id){
 const l=getLesson(id);
 document.querySelectorAll('.lesson-link').forEach(b=>b.classList.toggle('active',b.dataset.id===l.id));
 lessonReaderEl.innerHTML=`
 <div class="lesson-hero"><span class="lesson-icon">${l.icon}</span><div><p class="eyebrow">الدرس ${l.no} · ${l.minutes}</p><h2>${l.title}</h2><p>${l.intro}</p></div></div>
 <section class="deep-block info"><h3>🎯 أهداف الدرس</h3><ul>${l.objectives.map(o=>`<li>${o}</li>`).join('')}</ul></section>
 ${l.body}
 <section class="deep-block"><h3>📌 ملخص سريع</h3><p>راجع الرسم أولًا، ثم اربط الفكرة بالتحويل إلى جداول. في قواعد البيانات أهم سلسلة هي: متطلبات ← ERD ← Schema ← SQL.</p></section>
 <section class="deep-block"><h3>📝 أسئلة مراجعة</h3><ol><li>ما أهم قاعدة تعلمتها في هذا الدرس؟</li><li>كيف تطبقها على نظام مكتبة أو متجر؟</li><li>ما الخطأ الذي يجب أن تتجنبه؟</li></ol></section>
 <div class="lesson-actions"><button class="btn primary" id="doneLesson">علّم الدرس كمكتمل</button><a class="btn ghost" href="oracle-practice.html">اذهب إلى الأمثلة</a></div>`;
 document.getElementById('doneLesson').onclick=()=>{localStorage.setItem('lesson_'+l.id,'1');document.getElementById('doneLesson').textContent='تم حفظ إنجازك ✅'};
 window.scrollTo({top:0,behavior:'smooth'});
}
renderList();
renderReader(location.hash.replace('#','')||'database');
lessonSearchEl?.addEventListener('input',e=>renderList(e.target.value));
window.addEventListener('hashchange',()=>renderReader(location.hash.replace('#','')));
