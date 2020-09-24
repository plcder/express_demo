
import Users from '../models/users';

async function Add(data : any)  {
  let code = 200;
  const users = Users();

  const jin = users.create({ name: data.name, age: data.age })
  
    .then(function (result) {
      return code;
  }).catch(function (err) {
    return code = 500;
  });

  return code;
}
  

export default Add;