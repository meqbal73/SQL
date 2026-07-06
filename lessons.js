const detailedLessons = [
{
 id:'database', no:'01', title:'مدخل قواعد البيانات', icon:'🗄️', minutes:'25 دقيقة',
 intro:'هذا الدرس يشرح معنى البيانات وقاعدة البيانات ولماذا نحتاجها في الأنظمة الحقيقية. الهدف أن تفهم الأساس قبل الدخول إلى ERD أو SQL.',
 objectives:['تفرق بين Data و Information.','تعرف لماذا نستخدم قاعدة البيانات بدل الملفات العادية.','تفهم معنى Table و Row و Column بصورة مبدئية.'],
 body:`
 <section class="deep-block"><h3>ما هي البيانات؟</h3><p>البيانات هي حقائق خام لم يتم تحليلها بعد. مثل رقم طالب، اسم موظف، تاريخ طلب، سعر منتج. هذه القيم وحدها قد لا تعطي قرارًا مباشرًا، لكنها تصبح مفيدة عندما ننظمها ونعالجها.</p></section>
 <section class="deep-block"><h3>ما هي المعلومات؟</h3><p>المعلومات هي معنى ناتج من معالجة البيانات. مثال: وجود رواتب الموظفين كبيانات شيء، وحساب متوسط الرواتب في قسم معيّن هو معلومة تساعد الإدارة في اتخاذ قرار.</p></section>
 <div class="lesson-diagram"><div class="diagram-flow"><div>بيانات خام</div><span>←</span><div>تنظيم داخل قاعدة البيانات</div><span>←</span><div>استعلام SQL</div><span>←</span><div>معلومة مفيدة</div></div></div>
 <section class="deep-block"><h3>لماذا لا نكتفي بملفات Excel؟</h3><p>Excel جيد للأعمال الصغيرة، لكن الأنظمة الحقيقية تحتاج أمان، صلاحيات، علاقات، تحديث متزامن، نسخ احتياطي، ومنع التكرار. قاعدة البيانات مصممة لإدارة هذه المشاكل.</p></section>
 <section class="deep-block info"><h3>مثال واقعي</h3><p>في نظام جامعة يوجد طلاب ومواد ومدرسون وشعب ودرجات. لو وضعنا كل شيء في ملف واحد سيحدث تكرار كبير. قاعدة البيانات تفصل البيانات في جداول مترابطة، مثل جدول STUDENTS وجدول COURSES وجدول ENROLLMENTS.</p></section>
 <div class="schema-grid"><div class="schema-table"><h4>STUDENTS</h4><code>student_id PK\nstudent_name\nmajor</code></div><div class="schema-table"><h4>COURSES</h4><code>course_id PK\ncourse_name\ncredit_hours</code></div><div class="schema-table"><h4>ENROLLMENTS</h4><code>student_id FK\ncourse_id FK\ngrade</code></div></div>
 <section class="deep-block warn"><h3>أخطاء شائعة</h3><ul><li>وضع كل بيانات النظام في جدول واحد.</li><li>تكرار نفس المعلومة في أكثر من مكان بدون سبب.</li><li>عدم استخدام مفتاح أساسي يميز كل سجل.</li></ul></section>`
},
{
 id:'sql-nosql', no:'02', title:'SQL و NoSQL', icon:'⚖️', minutes:'30 دقيقة',
 intro:'قبل اختيار نوع قاعدة البيانات، لازم تعرف الفرق بين النظام العلائقي SQL والنظام المرن NoSQL ومتى تستخدم كل واحد.',
 objectives:['تفهم فكرة الجداول والعلاقات في SQL.','تفهم فكرة المرونة في NoSQL.','تعرف متى تختار SQL ومتى تختار NoSQL.'],
 body:`
 <div class="compare big"><div><h3>SQL</h3><p>يعتمد على الجداول، الصفوف، الأعمدة، العلاقات، والقيود. مناسب للأنظمة التي تحتاج دقة عالية مثل الجامعات والبنوك والفواتير.</p><ul><li>Schema ثابت غالبًا</li><li>علاقات قوية</li><li>يدعم ACID</li><li>أمثلة: Oracle, MySQL, SQL Server</li></ul></div><div><h3>NoSQL</h3><p>يعتمد على نماذج مرنة مثل Documents أو Key-Value أو Graph. مناسب للبيانات المتغيرة بسرعة أو التطبيقات التي تحتاج توسع عالي.</p><ul><li>Schema مرن</li><li>توسع أفقي أسهل</li><li>مناسب للـ JSON</li><li>أمثلة: MongoDB, Firebase, Redis, Neo4j</li></ul></div></div>
 <section class="deep-block"><h3>متى SQL أفضل؟</h3><p>إذا عندك علاقات واضحة: عميل يملك فواتير، فاتورة تحتوي منتجات، طالب يسجل في مواد. هنا SQL ممتاز لأنه يحافظ على العلاقات بالمفاتيح الأجنبية والقيود.</p></section>
 <section class="deep-block"><h3>متى NoSQL أفضل؟</h3><p>إذا البيانات غير ثابتة الشكل أو تحتاج تخزين مستندات مختلفة لكل مستخدم أو توسع سريع جدًا. مثال: تطبيق يخزن إعدادات مستخدمين بشكل JSON مختلف من مستخدم لآخر.</p></section>
 <section class="deep-block info"><h3>قاعدة قرار سريعة</h3><div class="diagram-flow"><div>هل العلاقات مهمة؟</div><span>←</span><div>نعم: SQL</div><span> / </span><div>لا أو البيانات مرنة: NoSQL</div></div></section>
 <table class="mini-table"><tr><th>المعيار</th><th>SQL</th><th>NoSQL</th></tr><tr><td>الشكل</td><td>جداول</td><td>مستندات أو مفاتيح أو Graph</td></tr><tr><td>العلاقات</td><td>قوية جدًا</td><td>حسب النوع</td></tr><tr><td>التغيير</td><td>يحتاج تعديل Schema</td><td>مرن أكثر</td></tr></table>`
},
{
 id:'srs', no:'03', title:'وثيقة SRS', icon:'📄', minutes:'35 دقيقة',
 intro:'SRS هي الوثيقة التي تسبق التصميم والبرمجة. منها نستخرج الكيانات والعلاقات التي تظهر لاحقًا في ERD.',
 objectives:['تعرف وظيفة SRS في المشروع.','تفرق بين Functional و Non-Functional Requirements.','تتعلم كيف تستخرج الكيانات من المتطلبات.'],
 body:`
 <section class="deep-block"><h3>ما معنى SRS؟</h3><p>SRS اختصار Software Requirements Specification. هي وثيقة تشرح ماذا يريد العميل من النظام قبل أن نبدأ التصميم أو البرمجة. بدونها قد يفهم المطور شيئًا والعميل يقصد شيئًا آخر.</p></section>
 <div class="lesson-diagram"><div class="diagram-flow"><div>فكرة المشروع</div><span>←</span><div>SRS</div><span>←</span><div>ERD</div><span>←</span><div>Schema</div><span>←</span><div>SQL</div></div></div>
 <section class="deep-block"><h3>المتطلبات الوظيفية</h3><p>هي الأشياء التي يجب أن يقوم بها النظام. مثال: يستطيع الموظف إضافة كتاب جديد. يستطيع العضو استعارة كتاب. يستطيع النظام حساب غرامة التأخير.</p></section>
 <section class="deep-block"><h3>المتطلبات غير الوظيفية</h3><p>هي صفات جودة النظام مثل السرعة، الأمان، سهولة الاستخدام، التوفر، وقابلية الصيانة. مثال: صفحة البحث يجب أن تظهر خلال أقل من ثانيتين.</p></section>
 <section class="deep-block info"><h3>كيف نطلع ERD من SRS؟</h3><p>اقرأ الجمل وابحث عن الأسماء المهمة: عضو، كتاب، استعارة، موظف. غالبًا هذه الأسماء تتحول إلى Entities. ثم ابحث عن الأفعال: يستعير، يدير، يحتوي. غالبًا هذه تتحول إلى Relationships.</p></section>
 <div class="schema-grid"><div class="schema-table"><h4>جملة في SRS</h4><code>العضو يستطيع استعارة عدة كتب.</code></div><div class="schema-table"><h4>استخراج ERD</h4><code>MEMBER\nBOOK\nBORROW\nMEMBER 1:N BORROW\nBOOK 1:N BORROW</code></div></div>`
},
{
 id:'erd', no:'04', title:'مخطط ERD بالتفصيل', icon:'🧩', minutes:'60 دقيقة',
 intro:'ERD هو الرسم الذي يوضح الكيانات والخصائص والعلاقات قبل تحويلها إلى جداول SQL. هذا الدرس يعتمد على فكرة ملف ERD الذي أرسلته، لكن بصيغة الموقع وبشرح خطوة خطوة.',
 objectives:['تعرف Entity و Attribute و Relationship.','تفهم PK و FK والكارديناليتي.','تميز بين Chen Notation و Crow’s Foot.','تفهم مثال COMPANY الموجود في الـ PDF.'],
 body:`
 <section class="deep-block"><h3>ما هو ERD؟</h3><p>ERD هو مخطط الكيانات والعلاقات. نستخدمه قبل إنشاء الجداول حتى نفهم ما الذي سنخزنه، وما خصائص كل شيء، وكيف ترتبط الأشياء ببعضها.</p></section>
 <div class="erd-box"><div class="entity"><b>ENTITY</b><span>شيء مستقل نخزن عنه بيانات</span><span>مثل: CUSTOMER</span></div><div class="rel">يتحول إلى</div><div class="entity"><b>TABLE</b><span>جدول في قاعدة البيانات</span><span>مثل: customers</span></div></div>
 <section class="deep-block"><h3>Entity الكيان</h3><p>الكيان هو شيء له وجود مستقل في النظام ونحتاج تخزين معلومات عنه. في نظام الطلبات: Customer و Order و Product كيانات.</p></section>
 <section class="deep-block"><h3>Attribute الخاصية</h3><p>الخاصية هي معلومة تصف الكيان. Customer لديه customer_id و full_name و email. لاحقًا تتحول هذه الخصائص إلى أعمدة داخل الجدول.</p></section>
 <section class="deep-block"><h3>Relationship العلاقة</h3><p>العلاقة توضح كيف يرتبط كيان بآخر. مثال: العميل يضع طلبًا. هذه العلاقة تساعدنا نعرف أين نضع Foreign Key أو هل نحتاج جدول ربط.</p></section>
 <div class="erd-box"><div class="entity"><b>CUSTOMER</b><span>🔑 customer_id</span><span>full_name</span><span>email</span></div><div class="rel">1 ───── N<br><small>يضع طلبات</small></div><div class="entity"><b>ORDER</b><span>🔑 order_id</span><span>↳ customer_id FK</span><span>order_date</span><span>status</span></div></div>
 <section class="deep-block"><h3>Cardinality الكارديناليتي</h3><p>الكارديناليتي تحدد عدد السجلات الممكنة في العلاقة: واحد لواحد، واحد لمتعدد، أو متعدد لمتعدد.</p></section>
 <div class="relation-gallery"><div class="relation-card"><h4>1 : 1</h4><p>مستخدم واحد له جواز واحد.</p><div class="simple-rel"><b>USER</b><span>1 ─ 1</span><b>PASSPORT</b></div></div><div class="relation-card"><h4>1 : N</h4><p>قسم واحد يحتوي عدة موظفين.</p><div class="simple-rel"><b>DEPARTMENT</b><span>1 ─ N</span><b>EMPLOYEE</b></div></div><div class="relation-card"><h4>M : N</h4><p>طلب يحتوي عدة منتجات والمنتج يظهر في عدة طلبات.</p><div class="simple-rel"><b>ORDER</b><span>M ─ N</span><b>PRODUCT</b></div></div></div>
 <section class="deep-block info"><h3>Chen Notation</h3><p>في بعض الكتب مثل مثال COMPANY، الكيان يكون مستطيلًا، العلاقة تكون معينًا، والخاصية تكون بيضاوية. هذا أسلوب قديم ومهم في المناهج الجامعية.</p><div class="chen"><div class="oval">Fname</div><div class="rect">EMPLOYEE</div><div class="diamond">WORKS_FOR</div><div class="rect">DEPARTMENT</div><div class="oval">Name</div></div></section>
 <section class="deep-block"><h3>مثال COMPANY من ملف ERD</h3><p>المثال يحتوي كيانات مثل EMPLOYEE و DEPARTMENT و PROJECT و DEPENDENT. العلاقات المهمة: WORKS_FOR بين الموظف والقسم، MANAGES لإدارة القسم، CONTROLS بين القسم والمشروع، WORKS_ON بين الموظف والمشروع، وDEPENDENTS_OF للكيان الضعيف DEPENDENT.</p></section>
 <table class="mini-table"><tr><th>العلاقة</th><th>المعنى</th><th>التحويل لاحقًا</th></tr><tr><td>WORKS_FOR</td><td>كل موظف يعمل في قسم واحد والقسم يحتوي عدة موظفين</td><td>نضع dno كـ FK في EMPLOYEE</td></tr><tr><td>WORKS_ON</td><td>الموظف يعمل على عدة مشاريع والمشروع يضم عدة موظفين</td><td>جدول وسيط WORKS_ON</td></tr><tr><td>DEPENDENTS_OF</td><td>المعال يعتمد على موظف</td><td>DEPENDENT يأخذ essn من EMPLOYEE</td></tr></table>
 <section class="deep-block warn"><h3>أخطاء شائعة في ERD</h3><ul><li>رسم علاقة M:N بدون جدول وسيط عند التحويل.</li><li>اختيار الاسم كمفتاح أساسي رغم أنه قد يتكرر.</li><li>خلط Entity مع Attribute.</li><li>نسيان صفة العلاقة مثل Hours في WORKS_ON.</li></ul></section>`
},
{
 id:'erd-schema', no:'05', title:'تحويل ERD إلى Schema خطوة بخطوة', icon:'🔁', minutes:'70 دقيقة',
 intro:'هذا هو الدرس الذي طلبته تحديدًا: ليس قواعد بناء جدول، بل قواعد تحويل مخطط ERD إلى Schema. سنأخذ مثال الطلبات ثم مثال COMPANY ونحولهما خطوة بخطوة.',
 objectives:['تحول كل Entity إلى Table.','تعرف أين تضع FK في 1:N.','تعرف كيف تحل M:N بجدول وسيط.','تتعامل مع Weak Entity والصفات متعددة القيم.'],
 body:`
 <section class="deep-block"><h3>الفكرة الأساسية</h3><p>ERD هو الرسم، أما Schema فهو الشكل الجدولي القابل للتنفيذ في قاعدة البيانات: أسماء الجداول، الأعمدة، المفاتيح الأساسية، والمفاتيح الأجنبية.</p></section>
 <div class="lesson-diagram"><div class="diagram-flow"><div>ERD</div><span>←</span><div>Entities</div><span>←</span><div>Tables</div><span>←</span><div>PK / FK</div><span>←</span><div>Schema</div></div></div>
 <section class="deep-block info"><h3>مثال الطلبات من الصورة</h3><p>لدينا Customer و Order و Product وبين Order و Product علاقة M:N لذلك نحتاج جدول وسيط OrderItem.</p></section>
 <div class="erd-box"><div class="entity"><b>Customer</b><span>🔑 customer_id</span><span>full_name</span><span>email</span></div><div class="rel">1 ─ N</div><div class="entity"><b>Order</b><span>🔑 order_id</span><span>↳ customer_id FK</span><span>order_date</span><span>status</span></div></div>
 <div class="erd-box"><div class="entity"><b>Order</b><span>🔑 order_id</span></div><div class="rel">M ─ N<br><small>تحتاج جدول وسيط</small></div><div class="entity"><b>Product</b><span>🔑 product_id</span><span>name</span><span>price</span></div></div>
 <section class="deep-block"><h3><span class="step-badge">1</span>تحويل الكيانات إلى جداول</h3><p>كل Entity رئيسي يتحول إلى جدول مستقل: CUSTOMER يصبح customers، ORDER يصبح orders، PRODUCT يصبح products.</p></section>
 <div class="schema-grid"><div class="schema-table"><h4>customers</h4><code>customer_id PK\nfull_name\nemail</code></div><div class="schema-table"><h4>orders</h4><code>order_id PK\ncustomer_id FK\norder_date\nstatus</code></div><div class="schema-table"><h4>products</h4><code>product_id PK\nname\nprice</code></div></div>
 <section class="deep-block"><h3><span class="step-badge">2</span>تحويل علاقة 1:N</h3><p>في علاقة Customer 1:N Order نضع المفتاح الأجنبي في جهة N، لذلك نضيف customer_id داخل جدول orders.</p></section>
 <section class="deep-block"><h3><span class="step-badge">3</span>تحويل علاقة M:N</h3><p>العلاقة بين Order و Product لا تتحول إلى FK واحد فقط، بل ننشئ جدولًا وسيطًا order_items يحتوي مفاتيح الجدولين.</p></section>
 <div class="schema-grid"><div class="schema-table"><h4>order_items</h4><code>order_id FK\nproduct_id FK\nquantity\nPK(order_id, product_id)</code></div></div>
 <section class="deep-block"><h3><span class="step-badge">4</span>صفات العلاقة</h3><p>إذا العلاقة نفسها لها صفة مثل quantity، توضع في جدول الربط order_items لأنها تصف المنتج داخل طلب معيّن، وليست صفة للمنتج وحده ولا للطلب وحده.</p></section>
 <section class="deep-block"><h3>الناتج النهائي كـ Schema</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  full_name VARCHAR2(100) NOT NULL,
  email VARCHAR2(120)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT REFERENCES customers(customer_id),
  order_date DATE,
  status VARCHAR2(30)
);

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name VARCHAR2(100) NOT NULL,
  price NUMBER(8,2)
);

CREATE TABLE order_items (
  order_id INT REFERENCES orders(order_id),
  product_id INT REFERENCES products(product_id),
  quantity INT NOT NULL,
  PRIMARY KEY (order_id, product_id)
);</pre></div></section>
 <section class="deep-block info"><h3>تطبيق على مثال COMPANY</h3><p>EMPLOYEE يتحول إلى جدول employee. DEPARTMENT يتحول إلى department. PROJECT يتحول إلى project. DEPENDENT كيان ضعيف، لذلك يأخذ مفتاح الموظف essn مع dependent_name كمفتاح مركب. WORKS_ON علاقة M:N بين EMPLOYEE و PROJECT لذلك تتحول إلى جدول وسيط ويحمل Hours لأنها صفة للعلاقة.</p></section>
 <table class="mini-table"><tr><th>من ERD</th><th>إلى Schema</th><th>السبب</th></tr><tr><td>EMPLOYEE</td><td>employee</td><td>Entity رئيسي</td></tr><tr><td>DEPARTMENT</td><td>department</td><td>Entity رئيسي</td></tr><tr><td>WORKS_FOR 1:N</td><td>dno داخل employee</td><td>FK في جهة N</td></tr><tr><td>WORKS_ON M:N</td><td>works_on(essn, pno, hours)</td><td>جدول وسيط</td></tr><tr><td>DEPENDENT ضعيف</td><td>dependent(essn, dependent_name)</td><td>مفتاح مركب من مالكه ومفتاحه الجزئي</td></tr></table>
 <section class="deep-block"><h3>كود DEPENDENT كما في فكرة الملف</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>CREATE TABLE dependent (
  essn INT REFERENCES employee(ssn),
  dependent_name VARCHAR2(50),
  sex CHAR(1),
  birth_date DATE,
  relationship VARCHAR2(30),
  PRIMARY KEY (essn, dependent_name)
);</pre></div><p>لاحظ أن dependent_name وحده لا يكفي، لأن أكثر من موظف ممكن يكون لديه معال بنفس الاسم. لذلك المفتاح المركب هو essn + dependent_name.</p></section>
 <section class="deep-block warn"><h3>قاعدة ذهبية</h3><p>إذا كانت العلاقة 1:N ضع FK في جهة N. إذا كانت M:N أنشئ جدولًا وسيطًا. إذا كانت العلاقة لها صفة، غالبًا الصفة تذهب إلى جدول العلاقة أو الجدول الوسيط.</p></section>`
},
{
 id:'schema', no:'06', title:'Schema والجداول في Oracle', icon:'🏗️', minutes:'35 دقيقة',
 intro:'بعد تحويل ERD إلى Schema، نحتاج فهم معنى Schema داخل Oracle وكيف تظهر الجداول والأعمدة والصفوف والمفاتيح.',
 objectives:['تعرف الفرق بين Database و Schema و Table.','تفهم HR Schema.','تعرف معنى Row و Column و Constraint.'],
 body:`
 <section class="deep-block"><h3>ما معنى Schema؟</h3><p>في Oracle، الـ Schema هي مجموعة كائنات يملكها مستخدم معين، مثل الجداول والفهارس والعروض. مثال HR Schema يحتوي جداول تدريبية مثل EMPLOYEES و DEPARTMENTS.</p></section>
 <div class="tree"><b>Oracle Database</b><ul><li>HR Schema<ul><li>EMPLOYEES</li><li>DEPARTMENTS</li><li>JOBS</li><li>LOCATIONS</li><li>COUNTRIES</li></ul></li><li>SALES Schema</li><li>FINANCE Schema</li></ul></div>
 <section class="deep-block"><h3>الجدول والصف والعمود</h3><p>الجدول يخزن نوعًا واحدًا من البيانات. الصف يمثل سجلًا واحدًا. العمود يمثل معلومة محددة داخل السجل.</p></section>
 <table class="mini-table"><tr><th>employee_id</th><th>first_name</th><th>salary</th><th>department_id</th></tr><tr><td>100</td><td>Steven</td><td>24000</td><td>90</td></tr><tr><td>101</td><td>Neena</td><td>17000</td><td>90</td></tr></table>
 <section class="deep-block info"><h3>المفاتيح والقيود</h3><p>Primary Key يميز كل صف. Foreign Key يربط جدولًا بآخر. NOT NULL يمنع الفراغ. UNIQUE يمنع التكرار. CHECK يسمح بقيم محددة فقط.</p></section>`
},
{
 id:'select', no:'07', title:'SELECT من الصفر', icon:'💻', minutes:'35 دقيقة',
 intro:'SELECT هو أول أمر SQL تستخدمه لعرض البيانات. لا يغير البيانات، فقط يسترجعها من جدول.',
 objectives:['تفهم SELECT و FROM و * و ;.','تعرف لماذا نحدد الأعمدة بدل النجمة.','تقرأ نتيجة الاستعلام بشكل صحيح.'],
 body:`
 <section class="deep-block"><h3>الصيغة الأساسية</h3><div class="sql-map"><span>SELECT</span><span>الأعمدة</span><span>FROM</span><span>الجدول</span><span>;</span></div><p>SELECT يعني ماذا تريد أن تعرض. FROM يعني من أي جدول. الفاصلة المنقوطة تعني نهاية الأمر في أدوات كثيرة.</p></section>
 <section class="deep-block"><h3>مثال: عرض كل الأعمدة</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>SELECT *
FROM employees;</pre></div><p>النجمة تعني كل الأعمدة. جيدة للتعلم، لكن ليست الأفضل دائمًا في العمل.</p></section>
 <section class="deep-block"><h3>مثال: تحديد أعمدة معينة</h3><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>SELECT first_name, last_name, salary
FROM employees;</pre></div><table class="mini-table"><tr><th>first_name</th><th>last_name</th><th>salary</th></tr><tr><td>Steven</td><td>King</td><td>24000</td></tr><tr><td>Neena</td><td>Kochhar</td><td>17000</td></tr></table></section>
 <section class="deep-block warn"><h3>أخطاء شائعة</h3><ul><li>نسيان FROM.</li><li>كتابة اسم جدول غير موجود.</li><li>استخدام * في تقارير كبيرة بدون حاجة.</li></ul></section>`
},
{
 id:'where-order', no:'08', title:'WHERE و ORDER BY', icon:'🔎', minutes:'30 دقيقة',
 intro:'بعد أن تعرف SELECT، تحتاج تصفية النتائج وترتيبها. WHERE يختار الصفوف، و ORDER BY يرتب النتيجة.',
 objectives:['تستخدم WHERE لتصفية الصفوف.','تستخدم AND و OR بوضوح.','ترتب النتائج باستخدام ORDER BY.'],
 body:`
 <section class="deep-block"><h3>WHERE</h3><p>WHERE تحدد شرطًا. الصف الذي يحقق الشرط يظهر في النتيجة، والصف الذي لا يحققه لا يظهر.</p><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>SELECT last_name, salary
FROM employees
WHERE salary > 10000;</pre></div></section>
 <section class="deep-block"><h3>ORDER BY</h3><p>ORDER BY يرتب النتيجة. DESC من الأكبر إلى الأصغر، و ASC من الأصغر إلى الأكبر.</p><div class="codebox"><button class="btn ghost copy-btn" onclick="copyText(this.nextElementSibling.innerText)">نسخ</button><pre>SELECT last_name, salary
FROM employees
WHERE salary > 10000
ORDER BY salary DESC;</pre></div></section>
 <div class="lesson-diagram"><div class="diagram-flow"><div>FROM</div><span>←</span><div>WHERE</div><span>←</span><div>SELECT</div><span>←</span><div>ORDER BY</div></div></div>
 <section class="deep-block warn"><h3>انتبه</h3><p>لا تكتب ORDER BY قبل WHERE. الترتيب الصحيح هو SELECT ثم FROM ثم WHERE ثم ORDER BY.</p></section>`
}
];
const lessonListEl = document.getElementById('lessonList');
const lessonReaderEl = document.getElementById('lessonReader');
const lessonSearchEl = document.getElementById('lessonSearch');
function getLesson(id){return detailedLessons.find(x=>x.id===id)||detailedLessons[0]}
function renderList(filter=''){
 const q=filter.trim().toLowerCase();
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
 <section class="deep-block"><h3>📌 ملخص سريع</h3><p>راجع الرسم، ثم اربط الفكرة بالمثال العملي. أهم شيء في قواعد البيانات هو فهم العلاقة بين المتطلبات، ERD، Schema، ثم SQL.</p></section>
 <section class="deep-block"><h3>📝 أسئلة مراجعة</h3><ol><li>ما أهم فكرة في هذا الدرس؟</li><li>كيف تطبقها على نظام مكتبة أو متجر؟</li><li>ما الخطأ الذي يجب أن تتجنبه؟</li></ol></section>
 <div class="lesson-actions"><button class="btn primary" id="doneLesson">علّم الدرس كمكتمل</button><a class="btn ghost" href="playground.html">اذهب إلى الأمثلة</a></div>`;
 document.getElementById('doneLesson').onclick=()=>{localStorage.setItem('lesson_'+l.id,'1');document.getElementById('doneLesson').textContent='تم حفظ إنجازك ✅'};
 window.scrollTo({top:0,behavior:'smooth'});
}
renderList();
renderReader(location.hash.replace('#','')||'database');
lessonSearchEl?.addEventListener('input',e=>renderList(e.target.value));
window.addEventListener('hashchange',()=>renderReader(location.hash.replace('#','')));
