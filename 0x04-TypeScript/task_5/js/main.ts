interface MajorCredits {
    credits: number;
    brand: unique symbol;
}

interface sumMinorCredits {
    credits: number;
    brand: unique symbol;
}

const sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {credits: subject1.credits + subject2.credits,
        brand: majorCreditsBrand,}
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: minorCreditsBrand,
    };
}