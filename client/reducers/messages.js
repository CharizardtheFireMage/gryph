import {ADD_MESSAGE, UPDATE_MESSAGES} from '../constants/ActionTypes';

function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        action.message
      ];
    case UPDATE_MESSAGES:
      return [
        ...action.messages,
        {
          text: `
            <div class="text-center welcome">
              <center><img src="http://media.pldh.net/pokemon/gen5/blackwhite_animated_front/382.gif" width="107" height="83"></center>
              <h4><font color="#3399ff"><b>Welcome to the Hydrocity Video Application!</b></font></h3>
              <p><center>This video application is used for Anime Nights, Movie Nights, and sharing videos with other people.</center></p>
              <p><strong><font color="blue">Update: </strong>Playlists are added! - CreaturePhil</font></p>
            </div>
          `,
          html: true
        }
      ];
    default:
      return state;
  }
}

export default messages;
