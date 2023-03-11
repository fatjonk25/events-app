<template>
  
  <form class="d-flex flex-column g-3 needs-validation mx-auto text-center align-items-center" novalidate>

    <h1>Log In</h1><br>

    <div class="col-md-4 mt-4">
      <input type="email" class="form-control" placeholder="Enter your Email" id="validationCustom03" required>
      <div class="invalid-feedback">
        Please provide a valid email.
      </div>
    </div>
    <div class="col-md-4 mt-4">
      <input type="password" class="form-control" placeholder="Enter your Password" id="validationCustom03" required>
      <div class="invalid-feedback">
        Please provide a valid password.
      </div>
    </div>
  

  
    <div class="col-4 mt-3 btn-lg btn-block">
      <button class="btn btn-primary" type="submit">Login</button>
    </div>
    <div class="mt-3">
  New here?<a href="RegisterForm">Register Here</a></div>
  </form>
    </template>
        
    <script>
    export default {};
   
    </script>
        
    <style></style>
        