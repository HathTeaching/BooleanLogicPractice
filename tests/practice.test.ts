
function problem1(a: boolean): boolean {
  return a || false;
}

//simplify problem 1 as much as possible, it should be equivalent to the original for all inputs
function problem1_ans(a: boolean): boolean {
    return a
}

function problem2(a: boolean): boolean {
    return !a && false;
}

function problem2_ans(a: boolean): boolean {
    return false;
}
function problem3(a: boolean): boolean {
    return a || !a;
}

function problem3_ans(a: boolean): boolean {
    return true;
}
function problem4(a: boolean): boolean {
    return a || a;
}

function problem4_ans(a: boolean): boolean {
    return a;
}
function problem5(a: boolean, b: boolean): boolean {
    return a || (a && b)
}

function problem5_ans(a: boolean, b: boolean): boolean {
    return a

}
function problem6(a: boolean, b: boolean): boolean {
    return a || (!a && b)
}

function problem6_ans(a: boolean, b: boolean): boolean {
    return a || b
}
function problem7(a: boolean, b: boolean): boolean {
    return a && (!a||b)
}

function problem7_ans(a: boolean, b: boolean): boolean {
    return (a && b)
}
function problem8(a: boolean, b: boolean): boolean {
    return (a && b) || (!a&&b)
}

function problem8_ans(a: boolean, b: boolean): boolean {
    return b
}
function problem9(a: boolean, b: boolean): boolean {
    return (!a || !b) &&( !a || b)
}

function problem9_ans(a: boolean, b: boolean): boolean {
    return !a
}
function problem10(a: boolean, b: boolean, c: boolean): boolean {
    return a || b || (a && b)
}

function problem10_ans(a: boolean, b: boolean, c: boolean): boolean {
    return a || b 
}
function problem11(a: boolean, b: boolean, c: boolean): boolean {

    return a || b || (!a && !b)
}

function problem11_ans(a: boolean, b: boolean, c: boolean): boolean {
    return true
}

function problem12(a: boolean, b: boolean, c: boolean): boolean {
    return (a) || (b) || !(a && b)
}

function problem12_ans(a: boolean, b: boolean, c: boolean): boolean {
    return true
}
function problem13(a: boolean): boolean {
    return a || (a && !a)
}

function problem13_ans(a: boolean): boolean {
    return a
}

function problem14(x: boolean, y: boolean): boolean {
    return (x && y) || (x && !y);
}

function problem14_ans(x: boolean, y: boolean): boolean {
    // return (x && y) || (x && !y);
    return x
}

function problem15(x: boolean, y: boolean): boolean {
    return !x || (y && !x);
}

function problem15_ans(x: boolean, y: boolean): boolean {
    return !x 
}

function problem16(x: boolean, y: boolean, w: boolean, z: boolean): boolean {
    return (w || !x || y || !z) && y;
}

function problem16_ans(x: boolean, y: boolean, w: boolean, z: boolean): boolean {
    return y
}
function problem17(x: boolean, y: boolean): boolean {
    return (x || !y) && (x || y);
}

function problem17_ans(x: boolean, y: boolean): boolean {
    // return (x || !y) && (x || y);
    return x
}
function problem18(x: boolean, w: boolean): boolean {
    return w || (w || (w && x))
}

function problem18_ans(x: boolean, w: boolean): boolean {
    // return w || (w || (w && x))
    return w
}
function problem19(x: boolean, y: boolean): boolean {
    return x && (x || (x && y))
}

function problem19_ans(x: boolean, y: boolean): boolean {
    // return x && (x || (x && y))
    return x
}
function problem20(a: boolean): boolean {
    return !(!a || !a);
}

function problem20_ans(a: boolean): boolean {
    // return !(!a || !a);
    return a
}
function problem21(a: boolean): boolean {
    return !(a || !a);
}

function problem21_ans(a: boolean): boolean {
    // return !(a || !a);
    return false
}
function problem22(x: boolean, y: boolean, w: boolean, z: boolean): boolean {
    return w || (w && !x && y && z);
}

