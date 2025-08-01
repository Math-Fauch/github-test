function CalculateSum(a: number, b: number, isString: boolean): number | String {
    return isString ? (a + b).toString() : a + b;
}

function main() {
    console.log(typeof(CalculateSum(1, 2, false)))
    console.log(typeof(CalculateSum(1, 2, true)))
}

main()