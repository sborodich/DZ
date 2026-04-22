const testResults = [
    {id: 1, name: 'Login Test', status: 'passed', time: 120},
    {id: 2, name: 'Payment Test', status: 'failed', time: 300},
    {id: 3, name: 'Profile Test', status: 'passed', time: 90},
    {id: 4, name: 'Cart Test', status: 'skipped', time: 10}
];


const failedTests = testResults.filter(test => test.status === 'failed');


const passedTestIds = testResults.filter(test => test.status === 'passed').map(test => test.id);


const totalExecutionTime = testResults.reduce((acc, test) => acc + test.time, 0);


console.log('Failed tests:', failedTests);
console.log('Passed test IDs:', passedTestIds);
console.log('Total execution time:', totalExecutionTime);