import React from "react";
function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="nav collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">BlockChain</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Metaverse</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">AI/ML</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">IoT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Mobile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Web</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cloud</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blogs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Careers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default NavBar