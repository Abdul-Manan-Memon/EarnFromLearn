import React from 'react'
import SignUpIns from './SignUpIns'
// import SignUpRe from './SignUpRe'
export default function Modal(props) {
  console.log("hello hi");
  console.log(props.title);
  return (

    <div>
      <section>
      <div className="container">
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">               
               <SignUpIns/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>
    </div>
</section>
    </div>
  )
}
