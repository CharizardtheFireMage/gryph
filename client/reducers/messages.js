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
              <img src="http://media.pldh.net/pokemon/md2/sprite/382.png" width="63" height="36"><h4><font color="#3399ff"><b>Welcome to the Hydrocity Video Application!</b></font></h3><img src="http://media.pldh.net/pokemon/md2/sprite/382.png" width="63" height="36">
              <p><font color="blue">This video application is a fork of Fakesloth's Gryph (clone of plug.dj)</font></p>
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