function problem22_ans(x: boolean, y: boolean, w: boolean, z: boolean): boolean {
    // return w || (w && !x && y && z);
    return w
}
function problem23(x: boolean, y: boolean, w: boolean, z: boolean): boolean {
    return !w && !(w && x && y && z);
}

function problem23_ans(x: boolean, y: boolean, w: boolean, z: boolean): boolean {
    // return !w && !(w && x && y && z);
    return !w;
}
function problem24(x: boolean, y: boolean, z: boolean): boolean {
    return (x && z) || (!x && z) || (y && z);
}

function problem24_ans(x: boolean, y: boolean, z: boolean): boolean {
    // return (x && z) || (!x && z) || (y && z);
    return z
}
function problem25(x: boolean, y: boolean, z: boolean): boolean {
    return (x || z) && (!x || y) && (y || z);
}

function problem25_ans(x: boolean, y: boolean, z: boolean): boolean {
    // return (x || z) && (!x || y) && (y || z);
    // return (x || z) && (y || (!x && z));
    // return ((y && (x || z))|| ((!x && z) && (x || z)));
    // return y && x || y && z || (z && !x );
    return (y && x) || (z && !x );
}

function problem26(x: boolean, y: boolean, z: boolean): boolean {
    return !x || ! y || (x && y && !z);
}

function problem26_ans(x: boolean, y: boolean, z: boolean): boolean {
    // return !x || ! y || (x && y && !z);
    return !x || ! y || !z;
}

function problem27(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
    return !(!(a || d) && !(!b || c));
}

function problem27_ans(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
    // return !(!(a || d) && !(!b || c));
    // return !(!a && !d && b && !c);
    return a || d || !b || c
}

function problem28(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
    return !((a && b && !c) || (!c && d));
}

function problem28_ans(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
    // return !((a && b && !c) || (!c && d));
    // return !(a && b && !c) && !(!c && d);
    // return (!a || !b || c) && (c || !d);
    return c || ((!a || !b ) && !d);
}

function problem29(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
    return !(!a || d) && !(b || !c) && !(!c || d);
}

function problem29_ans(a: boolean, b: boolean, c: boolean, d: boolean): boolean {
    // return !(!a || d) && !(b || !c) && !(!c || d);
    return a && !b && c && !d;
}

let problems = [
    problem1,
    problem2,
    problem3,
    problem4,
    problem5,
    problem6,
    problem7,
    problem8,
    problem9,
    problem10,
    problem11,
    problem12,
    problem13,
    problem14,
    problem15,
    problem16,
    problem17,
    problem18,
    problem19,
    problem20,
    problem21,
    problem22,
    problem23,
    problem24,
    problem25,
    problem26,
    problem27,
    problem28,
    problem29
]

let problem_ans = [
    problem1_ans,
    problem2_ans,
    problem3_ans,
    problem4_ans,
    problem5_ans,
    problem6_ans,
    problem7_ans,
    problem8_ans,
    problem9_ans,
    problem10_ans,
    problem11_ans,
    problem12_ans,
    problem13_ans,
    problem14_ans,
    problem15_ans,
    problem16_ans,
    problem17_ans,
    problem18_ans,
    problem19_ans,
    problem20_ans,
    problem21_ans,
    problem22_ans,
    problem23_ans,
    problem24_ans,
    problem25_ans,
    problem26_ans,
    problem27_ans,
    problem28_ans,
    problem29_ans
]

function * generateAllBooleanInputs(fn: Function): Generator<boolean[]> {
    let n = fn.length;
    for (let i = 0; i < 2 ** n; i++) {
        let input: boolean[] = []
        for (let j = 0; j < n; j++) {
            input.push(((i >> j) & 1) == 1)
        }
        yield input;
    }
}

describe("Practice", () => {
    it.each(problems.map((fn, index) => ({index: index, name: fn.name, fn})))('$name should be equivalent', (problem) => {
        let ans = problem_ans[problem.index];
        for (let input of generateAllBooleanInputs(problem.fn)) {
            try {
            // @ts-expect-error
            expect(problem.fn(...input)).toBe(ans(...input));
            } catch (e) {
                throw new Error(`Failed on input ${input} for problem ${problem.name}`)
            }
        }
    })
});
