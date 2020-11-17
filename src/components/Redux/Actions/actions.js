import {
  CLICKED_PROFILE_SAGA,
  GET_DATA_SAGA,
  CLICK_NEW_TICKET_SAGA,
  POST_NEW_TICKET_SAGA,
} from "../../Redux/Types/types";

export const getDataAction = () => {
  return { type: GET_DATA_SAGA };
};

export const clickedProfileAction = () => {
  return { type: CLICKED_PROFILE_SAGA };
};

export const clickNewTicket = () => {
  return { type: CLICK_NEW_TICKET_SAGA };
};

export const postNewTicket = (newTicketData) => {
  return { type: POST_NEW_TICKET_SAGA, payload: newTicketData };
};
