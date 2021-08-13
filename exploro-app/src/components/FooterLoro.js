import React from "react";

const FooterLoro = () =>{
  return(
    <footer className="bg-dark py-3 fixed-bottom d-flex justify-content-center">

      <span>
          <a className="mx-3" href="https://github.com/andreacgr93/front-end-test-coding" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github fa-lg text-light"></i>
          </a>
          <a className="m-3" href="https://www.facebook.com/lorocolombia" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-square fa-lg text-light"></i>
          </a>
          <a className="m-3" href="https://linkedin.com/company/lorocolombia" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square fa-lg text-light"></i>
          </a>
      </span>

      <small className="text-muted mx-3">© Copyright ExpLoro 2021. Todos los derechos reservados a Loro Colombia</small>

    </footer>
  )
}

export default FooterLoro