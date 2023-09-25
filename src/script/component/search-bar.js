
class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }  

    connectedCallback() {
      this.render();
    }
    
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
   
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
   
    render() {
      this.shadowDOM.innerHTML = `
      <style> 
      .search-container {
        max-width: 550px;
        max-height: 200px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 5px;
        border-radius: 5px;
        display: flex;
        position: sticky;
        top: 10px;
        background-color: white;
        margin-left:15%
      }
    
      .search-container > input {
        width: 75%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid black;
        font-weight: bold;
      }
    
      .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid black;
      }
    
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
    
      .search-container > input::placeholder {
        color: black;
        font-weight: normal;
        font-style: italic;
      }
    
      .search-container > button {
        width: 23%;
        cursor: pointer;
        margin-left: auto;
        padding: 5px;
        background-color: #C70039;
        color: white;
        text-transform: uppercase;
        border:none;
      }

      body {
        height: 100vh;
        margin: 0;
        display: flex;
        flex-direction: column;
        overflow-x:hidden;
        background-color: #1A1C22;
       }
    header.navbar-container {
        width: 100%;
        margin-inline: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-block: 1rem;
       }
      
       header.navbar-container .nav-list ul {
         padding-left: 0;
         display: flex;
        gap: 2rem 1rem;
      }
      header .login button:hover{
        color: #FEF4F4;
        background-color:#BC0E19 ;
        opacity: 90%;
      }
    
      header.navbar-container p{
        color: #E3E0E0;
      font-family: "Montserrat",Monstserrat;
      font-size: 18px;
      font-weight: 500;
      font-style: normal;
    }
    header.navbar-container .nav-list li {
      list-style-type: none;
    }
       
    header.navbar-container .nav-list li a {
      text-decoration: none;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        font-family: "Montserrat";
        color: #FEF4F4;
        line-height: 30px; 
        letter-spacing: -0.27px;  
        padding: .5rem 1.5rem;
        border-radius: 28px;
        transition: all .2s ease-in-out;
      }
      
      header.navbar-container .nav-list li:hover a {
        background-color: #BC0E19;
        color: white;
      }
     h1{
        color : #C70039;
        margin-left: 280px;
        font-size:55px
      }

      @media screen and (max-width: 1000px) {
        .h1 {
          width : 100%
          position: static;
          margin-left:2px;
        }
        .search-container {
          flex-direction: column;
          position: static;
        }
    
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
    
        .search-container > button {
          width: 100%;
        }
      }
      
      </style>
      
      <body>
      <div class="logo">
      <h1>MovieFlix </h1>
    </div>
      <header class="navbar-container">
      
      <nav class="nav-list">
        <ul>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Tv Shows</a></li>
          <li><a href="#">New & Popular</a></li>
        </ul>
      </nav>
  </header>
      <div id="search-container" class="search-container">
        <input placeholder="Search MovieFlix" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>

      </body>
      `;
   
      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }
   
  customElements.define('search-bar', SearchBar);
