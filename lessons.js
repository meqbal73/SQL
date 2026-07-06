const basicLessons = [
  {
    id:'database', icon:'🗄️',
    titleAr:'1) ما هي قاعدة البيانات؟', titleEn:'1) What is a Database?',
    subtitleAr:'الأساس الذي لازم تفهمه قبل أي SQL.', subtitleEn:'The foundation you must understand before SQL.',
    diagram:'database',
    sectionsAr:[
      ['الفكرة الأساسية','قاعدة البيانات هي مكان منظم لتخزين البيانات بحيث نقدر نبحث عنها، نعدلها، نحذفها، ونطلع منها تقارير. الفرق بينها وبين ملف عادي أن قاعدة البيانات لا تخزن المعلومات عشوائيًا؛ بل تخزنها داخل جداول أو هياكل واضحة، وكل جزء له معنى وعلاقة بباقي الأجزاء.'],
      ['Data vs Information','البيانات Data هي أرقام أو نصوص خام مثل: 100، Ahmed، 2026-07-01. أما المعلومات Information فهي نتيجة فهم هذه البيانات، مثل: أحمد اشترى منتجًا بمبلغ 100 في تاريخ محدد. لذلك قاعدة البيانات تساعدنا نحول البيانات الخام إلى معلومات مفيدة.'],
      ['لماذا لا نكتفي بـ Excel؟','Excel ممتاز للجداول البسيطة، لكن لما يزيد عدد المستخدمين والبيانات والعلاقات، تظهر مشاكل: تكرار، أخطاء، صعوبة صلاحيات، بطء، وصعوبة معرفة من عدل ماذا. قاعدة البيانات تحل هذه المشاكل لأنها تدعم العلاقات، المفاتيح، القيود، الأمان، والتعامل مع عدد كبير من العمليات.'],
      ['مثال حقيقي','في نظام جامعة، عندك طلاب، مواد، دكاترة، تسجيل مواد، درجات. لا يصح تخزين كل شيء في جدول واحد؛ الأفضل تقسيمه إلى جداول مترابطة: Students, Courses, Instructors, Enrollments, Grades.'],
      ['الخلاصة','أي نظام حقيقي يحتاج قاعدة بيانات إذا كان يتعامل مع بيانات كثيرة أو علاقات أو أكثر من مستخدم. SQL هي اللغة التي نخاطب بها قواعد البيانات العلائقية.']
    ],
    sectionsEn:[
      ['Core idea','A database is an organized place for storing data so we can search, update, delete, and generate reports. It is not random storage; data is arranged in clear structures such as tables, and each part has a meaning and relation to other parts.'],
      ['Data vs Information','Data is raw values such as 100, Ahmed, or 2026-07-01. Information is the meaningful result, such as Ahmed bought a product for 100 on a specific date. Databases help convert raw data into useful information.'],
      ['Why not only Excel?','Excel is good for simple sheets, but when users, data size, and relationships grow, problems appear: duplication, mistakes, weak permissions, slowness, and unclear editing history. Databases solve this with relationships, keys, constraints, security, and multi-user support.'],
      ['Real example','In a university system you have students, courses, instructors, enrollments, and grades. Storing everything in one table is wrong; the better design is connected tables.'],
      ['Summary','Any real system needs a database when it handles many records, relationships, or multiple users. SQL is the language used to communicate with relational databases.']
    ],
    code:`-- A database stores related tables\nSELECT first_name, last_name\nFROM employees;`,
    mistakesAr:['خلط Database مع Table: قاعدة البيانات تحتوي جداول كثيرة، والجدول جزء منها.','وضع كل البيانات في جدول واحد يسبب تكرار وصعوبة تعديل.','نسيان العلاقات بين الجداول يجعل التصميم ضعيفًا.'],
    mistakesEn:['Confusing database with table: a database contains many tables.','Putting all data in one table causes duplication and update problems.','Ignoring relationships makes the design weak.'],
    quizAr:['ما الفرق بين Data و Information؟','اذكر مثالًا على نظام يحتاج قاعدة بيانات.','لماذا Excel ليس كافيًا للأنظمة الكبيرة؟'],
    quizEn:['What is the difference between Data and Information?','Give an example of a system that needs a database.','Why is Excel not enough for large systems?']
  },
  {
    id:'sql-nosql', icon:'⚖️', titleAr:'2) SQL vs NoSQL', titleEn:'2) SQL vs NoSQL', subtitleAr:'متى أستخدم الجداول ومتى أستخدم Document أو Key-Value؟', subtitleEn:'When to use tables and when to use document or key-value models?', diagram:'compare',
    sectionsAr:[
      ['SQL باختصار','SQL قواعد بيانات علائقية تعتمد على الجداول. البيانات تكون منظمة في Rows و Columns، والعلاقات بينها واضحة باستخدام Primary Key و Foreign Key. أمثلة: Oracle, MySQL, PostgreSQL, SQL Server.'],
      ['NoSQL باختصار','NoSQL ليست نوعًا واحدًا. هي عائلة قواعد بيانات مرنة مثل Document (MongoDB/Firebase)، Key-Value (Redis)، Graph (Neo4j)، Column-Family (Cassandra). تستخدم غالبًا عندما تحتاج مرونة عالية أو سرعة قراءة/كتابة لأنواع بيانات غير ثابتة.'],
      ['متى SQL أفضل؟','إذا عندك علاقات قوية، تقارير دقيقة، معاملات مالية، نظام موارد بشرية، فواتير، جامعة، أو أي نظام يحتاج دقة عالية وتكامل بيانات؛ SQL غالبًا أفضل.'],
      ['متى NoSQL أفضل؟','إذا البيانات تتغير كثيرًا، أو شكل السجل غير ثابت، أو تحتاج تخزين JSON، أو نظام محادثات/Logs/Cache/Real-time؛ NoSQL قد يكون مناسبًا.'],
      ['قاعدة قرار بسيطة','إذا السؤال الأساسي: هل عندي علاقات واضحة وتقارير دقيقة؟ ابدأ بـ SQL. إذا السؤال: هل أحتاج مرونة كبيرة وشكل بيانات متغير؟ فكر في NoSQL.']
    ],
    sectionsEn:[
      ['SQL in short','SQL databases are relational and table-based. Data is organized into rows and columns, and relationships are defined using primary and foreign keys. Examples: Oracle, MySQL, PostgreSQL, SQL Server.'],
      ['NoSQL in short','NoSQL is not one type. It includes document databases, key-value stores, graph databases, and column-family systems. It is often used when flexibility or high-speed access for changing data structures is needed.'],
      ['When SQL is better','If you have strong relationships, accurate reports, financial transactions, HR systems, invoices, university systems, or data integrity requirements, SQL is usually better.'],
      ['When NoSQL is better','If the data shape changes frequently, records are not fixed, JSON storage is needed, or you build chat/log/cache/real-time systems, NoSQL may fit well.'],
      ['Simple decision rule','If you need clear relationships and accurate reporting, start with SQL. If you need flexible changing data structures, consider NoSQL.']
    ],
    code:`-- SQL uses structured tables\nSELECT customer_name, total_price\nFROM invoices;\n\n-- NoSQL example idea:\n-- { "customerName": "Ali", "orders": [...] }`,
    mistakesAr:['الاعتقاد أن NoSQL أفضل دائمًا لأنه أحدث.','استخدام NoSQL مع نظام يحتاج علاقات وتقارير مالية دقيقة جدًا بدون سبب.','استخدام SQL مع بيانات JSON متغيرة جدًا بدون تخطيط.'],
    mistakesEn:['Thinking NoSQL is always better because it is newer.','Using NoSQL for highly relational financial reporting without a clear reason.','Using SQL for highly changing JSON data without planning.'],
    quizAr:['اذكر مثالين على قواعد SQL.','متى يكون NoSQL مناسبًا؟','لماذا SQL مناسب للفواتير؟'],
    quizEn:['Give two SQL database examples.','When is NoSQL suitable?','Why is SQL suitable for invoices?']
  },
  {
    id:'srs', icon:'📄', titleAr:'3) وثيقة SRS', titleEn:'3) SRS Document', subtitleAr:'قبل التصميم والبرمجة لازم نعرف المتطلبات.', subtitleEn:'Before design and coding, requirements must be clear.', diagram:'srs',
    sectionsAr:[
      ['ما هي SRS؟','SRS اختصار Software Requirements Specification، وهي وثيقة تصف ماذا يريد العميل أو المستخدم من النظام. لا تشرح غالبًا كيف نبرمج، بل تشرح ماذا يجب أن يفعل النظام وما القيود المطلوبة.'],
      ['لماذا مهمة؟','بدون SRS يمكن للمبرمج يفهم المطلوب بطريقة، والعميل يقصد شيئًا آخر. SRS تقلل سوء الفهم، وتساعد الفريق في التصميم، الاختبار، وتقدير الوقت.'],
      ['Functional Requirements','هي الوظائف التي يجب أن يقدمها النظام. مثال: المستخدم يستطيع تسجيل الدخول، الطالب يستطيع عرض درجاته، الأدمن يستطيع إضافة مادة. هذه متطلبات مباشرة مرتبطة بسلوك النظام.'],
      ['Non-Functional Requirements','هي جودة النظام وليس وظيفة مباشرة. مثل: الأمان، سرعة الاستجابة، سهولة الاستخدام، التوفر، قابلية التوسع، الصيانة. مثال: يجب أن يتم تسجيل الدخول خلال أقل من 3 ثوان.'],
      ['كيف تربطها بالـ ERD؟','بعد قراءة SRS نبحث عن الأسماء المهمة: طالب، مادة، فاتورة، منتج. هذه غالبًا تصبح Entities. ثم نبحث عن الأفعال والعلاقات: الطالب يسجل مادة، العميل يملك فاتورة. هذه تساعدنا نبني ERD.']
    ],
    sectionsEn:[
      ['What is SRS?','SRS means Software Requirements Specification. It describes what the customer or user wants from the system. It usually focuses on what the system must do, not how to code it.'],
      ['Why is it important?','Without SRS, the developer may understand the task one way while the client means something else. SRS reduces misunderstanding and helps design, testing, and time estimation.'],
      ['Functional Requirements','These are the features the system must provide, such as login, viewing grades, or adding a course. They describe system behavior.'],
      ['Non-Functional Requirements','These describe system quality such as security, speed, usability, availability, scalability, and maintainability. Example: login should complete within 3 seconds.'],
      ['Connection to ERD','After reading SRS, find important nouns: student, course, invoice, product. These often become entities. Then find verbs/relations: student enrolls in course, customer owns invoice.']
    ],
    code:`-- SRS sentence:\n-- "A customer can create many invoices."\n-- ERD result idea:\n-- CUSTOMER 1 ---- N INVOICE`,
    mistakesAr:['كتابة SRS عامة جدًا مثل: النظام يكون ممتاز. لازم تكون قابلة للقياس.','خلط المتطلبات الوظيفية وغير الوظيفية.','الانتقال للبرمجة قبل فهم المتطلبات.'],
    mistakesEn:['Writing vague requirements such as: the system should be excellent. Requirements should be measurable.','Mixing functional and non-functional requirements.','Starting coding before understanding requirements.'],
    quizAr:['ما معنى SRS؟','أعط مثال Functional Requirement.','أعط مثال Non-Functional Requirement.'],
    quizEn:['What does SRS mean?','Give a functional requirement example.','Give a non-functional requirement example.']
  },
  {
    id:'erd', icon:'🧩', titleAr:'4) ERD بالتفصيل مع رسومات', titleEn:'4) Detailed ERD with Diagrams', subtitleAr:'تحويل الكلام إلى كيانات وعلاقات واضحة.', subtitleEn:'Turning text into clear entities and relationships.', diagram:'erd',
    sectionsAr:[
      ['ما هو ERD؟','ERD اختصار Entity Relationship Diagram. هو رسم يوضح الجداول المستقبلية للنظام والعلاقات بينها قبل إنشاء الجداول في قاعدة البيانات. فائدته أنك تكتشف الأخطاء قبل البرمجة.'],
      ['Entity','الكيان هو شيء مهم في النظام نحتاج نخزن عنه بيانات. مثال: Student, Course, Product, Customer, Invoice. غالبًا الكيان يصبح Table لاحقًا.'],
      ['Attribute','الصفة هي معلومة تخص الكيان. مثال: Student له student_id, name, phone. Product له product_id, product_name, price. لاحقًا الصفات تصبح Columns.'],
      ['Primary Key و Foreign Key','Primary Key يميز كل سجل داخل الجدول ولا يتكرر. Foreign Key يربط جدولًا بجدول آخر. مثال: invoices تحتوي customer_id كـ FK لأنها تابعة لعميل.'],
      ['Cardinality','تحدد عدد السجلات بين الكيانات: واحد لواحد 1:1، واحد لكثير 1:N، كثير لكثير M:N. مثال: عميل واحد يملك عدة فواتير = 1:N.'],
      ['مثال مكتبة','Member يستعير Borrow، والكتاب يدخل في Borrow. إذا الكتاب يمكن استعارته مرات كثيرة، العلاقة Book 1:N Borrow. والعضو يمكنه عدة استعارات، Member 1:N Borrow.']
    ],
    sectionsEn:[
      ['What is ERD?','ERD means Entity Relationship Diagram. It shows the future tables of a system and the relationships between them before creating the database tables. It helps catch design mistakes early.'],
      ['Entity','An entity is an important thing in the system that we need to store data about, such as Student, Course, Product, Customer, or Invoice. An entity usually becomes a table.'],
      ['Attribute','An attribute is information about an entity. A student has student_id, name, phone. A product has product_id, product_name, price. Attributes become columns.'],
      ['Primary Key and Foreign Key','A primary key uniquely identifies each row. A foreign key connects one table to another. Example: invoices contain customer_id as an FK because each invoice belongs to a customer.'],
      ['Cardinality','Cardinality shows how many records can be related: 1:1, 1:N, and M:N. Example: one customer has many invoices = 1:N.'],
      ['Library example','A member creates borrow records, and a book appears in borrow records. Book 1:N Borrow and Member 1:N Borrow.']
    ],
    code:`-- From ERD to SQL idea\nCUSTOMERS(customer_id PK, customer_name, phone)\nINVOICES(invoice_id PK, invoice_date, customer_id FK)`,
    mistakesAr:['رسم العلاقة بدون تحديد 1 أو N.','نسيان جدول وسيط في علاقة Many-to-Many.','استخدام اسم جمع أو غير واضح للكيانات.','وضع FK في المكان الخطأ.'],
    mistakesEn:['Drawing relationships without 1 or N.','Forgetting an associative table for many-to-many relationships.','Using unclear entity names.','Placing the foreign key in the wrong table.'],
    quizAr:['ما الفرق بين Entity و Attribute؟','أين نضع FK في علاقة Customer و Invoice؟','كيف نمثل علاقة Many-to-Many؟'],
    quizEn:['What is the difference between entity and attribute?','Where do we place the FK between Customer and Invoice?','How do we represent many-to-many?']
  },
  {
    id:'schema', icon:'🏗️', titleAr:'5) Schema والجداول', titleEn:'5) Schema and Tables', subtitleAr:'افهم ترتيب قاعدة البيانات قبل CREATE TABLE.', subtitleEn:'Understand database structure before CREATE TABLE.', diagram:'schema',
    sectionsAr:[
      ['ما هي Schema؟','Schema هي مساحة منطقية داخل قاعدة البيانات تحتوي كائنات مثل Tables, Views, Indexes, Sequences. في Oracle كثيرًا ما ترتبط Schema باسم User. مثال HR Schema تحتوي EMPLOYEES و DEPARTMENTS و JOBS.'],
      ['Database vs Schema vs Table','Database هي النظام الكبير الذي يدير التخزين. Schema مثل مجلد منطقي داخل قاعدة البيانات. Table هو جدول محدد داخل Schema. Column هو خانة/حقل، Row هو سجل كامل.'],
      ['مثال HR Schema','HR Schema في تدريبات Oracle تحتوي جداول مثل EMPLOYEES, DEPARTMENTS, JOBS, LOCATIONS. جدول EMPLOYEES فيه أعمدة مثل employee_id, first_name, salary, department_id.'],
      ['لماذا نفهم Schema؟','قبل كتابة SQL لازم تعرف من أين تأتي البيانات. إذا كتبت SELECT من جدول غير موجود أو في Schema مختلفة، سيظهر خطأ. فهم Schema يساعدك تعرف العلاقات وتكتب Joins لاحقًا.'],
      ['Schema ليست CREATE TABLE','أنت طلبت شرح السكيما والجدول وليس الإنشاء فقط. لذلك هنا نفهم الخريطة: من يملك الجداول؟ ما أسماء الجداول؟ ما الأعمدة؟ ما المفاتيح؟ ما العلاقات؟ بعد ذلك ننتقل للإنشاء.']
    ],
    sectionsEn:[
      ['What is Schema?','A schema is a logical area inside a database that contains objects such as tables, views, indexes, and sequences. In Oracle it is often connected to a user name. Example: HR schema contains EMPLOYEES, DEPARTMENTS, and JOBS.'],
      ['Database vs Schema vs Table','A database is the large system that manages storage. A schema is a logical container. A table is a specific structure inside a schema. A column is a field, and a row is a full record.'],
      ['HR Schema example','Oracle HR Schema contains tables such as EMPLOYEES, DEPARTMENTS, JOBS, and LOCATIONS. EMPLOYEES has columns like employee_id, first_name, salary, and department_id.'],
      ['Why understand Schema?','Before writing SQL you must know where the data comes from. If you SELECT from a missing table or different schema, errors happen. Understanding schema helps with relationships and joins later.'],
      ['Schema is not only CREATE TABLE','Here we understand the map first: who owns the tables, table names, columns, keys, and relationships. Then we move to creation.']
    ],
    code:`-- HR schema idea\nHR\n ├─ EMPLOYEES(employee_id, first_name, salary, department_id)\n ├─ DEPARTMENTS(department_id, department_name)\n └─ JOBS(job_id, job_title)`,
    mistakesAr:['اعتبار Schema نفس Table.','حفظ الاستعلام بدون معرفة الجداول والعلاقات.','نسيان اسم Schema عند العمل في بيئات متعددة.'],
    mistakesEn:['Thinking schema is the same as table.','Memorizing queries without understanding tables and relationships.','Forgetting schema name in multi-schema environments.'],
    quizAr:['ما الفرق بين Database و Schema؟','اذكر جدولين من HR Schema.','ما الفرق بين Row و Column؟'],
    quizEn:['What is the difference between database and schema?','Name two HR schema tables.','What is the difference between row and column?']
  },
  {
    id:'table-rules', icon:'📐', titleAr:'6) قواعد بناء الجدول السبعة', titleEn:'6) Seven Table Design Rules', subtitleAr:'كيف تفكر قبل بناء الجدول؟', subtitleEn:'How to think before building a table.', diagram:'rules',
    sectionsAr:[
      ['Rule 1: اسم واضح','اسم الجدول لازم يعبر عن كيان واحد مثل STUDENT أو PRODUCT. لا تستخدم اسم غامض مثل data1. في Oracle غالبًا الأسماء تكون واضحة وبالأحرف الكبيرة، لكن في الشرح نستخدم lower_snake_case للوضوح.'],
      ['Rule 2: Primary Key لكل جدول','كل جدول أساسي لازم يحتوي مفتاح أساسي يميز كل صف. مثال: student_id، product_id. بدون PK صعب نعدل أو نحذف سجل محدد بأمان.'],
      ['Rule 3: الأعمدة تمثل صفات فقط','لا تضع أكثر من معنى في عمود واحد. مثال سيئ: full_info يحتوي الاسم والجوال والمدينة. الأفضل: name, phone, city.'],
      ['Rule 4: اختر Data Type صحيح','النصوص VARCHAR2، الأرقام NUMBER، التواريخ DATE. لا تخزن التاريخ كنص إذا تحتاج تقارن أو ترتب بالتاريخ. ولا تخزن السعر كنص.'],
      ['Rule 5: قلل التكرار Normalization','إذا تكرر اسم القسم مع كل موظف، الأفضل جدول DEPARTMENTS ونربطه بـ department_id. هذا يقلل الأخطاء ويجعل التعديل أسهل.'],
      ['Rule 6: العلاقات بالمفاتيح الأجنبية','إذا فاتورة تخص عميل، ضع customer_id داخل INVOICES كـ FK. FK يحافظ على أن الفاتورة لا ترتبط بعميل غير موجود.'],
      ['Rule 7: القيود والأسماء','استخدم NOT NULL للأعمدة الضرورية، UNIQUE للقيم التي لا تتكرر، CHECK للشروط، DEFAULT للقيمة الافتراضية. واتبع Naming Convention ثابت مثل employee_id و hire_date.']
    ],
    sectionsEn:[
      ['Rule 1: Clear name','The table name should represent one entity such as STUDENT or PRODUCT. Avoid vague names like data1. Use consistent naming.'],
      ['Rule 2: Primary Key for each table','Every core table should have a primary key that identifies each row, such as student_id or product_id. Without PK, safe updates and deletes are difficult.'],
      ['Rule 3: Columns are attributes only','Do not store multiple meanings in one column. Bad: full_info includes name, phone, and city. Better: name, phone, city.'],
      ['Rule 4: Choose correct data type','Use VARCHAR2 for text, NUMBER for numbers, and DATE for dates. Do not store dates or prices as text when you need comparison or sorting.'],
      ['Rule 5: Reduce duplication','If department name repeats with every employee, create DEPARTMENTS and connect with department_id. This reduces mistakes.'],
      ['Rule 6: Relationships with foreign keys','If an invoice belongs to a customer, put customer_id inside INVOICES as FK. FK prevents invoices from pointing to missing customers.'],
      ['Rule 7: Constraints and names','Use NOT NULL, UNIQUE, CHECK, and DEFAULT when needed. Follow consistent naming such as employee_id and hire_date.']
    ],
    code:`-- Good table thinking\nEMPLOYEES\n- employee_id  PK\n- first_name   NOT NULL\n- salary       NUMBER\n- department_id FK`,
    mistakesAr:['اختيار VARCHAR2 لكل شيء حتى الأرقام والتواريخ.','عدم وجود PK.','تكرار نفس المعلومة في أكثر من جدول بدون سبب.','إضافة أعمدة كثيرة غير مفهومة.'],
    mistakesEn:['Using VARCHAR2 for everything including numbers and dates.','No primary key.','Duplicating the same information without reason.','Adding many unclear columns.'],
    quizAr:['لماذا كل جدول يحتاج PK؟','متى نستخدم FK؟','ما الخطأ في تخزين السعر كنص؟'],
    quizEn:['Why does each table need a PK?','When do we use FK?','What is wrong with storing price as text?']
  },
  {
    id:'select', icon:'🔎', titleAr:'7) SELECT البدائي', titleEn:'7) Basic SELECT', subtitleAr:'أول استعلام لازم تفهم كل كلمة فيه.', subtitleEn:'The first query where every word must be clear.', diagram:'select',
    sectionsAr:[
      ['ما معنى SELECT؟','SELECT تعني اختر أو اعرض. نستخدمها لاسترجاع بيانات من جدول. هي لا تغير البيانات، فقط تعرضها. لذلك هي آمنة للتعلم والتجربة.'],
      ['ما معنى FROM؟','FROM تحدد الجدول الذي سنأخذ منه البيانات. مثلًا FROM employees يعني اجلب البيانات من جدول الموظفين.'],
      ['ما معنى * ؟','النجمة تعني كل الأعمدة. SELECT * FROM employees يعرض كل أعمدة جدول employees. تستخدم للتجربة، لكن في التقارير الأفضل تحدد الأعمدة المطلوبة فقط.'],
      ['اختيار أعمدة محددة','بدل عرض كل شيء، اكتب أسماء الأعمدة: SELECT first_name, salary FROM employees. هذا أوضح وأسرع وأفضل للمشاريع الحقيقية.'],
      ['الفاصلة المنقوطة ;','في SQL Developer غالبًا تستخدم ; لإنهاء الجملة. إذا كتبت أكثر من استعلام، الفاصلة المنقوطة تساعد الأداة تعرف نهاية كل استعلام.']
    ],
    sectionsEn:[
      ['Meaning of SELECT','SELECT means choose or display. It retrieves data from a table. It does not change data, so it is safe for learning.'],
      ['Meaning of FROM','FROM specifies the table where data comes from. FROM employees means get data from the employees table.'],
      ['Meaning of *','The star means all columns. SELECT * FROM employees displays all employee columns. It is useful for exploration, but reports should select needed columns only.'],
      ['Selecting specific columns','Instead of displaying everything, write column names: SELECT first_name, salary FROM employees. This is clearer and better for real projects.'],
      ['Semicolon ;','In SQL Developer, ; is commonly used to end a statement. When writing multiple queries, it helps the tool detect where each query ends.']
    ],
    code:`SELECT *\nFROM employees;\n\nSELECT first_name, last_name, salary\nFROM employees;`,
    mistakesAr:['نسيان FROM.','كتابة اسم عمود غير موجود.','استخدام * دائمًا حتى في التقارير.','نسيان الفاصلة بين الأعمدة.'],
    mistakesEn:['Forgetting FROM.','Writing a column name that does not exist.','Always using * even in reports.','Forgetting commas between columns.'],
    quizAr:['ماذا تعني *؟','هل SELECT يغير البيانات؟','ما وظيفة FROM؟'],
    quizEn:['What does * mean?','Does SELECT change data?','What does FROM do?']
  },
  {
    id:'where-order', icon:'🎯', titleAr:'8) WHERE و ORDER BY', titleEn:'8) WHERE and ORDER BY', subtitleAr:'تصفية وترتيب النتائج بطريقة صحيحة.', subtitleEn:'Filter and sort results correctly.', diagram:'filter',
    sectionsAr:[
      ['WHERE','WHERE تستخدم لتصفية الصفوف. يعني لا تعرض كل الموظفين، بل الموظفين الذين يحققون شرطًا معينًا مثل salary > 1000.'],
      ['Operators','تقدر تستخدم = للمساواة، > أكبر، < أصغر، >= أكبر أو يساوي، <= أصغر أو يساوي، <> لا يساوي. للنصوص نضع القيمة بين علامات اقتباس مفردة.'],
      ['IN و BETWEEN و LIKE','IN لاختيار عدة قيم مثل department_id IN (60,90). BETWEEN لمدى معين مثل salary BETWEEN 1000 AND 3000. LIKE للبحث النصي مثل last_name LIKE 'A%'.'],
      ['ORDER BY','ORDER BY ترتب النتائج. ASC تصاعدي وهو الافتراضي، DESC تنازلي. مثال: ORDER BY salary DESC يعرض الأعلى راتبًا أولًا.'],
      ['ترتيب الجملة','الترتيب الصحيح عادة: SELECT ثم FROM ثم WHERE ثم ORDER BY. إذا وضعت ORDER BY قبل WHERE سيظهر خطأ.']
    ],
    sectionsEn:[
      ['WHERE','WHERE filters rows. Instead of showing all employees, it displays only rows that match a condition such as salary > 1000.'],
      ['Operators','Use =, >, <, >=, <=, and <>. Text values should be placed inside single quotes.'],
      ['IN, BETWEEN, LIKE','IN chooses multiple values such as department_id IN (60,90). BETWEEN filters a range. LIKE searches text patterns such as last_name LIKE A%.'],
      ['ORDER BY','ORDER BY sorts results. ASC is ascending and default, DESC is descending. ORDER BY salary DESC shows the highest salary first.'],
      ['Statement order','Correct order is usually SELECT, FROM, WHERE, ORDER BY. ORDER BY before WHERE causes an error.']
    ],
    code:`SELECT first_name, salary, department_id\nFROM employees\nWHERE salary > 1000\nORDER BY salary DESC;\n\nSELECT first_name, department_id\nFROM employees\nWHERE department_id IN (60, 90, 100);`,
    mistakesAr:['وضع ORDER BY قبل WHERE.','نسيان علامات الاقتباس للنصوص.','استخدام = مع أكثر من قيمة بدل IN.','كتابة DESC في المكان الخطأ.'],
    mistakesEn:['Putting ORDER BY before WHERE.','Forgetting quotes around text values.','Using = with multiple values instead of IN.','Writing DESC in the wrong place.'],
    quizAr:['ما وظيفة WHERE؟','ما الفرق بين ASC و DESC؟','متى نستخدم IN؟'],
    quizEn:['What does WHERE do?','What is the difference between ASC and DESC?','When do we use IN?']
  }
];

