
let sampleObject={
'name':{
      'firstName':'Harsha',
      'lastName':'Vardhan'
},
'age': 20
}
 check3=(key,value)=>{
      if(typeof value === 'object')
            return value;
      else if(typeof value==='number')
      {
            return value ;
      }
      else
      {
            return undefined;
      }
      
}
let a=5;
 var checkJSON=JSON.stringify(sampleObject,check3,5);
 console.log(checkJSON);
 console.log(typeof checkJSON);
 check4=(key,value)=>{
      console.log(key);
      if(console.log(key) === 'name')
      {
            return key;
            console.log(key);
       }
 }
 var checkJSON2= JSON.parse(checkJSON,check4);
  console.log( checkJSON2);
 