export const INC = "INC";
export const DEC = "DEC";

export const increase = () => ({ type: INC });
export const decrease = () => ({ type: DEC });

export function counter(count = 0, action) {
  switch (action.type) {
    case INC:
      return count + 1;
    case DEC:
      return count - 1;
    default:
      return count;
  }
}

export default counter;
