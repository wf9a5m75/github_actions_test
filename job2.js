console.log(`
実行環境: ${process.env.WORK_ON}
OS: ${process.env.OS_TYPE}
JOB1_RESULT: ${process.env.JOB1_RESULT}
`);

console.log("::set-output name=MESSAGE::Job2完了!");

process.exit(0);
