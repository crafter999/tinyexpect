"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = void 0;
function expect(v) {
    return {
        toBe: (a) => {
            if (typeof v === "object") {
                if (JSON.stringify(v) !== JSON.stringify(a)) {
                    console.error(`Expected ${JSON.stringify(v, null, 2)} to be ${JSON.stringify(a, null, 2)}`);
                    throw new Error(`Objects are not equal`);
                }
            }
            else if (v !== a) {
                throw new Error(`Expected ${v} to be ${a}`);
            }
        },
        eitherOr: (values) => {
            if (!values.includes(v)) {
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
        },
        toBeFalsy() {
            if (v) {
                throw new Error(`${v} is not falsy`);
            }
        },
        toBeTruthy() {
            if (!v) {
                throw new Error(`${v} is not truthy`);
            }
        },
        toBeDefined() {
            if (typeof v === "undefined") {
                throw new Error(`${v} is not defined`);
            }
        },
        toContainString(str) {
            if (typeof v !== "string") {
                throw new Error(`${v} is not a string`);
            }
            if (!v.includes(str)) {
                throw new Error(`${v} doesn't contain ${str}`);
            }
        },
        toNotContainString(str) {
            if (typeof v !== "string") {
                throw new Error(`${v} is not a string`);
            }
            if (v.includes(str)) {
                throw new Error(`${v} contains ${str}`);
            }
        }
    };
}
exports.expect = expect;
