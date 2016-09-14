const { createSelector } = require('reselect');
const { createStore } = require('redux');
const { createAction, createReducer } = require('redux-act');


const findStepIndex = (step, { domain, role }) => {
  if (!domain && !role) {
    return false;
  }

  let bool = true;

  if (domain) {
    bool = bool && (step.domain === domain);
  }

  if (role) {
    bool = bool && (step.role === role);
  }

  return bool;
};


const insertStepAction = createAction('Insert a step');

const reducer = createReducer({
  [insertStepAction]: (state, { newStep, afterStep }) => {
    const steps = state.wizard.steps;
    const index = steps.findIndex(step => findStepIndex(step, afterStep)) + 1;
    return state.wizard.steps.splice(index, 0, newStep);
  }
});

const initialState = {
  wizard: {
    steps: [{
      domain: 'step1.fr',
      role: 'owner',
    }, {
      domain: 'step1.fr',
      role: 'admin',
    }, {
      domain: 'step3.fr',
      role: 'owner',
    }, {
      domain: 'step4.fr',
      role: 'owner',
    }, {
      domain: 'step5.fr',
      role: 'owner',
    }]
  }
};

const store = createStore(reducer, initialState);


const selectSteps = state => state.wizard.steps;

const selectStep = (domain, role) => createSelector(
  selectSteps,
  allSteps => {
    const index = allSteps.findIndex(step => findStepIndex(step, { domain, role }));

    return {
      prev: allSteps[index - 1] || false,
      current: allSteps[index] || false,
      next: allSteps[index + 1] || false,
    };
  }
);

function* getSteps() {
  let next = selectStep()(initialState).next;

  while (next) {
    yield next;
    const { domain, role } = next;
    next = selectStep(domain, role)(initialState).next;
  }
}

const getThoseSteps = getSteps();


console.log(getThoseSteps.next());


store.dispatch(insertStepAction({
  newStep: {
    domain: 'foo.bar',
    role: 'tech',
  },
  afterStep: {
    domain: 'step3.fr',
    role: 'owner',
  },
}));

console.log(getThoseSteps.next());
console.log(getThoseSteps.next());
console.log(getThoseSteps.next());
console.log(getThoseSteps.next());
console.log(getThoseSteps.next());
console.log(getThoseSteps.next());
console.log(getThoseSteps.next());



// for (let step of getSteps()) {
//   console.log('step', step);
// }


// baseFields: [{
//   label: 'given',
//   type: 'string',
// }, {
//   label: 'family',
//   type: 'string',
// }],
// extraFields: [{
//   label: 'birth_date',
//   type: 'date',
// }, {
//   label: 'country',
//   type: 'enum',
//   values: ['FR', 'UK', 'DE'],
// }],
