import { ticketData } from "../../../components/DATA/dumbData";
import {
  GET_DATA,
  CLICKED_PROFILE,
  CLICK_NEW_TICKET_SAGA,
  POST_NEW_TICKET_SAGA,
} from "../Types/types";

const initialState = {
  data: ticketData,
  profileIcon: false,
  newTicketWindow: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: {
      return state;
    }
    case CLICKED_PROFILE: {
      return { ...state, profileIcon: !state.profileIcon };
    }
    case CLICK_NEW_TICKET_SAGA: {
      return { ...state, newTicketWindow: !state.newTicketWindow };
    }
    case POST_NEW_TICKET_SAGA: {
      state.data.push(action.payload);
    }
    default: {
      return state;
    }
  }
}
