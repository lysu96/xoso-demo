import dayjs from "dayjs";

export function isValidISODate(s) {
  return dayjs(s, "YYYY-MM-DD", true).isValid();
}

export function toISODate(s) {
  return dayjs(s).format("YYYY-MM-DD");
}
