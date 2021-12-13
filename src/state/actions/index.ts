import { ActionType } from "../action-types";

interface DepositAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | BankruptAction;
