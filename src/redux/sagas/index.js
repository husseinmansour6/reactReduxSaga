import { all } from "react-dom/effects"
import userSaga from "./userSaga"

export default function* rootSaga() {
  yield all([userSagas()])
}
