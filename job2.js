console.log(`
実行環境: ${process.env.WORK_ON}
OS: ${process.env.OS_TYPE}
JOB1_RESULT: ${process.env.JOB1_RESULT}
`);



const nonMaskingTxt = "マスクされない";
const maskingTxt = "マスクされる";
console.log(nonMaskingTxt);
console.log("::add-mask::" + maskingTxt);
console.log(nonMaskingTxt);

console.log("::group::My title");
console.log(process.env);
console.log("::endgroup::");

console.log("::set-output name=MESSAGE::Job2完了!");
process.exit(0);
