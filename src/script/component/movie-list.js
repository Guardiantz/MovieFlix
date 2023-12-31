import './movie-item.js';

class ClubList extends HTMLElement{

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode :'open'});
    }

    set clubs(clubs){
        this._clubs = clubs;
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
        club-list {
            width:130%;
            display:flex;
            flex-wrap:wrap;
            gap:20px;
        }
      </style>
        
        `;
        const searchResultsElement = document.createElement('div'); // Buat elemen untuk menampilkan hasil pencarian
        searchResultsElement.id = 'searchResults';
        this.appendChild(searchResultsElement);
    
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement('club-item');
            clubItemElement.club =club;
            this.shadowDOM.appendChild(clubItemElement);
        })
    }
    renderError(message){
        this.shadowDOM.innerHTML = `
        <style>
        club-list > .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          
        }
      </style>
        
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define('club-list', ClubList);