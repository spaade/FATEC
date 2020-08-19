import React from 'react';
import { Link } from 'react-router-dom';


import '../../styles/bootstrap.css';
import '../../styles/global.css';

export default function NavBar() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Fatec Guarulhos</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/noticias" id="navbarNEWS" aria-haspopup="true" aria-expanded="false">
                  Notícias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/institucional" id="navbarInstitute" aria-haspopup="true" aria-expanded="false">
                Institucional
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/cursos" id="navbarCourses" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                  Cursos
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <a className="dropdown-item" href="/cursos/#ads"> Análise e Desenvolvimento de Sistemas</a>
                  <a className="dropdown-item" href="/cursos/#log"> Logística</a>
                  <a className="dropdown-item" href="/cursos/#comext"> Comércio Exterior</a>
                  <a className="dropdown-item" href="/cursos/#ind"> Gestão da Produção Industrial</a>
                  <a className="dropdown-item" href="/cursos/#logap"> Logística Aeroportuária</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/cursos" id="navbarCourses" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                  Acadêmico
                </Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <a className="dropdown-item" href="/academico/#library"> Biblioteca</a>
                  <a className="dropdown-item" href="https://drive.google.com/file/d/1jw7WPmsvCmBEzq9AU5iYoohHYg6h6r44/view" target="_blank"> Calendário Acadêmico</a>
                  <a className="dropdown-item" href=""> Docentes</a>
                  <a className="dropdown-item" href="/academico/#students"> Discentes</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://siga.cps.sp.gov.br/aluno/login.aspx?" target="_blank" id="navbarSIGA" aria-haspopup="true" aria-expanded="false">
                  SIGA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://www.fatec.sp.gov.br/view/Default.aspx" target="_blank" id="navbarLOJA" aria-haspopup="true" aria-expanded="false">
                  Loja
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  };