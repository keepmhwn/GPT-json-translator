import { SHA256 } from "crypto-js";

export default function stringToPrimaryKey(str: string) {
  return SHA256(str).toString();
}
