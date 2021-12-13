import { Dispatch } from "redux";
import { Action } from "../actions/index";
import { ActionType } from "./../action-types/index";

const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};
const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};
const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};

export { depositMoney, withdrawMoney, bankrupt };
