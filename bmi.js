function bmiCalc(value) {
    if (value < 18.5) {
            return 'underweight'
        } else if (value > 18.5 & value < 24.5) {
            return 'healthy'
        } else {
            return 'overweight'
        }
}

module.exports ={ bmiCalc }