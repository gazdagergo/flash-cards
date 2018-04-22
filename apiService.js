const baseUrl = 'https://gg-flash-cards.firebaseio.com/';

const apiService = {
  getCards: () => (
    new Promise(resolve => {
      fetch(`${baseUrl}cards.json`)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch((error) => {
        throw error;
      });      
    })
  ),

  getCardDetails: id => (
    new Promise(resolve => {
      fetch(`${baseUrl}cards/${id}.json`)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch((error) => {
        throw error;
      });      
    })
  ),
  
  addNewCard: () => (
    new Promise(resolve => resove())
  ),
  
  updateCard: () => (
    new Promise(resolve => resove())
  ),
}

export default apiService;
