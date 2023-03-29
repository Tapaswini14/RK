import React from "react";
function Login(){
    return(
        <div class="container newImage mt-4">
           <img src="image 26.png" className="img-fluid img1" alt="..."></img>
           <div class="container log">
  <div class="row justify-content-between">

    <div class="col-lg-6">

    </div>

    <div class="col-lg-6">
         <h3>GET IN TOUCH</h3>
         <div class="card">
         <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </div>

  </div>
</div>
        </div>
    )
}
export default Login