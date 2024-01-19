import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Link } from 'react-router-dom';

// Tarjeta de credito o debito
const PaymentForms = () => {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

// chekear el tipon de tarjeta 
  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

//   handleFocus
  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

//   Analizar los inputs

  const processPayment = () => {
    console.log('number => ', state.number);
    console.log('name => ', state.name);
    console.log('expiry => ', state.expiry);
    console.log('cvc => ', state.cvc);
    console.log(JSON.stringify(state));
  };

//   const wompi = useWompi()

//   const {error, paymentMethod } = await wompi.createPaymentMethod({
//     type: 'card',
//     card: ElementInternals.getElements(cardElement)
//   })
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-white rounded-md shadow-md p-4">
        <div className="card-body">
          <Cards
            number={state.number}
            name={state.name}
            expiry={state.expiry}
            cvc={state.cvc}
            focused={state.focus}
          />
          <br />
          {/* onSubmit={handleSubmit} */}
          <form >
            {/* <CardElement/> */}
            <div className="form-group">
              <label htmlFor="number">Numero de la tarjeta</label>
              <br />
              <input
                type="text"
                name="number"
                id="number"
                maxLength={16}
                className="form-control"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                maxLength="30"
                className="form-control"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry">Fecha de expiracion</label>
                <br />
                <input
                  type="text"
                  name="expiry"
                  id="expiry"
                  maxLength="4"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cvc">CVC</label>
                <br />
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  maxLength="4"
                  className="form-control"
                  onChange={handleInputChange}
                  onFocus={handleFocusChange}
                />
               
              </div> 
              <br />
            </div>
            <Link
                to='#'>
                <button
                className="btn btn-success btn-block btn-lg bg-green-500 text-white rounded-md"
                onClick={processPayment}
                type="button"
                >
                Pagar
                </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForms;
