// ACTIONS TYPES
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';

// ACTIONS CREATORS
function requestSuccessful(character) {
    return {
      type: REQUEST_SUCCESSFUL,
      character,
    };
  }
  export function fetchAPI(endPoint) {
    return (dispatch) => {
      fetch(`https://anapioficeandfire.com/api/characters?name=${endPoint}`)
        .then(response => response.json())
        .then(data => dispatch(requestSuccessful(data)));
    }
  }