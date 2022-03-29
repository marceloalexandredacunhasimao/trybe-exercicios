import { PERSONAL_FORM, PROFESSIONAL_FORM } from '../actions';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};
const INITIAL_STATE_PROF = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM:
    return { ...state, ...action.state };
  default:
    return state;
  }
};

const professionalReducer = (state = INITIAL_STATE_PROF, action) => {
  switch (action.type) {
  case PROFESSIONAL_FORM:
    return { ...state, ...action.state };
  default:
    return state;
  }
};

export { personalReducer, professionalReducer };
