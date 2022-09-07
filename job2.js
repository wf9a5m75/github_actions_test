console.log(`
実行環境: ${process.env.WORK_ON}
OS: ${process.env.OS_TYPE}
JOB1_RESULT: ${process.env.JOB1_RESULT}
`);

console.log("::set-output name=MESSAGE::Job2 has been finished!");

console.log("::group::My title");
console.log(process.env);
console.log("::endgroup::");

process.exit(0);
