
(function(){
  const samples = {
    employees: `SELECT employee_id, last_name, salary
FROM employees
WHERE salary > 10000;`,
    functions: `SELECT LOWER('SQL Course'), UPPER('SQL Course'), SUBSTR('HelloWorld',1,5)
FROM DUAL;`,
    dates: `SELECT SYSDATE, LAST_DAY('01-FEB-95'), MOD(1600,300)
FROM DUAL;`
  };

  const tables = {
    employees: [
      {EMPLOYEE_ID:100, LAST_NAME:'King', SALARY:24000, DEPARTMENT_ID:90},
      {EMPLOYEE_ID:101, LAST_NAME:'Kochhar', SALARY:17000, DEPARTMENT_ID:90},
      {EMPLOYEE_ID:102, LAST_NAME:'De Haan', SALARY:17000, DEPARTMENT_ID:90},
      {EMPLOYEE_ID:103, LAST_NAME:'Hunold', SALARY:9000, DEPARTMENT_ID:60},
      {EMPLOYEE_ID:205, LAST_NAME:'Higgins', SALARY:12008, DEPARTMENT_ID:110}
    ],
    functions: [
      {EXPRESSION:"LOWER('SQL Course')", RESULT:'sql course'},
      {EXPRESSION:"UPPER('SQL Course')", RESULT:'SQL COURSE'},
      {EXPRESSION:"SUBSTR('HelloWorld',1,5)", RESULT:'Hello'},
      {EXPRESSION:"MOD(1600,300)", RESULT:'100'}
    ],
    dates: [
      {FUNCTION:'SYSDATE', RESULT:new Date().toLocaleDateString()},
      {FUNCTION:"LAST_DAY('01-FEB-95')", RESULT:'28-FEB-95'},
      {FUNCTION:"ADD_MONTHS('31-JAN-96',1)", RESULT:'29-FEB-96'}
    ]
  };

  function esc(v){return String(v).replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
  function renderTable(rows){
    if(!rows.length) return '<p class="note">No rows returned.</p>';
    const cols = Object.keys(rows[0]);
    return `<table class="table"><thead><tr>${cols.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${cols.map(c=>`<td>${esc(r[c])}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }

  function simulate(sql){
    const q = sql.toLowerCase().replace(/\s+/g,' ');
    if(q.includes('lower(') || q.includes('upper(') || q.includes('substr(') || q.includes('mod(')) return tables.functions;
    if(q.includes('sysdate') || q.includes('last_day') || q.includes('add_months') || q.includes('months_between')) return tables.dates;
    let rows = [...tables.employees];
    const salaryMatch = q.match(/salary\s*(>=|<=|>|<|=)\s*(\d+)/);
    if(salaryMatch){
      const op = salaryMatch[1], n = Number(salaryMatch[2]);
      rows = rows.filter(r => op==='>' ? r.SALARY>n : op==='<' ? r.SALARY<n : op==='>=' ? r.SALARY>=n : op==='<=' ? r.SALARY<=n : r.SALARY===n);
    }
    const deptMatch = q.match(/department_id\s*=\s*(\d+)/);
    if(deptMatch) rows = rows.filter(r => r.DEPARTMENT_ID === Number(deptMatch[1]));
    if(q.includes('order by salary desc')) rows.sort((a,b)=>b.SALARY-a.SALARY);
    if(q.includes('order by salary') && !q.includes('desc')) rows.sort((a,b)=>a.SALARY-b.SALARY);
    return rows;
  }

  function run(){
    const input = document.getElementById('sqlInput');
    const out = document.getElementById('sqlOutput');
    if(!input || !out) return;
    const rows = simulate(input.value || '');
    const note = (localStorage.getItem('lang')||'ar') === 'ar'
      ? 'هذه نتيجة تعليمية محاكية تعمل داخل المتصفح، وليست اتصالاً بقاعدة بيانات حقيقية.'
      : 'This is a browser-based learning simulation, not a real database connection.';
    out.innerHTML = renderTable(rows) + `<p class="note">${note}</p>`;
  }

  document.addEventListener('DOMContentLoaded', function(){
    const runBtn = document.getElementById('runSql');
    const copyBtn = document.getElementById('copySql');
    const sample = document.getElementById('sampleSelect');
    const input = document.getElementById('sqlInput');
    if(runBtn) runBtn.addEventListener('click', run);
    if(copyBtn) copyBtn.addEventListener('click', function(){
      const text = input ? input.value : '';
      if(navigator.clipboard) navigator.clipboard.writeText(text);
    });
    if(sample) sample.addEventListener('change', function(e){
      if(input) input.value = samples[e.target.value] || samples.employees;
      run();
    });
    run();
  });
})();
