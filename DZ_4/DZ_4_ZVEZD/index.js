const bugReport = { id: 104, title: 'Button crash', severity: 'High', status: 'Open' };


const { id, ...bugDetails } = bugReport;


console.log(id);
console.log(bugDetails); 
