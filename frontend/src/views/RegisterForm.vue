<template>
    <div class="ml-90 inline-block">
      <h1 class="h-40 w-30">Register Form</h1>
  
      <br />
      <br />
  
      <div class="row overflow-hidden">
        <div class="col-md-3  overflow-hidden">
          <div class="mb-6">
            <div class="input-group mb-3">
              <span class="input-group-text">@</span>
              <div class="form-floating">
                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
                <label for="floatingInputGroup1">Username</label>
              </div>
            </div>
  
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <!--Confirm Passsword-->
            <div class="form-floating mt-3">
              <input type="password" class="form-control" id="floatingConfirmPassword" placeholder="Confirm Password">
              <label for="floatingPassword">Confirm Password</label>
            </div>
            <button @click="onSubmit" type="submit" class="btn btn-primary mt-3">Register</button>
          </div>
          <div class="mb-3">
            Already a member? <a href="LoginForm">Login Here</a>
          </div>
        </div>
      </div>
    </div>
  </template>
      
  <script>
  export default {};
  </script>
      
  <style></style>
      