export function expect(v: any) {
   return {
       toBe: (a: any) => {
           if (v !== a) {
               throw new Error(`Expected ${v} to be ${a}`)
           }
       },
       eitherOr: (values: any[]) => {
           let result = false
           for (let value of values) {
               if (v === value) {
                   result = true
                   break
               }
           }
           if (result === false) {
               throw new Error(
                   `Expected ${v} to be either of the following values:` +
                   JSON.stringify(values)
               )
           }
       },
       toBeNumber: () => {
           if (typeof v !== "number") {
               throw new Error(`${v} is not a number`)
           }
       },
       toBeNumberOrParsed: () => {
           if (typeof v === "number") {
               return
           }
           if (isNaN(Number.parseInt(v))){
               throw new Error(`${v} cannot be parsed`)
           }
       },
       toBeNumberOr(values:string[]){
           if (values.includes(v)){
               return
           }
           expect(v).toBeNumberOrParsed()
       }
   }
}