const diagrams = {
  database: `<div class="visual-stack"><div class="vbox big">Database</div><div class="vline"></div><div class="visual-row"><div class="vbox">Students</div><div class="vbox">Courses</div><div class="vbox">Grades</div></div><div class="caption">Database = organized related tables</div></div>`,
  compare: `<div class="compare-diagram"><div><h4>SQL</h4><p>Tables</p><p>Rows / Columns</p><p>Relationships</p><p>Fixed Schema</p></div><div><h4>NoSQL</h4><p>Documents</p><p>Key-Value</p><p>Graph</p><p>Flexible Schema</p></div></div>`,
  srs: `<div class="flow"><span>Idea</span><b>→</b><span>SRS</span><b>→</b><span>ERD</span><b>→</b><span>Schema</span><b>→</b><span>SQL</span></div>`,
  erd: `<svg class="erd-svg" viewBox="0 0 900 420" role="img" aria-label="ERD diagram"><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="currentColor"></path></marker></defs><g class="entity"><rect x="40" y="60" width="250" height="145" rx="18"></rect><text x="165" y="95" text-anchor="middle">CUSTOMER</text><line x1="40" y1="112" x2="290" y2="112"></line><text x="65" y="145"># customer_id</text><text x="65" y="170">* customer_name</text><text x="65" y="195">o phone</text></g><g class="entity"><rect x="610" y="60" width="250" height="170" rx="18"></rect><text x="735" y="95" text-anchor="middle">INVOICE</text><line x1="610" y1="112" x2="860" y2="112"></line><text x="635" y="145"># invoice_id</text><text x="635" y="170">* invoice_date</text><text x="635" y="195">* customer_id FK</text><text x="635" y="220">* total_price</text></g><path d="M290 135 C410 135, 490 135, 610 135" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arrow)"></path><text x="450" y="120" text-anchor="middle">1 : N</text><text x="450" y="160" text-anchor="middle">one customer has many invoices</text><g class="entity"><rect x="325" y="270" width="250" height="105" rx="18"></rect><text x="450" y="305" text-anchor="middle">INVOICE_DETAIL</text><line x1="325" y1="322" x2="575" y2="322"></line><text x="350" y="350"># invoice_id FK</text><text x="350" y="372"># product_id FK</text></g></svg>`,
  schema: `<div class="tree"><div class="tree-root">Oracle Database</div><div class="tree-branch"><div>HR Schema</div><ul><li>EMPLOYEES</li><li>DEPARTMENTS</li><li>JOBS</li><li>LOCATIONS</li></ul></div><div class="tree-branch"><div>SALES Schema</div><ul><li>CUSTOMERS</li><li>INVOICES</li></ul></div></div>`,
  rules: `<div class="rule-grid"><span>1 Name</span><span>2 PK</span><span>3 Columns</span><span>4 Data Type</span><span>5 Normalize</span><span>6 FK</span><span>7 Constraints</span></div>`,
  select: `<div class="sql-break"><span>SELECT</span><em>what columns?</em><span>FROM</span><em>which table?</em><span>;</span><em>end statement</em></div>`,
  filter: `<div class="flow vertical"><span>SELECT columns</span><b>↓</b><span>FROM table</span><b>↓</b><span>WHERE condition</span><b>↓</b><span>ORDER BY column</span></div>`
};

