<template>
  <form class="d-row g-3 needs-validation align-items-center" novalidate>

    <div class="col-md-6">
      <label for="validationCustom03" class="form-label">Email</label>
      <input type="email" class="form-control" id="validationCustom03" required>
      <div class="invalid-feedback">
        Please provide a valid email.
      </div>
    </div>
  
    <div class="col-md-6">
      <label for="validationCustom03" class="form-label">Password</label>
      <input type="password" class="form-control" id="validationCustom03" required>
      <div class="invalid-feedback">
        Please enter your password.
      </div>
    </div>

  
   
    <div class="col-12 mt-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
        <label class="form-check-label" for="invalidCheck">
          Agree to terms and conditions
        </label>
        <div class="invalid-feedback">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <div class="col-12 mt-3">
      <button class="btn btn-primary" type="submit">Login</button>
    </div>
    <div class="mt-3">
   You are new here ?<a href="RegisterForm">Register Here</a></div>
  </form>
    </template>
        
    <script>
    export default {};
   
    </script>
        
    <style></style>
        

