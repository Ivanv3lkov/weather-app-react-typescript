export const findNumbers = (input: string): boolean => {
    let pattern = /\d+/g;
    let isNumberExist = input.match(pattern);

    if (isNumberExist) {
        console.log(isNumberExist);
        return true;
    } else {
        return false;
    }
}
