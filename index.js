"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = void 0;
function expect(v) {
    return {
        toBe: (a) => {
            if (v !== a) {
                throw new Error(`Expected ${v} to be ${a}`);
            }
        },
        eitherOr: (values) => {
            let result = false;
            for (let value of values) {
                if (v === value) {
                    result = true;
                    break;
                }
            }
            if (result === false) {
                throw new Error(`Expected ${v} to be either of the following values:` +
                    JSON.stringify(values));
            }
        },
        toBeNumber: () => {
            if (typeof v !== "number") {
                throw new Error(`${v} is not a number`);
            }
        },
        toBeNumberOrParsed: () => {
            if (typeof v === "number") {
                return;
            }
            if (isNaN(Number.parseInt(v))) {
                throw new Error(`${v} cannot be parsed`);
            }
        },
        toBeNumberOr(values) {
            if (values.includes(v)) {
                return;
            }
            expect(v).toBeNumberOrParsed();
        }
    };
}
exports.expect = expect;