const menu = document.getElementById('basicMenu');
const content = document.getElementById('basicContent');
const search = document.getElementById('lessonSearch');

function lang(){ return localStorage.getItem('lang') || 'ar'; }
function t(lesson, key){ return lesson[key + (lang()==='ar'?'Ar':'En')]; }
function arr(lesson, key){ return lesson[key + (lang()==='ar'?'Ar':'En')]; }
function label(ar,en){ return lang()==='ar'?ar:en; }

function renderMenu(filter=''){
  const q = filter.trim().toLowerCase();
  const items = basicLessons.filter(l => !q || (l.titleAr+l.titleEn+l.subtitleAr+l.subtitleEn).toLowerCase().includes(q));
  menu.innerHTML = items.map((l,i)=>`<button class="basic-menu-btn ${i===0 && !location.hash?'active':''}" data-id="${l.id}"><span>${l.icon}</span><b>${t(l,'title')}</b><small>${t(l,'subtitle')}</small></button>`).join('');
  menu.querySelectorAll('button').forEach(btn=>btn.onclick=()=>openLesson(btn.dataset.id));
}

function openLesson(id){
  const lesson = basicLessons.find(l=>l.id===id) || basicLessons[0];
  location.hash = lesson.id;
  document.querySelectorAll('.basic-menu-btn').forEach(b=>b.classList.toggle('active', b.dataset.id===lesson.id));
  const sections = arr(lesson,'sections');
  content.innerHTML = `
    <div class="lesson-open-head">
      <span class="lesson-open-icon">${lesson.icon}</span>
      <div><p class="eyebrow">BASIC</p><h2>${t(lesson,'title')}</h2><p>${t(lesson,'subtitle')}</p></div>
    </div>
    <div class="visual-card">${diagrams[lesson.diagram] || ''}</div>
    <div class="deep-sections">
      ${sections.map(([h,p],i)=>`<section class="deep-block"><span class="deep-number">${String(i+1).padStart(2,'0')}</span><h3>${h}</h3><p>${p}</p></section>`).join('')}
    </div>
    <div class="learning-box">
      <h3>${label('مثال عملي','Practical Example')}</h3>
      <div class="codebox"><button class="copy-btn btn ghost" onclick="copyText(${JSON.stringify(lesson.code)})">${label('نسخ','Copy')}</button><pre>${lesson.code.replaceAll('<','&lt;')}</pre></div>
    </div>
    <div class="two-panels">
      <div class="panel warn"><h3>${label('الأخطاء الشائعة','Common Mistakes')}</h3><ul>${arr(lesson,'mistakes').map(m=>`<li>${m}</li>`).join('')}</ul></div>
      <div class="panel quizlet"><h3>${label('تأكد من فهمك','Check Your Understanding')}</h3><ol>${arr(lesson,'quiz').map(q=>`<li>${q}</li>`).join('')}</ol></div>
    </div>
    <div class="lesson-actions"><button class="btn primary" onclick="completeBasic('${lesson.id}')">${label('علّم الدرس كمكتمل','Mark lesson complete')}</button><span id="done-${lesson.id}" class="done-badge"></span></div>
  `;
  updateDone(lesson.id);
  content.scrollIntoView({behavior:'smooth', block:'start'});
}

