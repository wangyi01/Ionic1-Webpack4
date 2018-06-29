module.exports=config;
function config(param){
  let options={
    headers:{
      company:'fhwc'
    },
    hostname:'api1.fhwcai.com',
    port:8880,
    path:param
  };
  return options;
};
