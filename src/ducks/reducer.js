const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

// *** action types*** //
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_AGENT = 'UPDATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWNPAYMENT = 'UPDATE_DOWNPAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS_1 = 'UPDATE_ADDRESS_1';
const UPDATE_ADDRESS_2 = 'UPDATE_ADDRESS_2';
const UPDATE_ADDRESS_3 = 'UPDATE_ADDRESS_3';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

// *** reducer *** //
function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_LOAN_TYPE:
            return {...state, loanType: action.payload}
            break;
        case UPDATE_PROPERTY_TYPE: 
            return {...state, propertyType: action.payload}
            break;
        case UPDATE_CITY: 
            return {...state, city: action.payload}
            break;
        case UPDATE_PROP:
            return {...state, propToBeUsedOn: action.payload}
            break;
        case UPDATE_FOUND:
            return {...state, found: action.payload}
            break;
        case UPDATE_AGENT:
            return {...state, realEstateAgent: action.payload}
            break;
        case UPDATE_COST:
            return {...state, cost: action.payload}
            break;
        case UPDATE_DOWNPAYMENT:
            return {...state, downPayment: action.payload}
            break;
        case UPDATE_CREDIT:
            return {...state, credit: action.payload}
            break;
        case UPDATE_HISTORY:
            return {...state, history: action.payload}
            break
        case UPDATE_ADDRESS_1:
            return {...state, addressOne: action.payload}
            break;
        case UPDATE_ADDRESS_2:
            return {...state, addressTwo: action.payload}
            break;
        case UPDATE_ADDRESS_3:
            return {...state, addressThree: action.payload}
            break;
        case UPDATE_FIRST_NAME:
            return {...state, firstName: action.payload}
            break;
        case UPDATE_LAST_NAME:
            return {...state, lastName: action.payload}
            break;
        case UPDATE_EMAIL:
            return {...state, email: action.payload}
            break;
        default: 
            return state
    }
}

// *** action creators *** //

export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType,
    }
}

export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property,
    }
} 

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city,
    }
}

export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop,
    }
} 

export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found,
    }
}

export function updateAgent(agent) {
    return {
        type: UPDATE_AGENT,
        payload: agent,
    }
}

export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost,
    }
}

export function updateDownPayment(downPayment) {
    return {
        type: UPDATE_DOWNPAYMENT,
        payload: downPayment,
    }
}

export function updateCredit(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit,
    }
}

export function updateHistory(history) {
    return {
        type: UPDATE_HISTORY,
        payload: history,
    }
}

export function updateAddress1(address) {
    return {
        type: UPDATE_ADDRESS_1,
        payload: address,
    }
}

export function updateAddress2(address) {
    return {
        type: UPDATE_ADDRESS_2,
        payload: address,
    }
}

export function updateAddress3(address) {
    return {
        type: UPDATE_ADDRESS_3,
        payload: address,
    }
}

export function updateFirstName(name) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: name,
    }
}

export function updateLastName(name) {
    return {
        type: UPDATE_LAST_NAME,
        payload: name,
    }
}

export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email,
    }
}

export default reducer;