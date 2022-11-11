import {app} from './fb'
import { getAuth } from "firebase/auth";

export const auth = getAuth(app);