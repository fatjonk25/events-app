<template>
   

<form class="d-flex flex-column g-3 needs-validation mx-auto text-center align-items-center " novalidate>

  <h1>Sign UP</h1><br>
  <div class="col-md-4 shadow-sm p-0 mb-0 bg-body-tertiary rounded">
    <input type="text" class="form-control" id="validationCustom01"  placeholder="First Name" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 mt-4 shadow-sm p-0 mb-0 bg-body-tertiary rounded">
    <input type="text" class="form-control" id="validationCustom02"  placeholder="LastName" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 mt-4 shadow-sm p-0 mb-0 bg-body-tertiary rounded">
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
      <input type="text" class="form-control" placeholder="Username" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-4 mt-4 shadow-sm p-0 mb-0 bg-body-tertiary rounded">
    <input type="email" class="form-control" placeholder="Email Adress" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid email.
    </div>
  </div>
  <div class="col-md-4 mt-4 shadow-sm p-0 mb-0 bg-body-tertiary rounded">
    <input type="password" class="form-control" placeholder="Password" id="validationCustom03" required>
    <div class="invalid-feedback ">
      Please provide a valid password.
    </div>
  </div>

  <div class="col-md-4 mt-4 shadow-sm p-0 mb-0 bg-body-tertiary rounded">
    <input type="text" class="form-control" id="validationCustom05" required placeholder="ZIP Code">
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>

  <div class="col-4 mt-3 btn-lg btn-block">
    <button class="btn btn-outline-primary" type="submit">Register</button>
  </div>
  <div class="mt-3">
 Already a member?<a href="LoginForm">Login Here</a></div>
</form>
  </template>
      
  <script>
  export default {};
 
  </script>
      
  <style>
  body{
    overflow: scroll;
    scroll-behavior: smooth;
  }

  
</style>
      