import React from 'react'

export default function SignUpIns() {
  return (
    <div>
      <div className="container">
  <form>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-4 col-form-label">First Name_Ins</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-4 col-form-label">Last Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail4" className="col-sm-4 col-form-label">Email</label>
    <div className="col-sm-6">
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-4 col-form-label">Password</label>
    <div className="col-sm-6">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword4" className="col-sm-4 col-form-label">Confirm Password</label>
    <div className="col-sm-6">
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-4 pt-0">Radio</legend>
    <div className="col-sm-3">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label className="form-check-label" for="gridRadios1">
          Student
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" for="gridRadios2">
          Tutor
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" for="gridRadios2">
          Recruiter
        </label>
      </div>
    </div>
  </fieldset>
  <button type="submit" className="btn btn-primary">SignUp</button>
</form>
</div>
    </div>
  )
}
