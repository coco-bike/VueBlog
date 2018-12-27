const accessKey = '4IlvuY6NsLg3A6e0Xp1hTK9qcRwTtZ34Uk10cQ2R';
const secretKey = 'bnmL7wTaFfJ_y17SIjeh_zp7wJ0Aa_epcuCUkb5V';
let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
let bucket='';
let options = {
    scope: bucket,
};
let putPolicy = new qiniu.rs.PutPolicy(options);
let uploadToken = putPolicy.uploadToken(mac);