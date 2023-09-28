
class clubitem extends HTMLElement{

  constructor(){
      super();
      this.shadowDOM = this.attachShadow({mode:'open'});
  }
    
  set club(club ){
      this._club = club;
      this.render();
  }
  
  render(){
      this.shadowDOM.innerHTML = 
      `
     <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :host {
    width:350px;
    display: flex;
    margin-bottom: 18px;
    border-radius: 10px;
    background-color: white;
    
  }

  .fan-art-movie {
    width: 300px; 
    max-height: 300px;
    object-fit: cover;
    object-position: center;
  }

  .movie-container {
    display: flex;
    padding: 24px;
  }

  .movie-wrapper{
    width:
  }

  .movie-container > h2 {
    font-weight: lighter;
  }

  .movie-container > p {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
  }
</style>

<div class="movie-container">
  <div class="movie-wrapper">
      <img class="fan-art-movie" src="${this._club.Poster}" alt="Fan Art">
      <h2>${this._club.Title}</h2>
      <p>${this._club.Year}</p>
      <p>${this._club.Type}</p>
      <p>${this._club.imdbID}</p>
  </div>    
</div>
    `;

  }
} 
customElements.define('club-item',clubitem);