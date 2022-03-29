// const NOME = 'NOME';
// const EMAIL = 'EMAIL';
// const CPF = 'CPF';
// const ESTADO = 'ESTADO';
// const BUTTONPERSONAL = 'BUTTONPERSONAL';
// const BUTTONPROF = 'BUTTONPROF';
const PERSONAL_FORM = 'PERSONAL_FORM';
const PROFESSIONAL_FORM = 'PROFESSIONAL_FORM';

const actionPersonal = (stateForm) => (
  {
    state: { ...stateForm },
    type: PERSONAL_FORM,
  }
);

const actionProfessional = (stateForm) => (
  {
    state: { ...stateForm },
    type: PROFESSIONAL_FORM,
  }
);

export { actionPersonal, actionProfessional, PERSONAL_FORM, PROFESSIONAL_FORM };
