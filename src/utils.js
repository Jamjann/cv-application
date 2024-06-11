import { format, parse } from "date-fns";

const formatDate = (date, oldFormat, newFormat) => {
  return format(parse(date, oldFormat, new Date()), newFormat);
};

export { formatDate };
