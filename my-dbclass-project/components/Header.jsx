export const Header =()=>{

  return(
    <header>
      <nav className=" nav-body-tertiary d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
      background-color = 'background-color: rgb(26 49 28) !important'
      >
        <div class= ' col-md-3 mb-2 mb-md-0'>
          <a class="navbar-brand" href="#">
            <img src="/image.png" alt="Logo" width="100" height="24"
            class=""/>
          </a>
        </div>
        <ul class='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
          <li class="nav-link px-2 ">Home</li>
          <li class="nav-link px-2 link-secondary">Internship</li>
          <li class="nav-link px-2 link-secondary">Graduate Program</li>
          <li class="nav-link px-2 link-secondary">Student Ambassidor</li>
        </ul>
        
        <div class="col-md-3 text-end">
          <button class="btn btn-outline-primary me-2">
            Job Portal</button>
          <button class="btn btn-outline-primary me-2">
            Login</button>
        </div>
      </nav>
    </header>
  );

}








// <span>
      //   <label htmlFor="Input">Search: 
      //     <input type="text" name="Input" id="srchInput" />
      //   </label>
      // </span>