function completeBasic(id){
  const done = JSON.parse(localStorage.getItem('basicDone') || '[]');
  if(!done.includes(id)) done.push(id);
  localStorage.setItem('basicDone', JSON.stringify(done));
  updateDone(id); renderProgressMini();
}
function updateDone(id){
  const done = JSON.parse(localStorage.getItem('basicDone') || '[]');
  const el = document.getElementById('done-'+id);
  if(el) el.textContent = done.includes(id) ? label('✅ مكتمل','✅ Completed') : '';
}
function renderProgressMini(){
  const done = JSON.parse(localStorage.getItem('basicDone') || '[]').length;
  document.getElementById('basicMenuTitle').textContent = label(`دروس BASIC (${done}/${basicLessons.length})`,`BASIC Lessons (${done}/${basicLessons.length})`);
}
function refreshLanguageText(){
  document.getElementById('basicTitle').textContent = label('الأساسيات بالتفصيل قبل Oracle SQL','Detailed fundamentals before Oracle SQL');
  document.getElementById('basicDesc').textContent = label('هذا القسم يبني الأساس من الصفر: قاعدة البيانات، SRS، ERD، Schema، تصميم الجداول، ثم أول أوامر SELECT بشكل واضح ومفصل.','This section builds the foundation from zero: database, SRS, ERD, schema, table design, then the first SELECT commands in a clear detailed way.');
  search.placeholder = label('ابحث داخل BASIC...','Search BASIC...');
  renderProgressMini();
}

renderMenu(); renderProgressMini(); refreshLanguageText();
const initial = location.hash?.replace('#','') || basicLessons[0].id;
openLesson(initial);
search?.addEventListener('input', e=>renderMenu(e.target.value));
document.getElementById('langToggle')?.addEventListener('click',()=>setTimeout(()=>{refreshLanguageText(); renderMenu(search.value); openLesson(location.hash.replace('#') || basicLessons[0].id);},0));
