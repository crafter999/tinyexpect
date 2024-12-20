export function expect(v: any) {
   return {
       toBe: (a: any) => {
         if (typeof v === "object") {
             if (JSON.stringify(v) !== JSON.stringify(a)) {
                 console.error(`Expected ${JSON.stringify(v,null,2)} to be ${JSON.stringify(a,null,2)}`);
                 throw new Error(`Objects are not equal`);
             }
         } else if (v !== a) {
             throw new Error(`Expected ${v} to be ${a}`);
         }
       },
       toNotBe: (a: any) => {
         if (typeof v === "object"){
            if (JSON.stringify(v) === JSON.stringify(a)) {
                 throw new Error(`Expected ${JSON.stringify(v,null,2)} to not be ${JSON.stringify(a,null,2)}`);
            }
         } else if (v === a) {
             throw new Error(`Expected ${v} to not be ${a}`);
         }
       },
       eitherOr: (values: any[]) => {
           if (!values.includes(v)) {
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
       },
       toBeFalsy(){
           if (v){
                throw new Error(`${v} is not falsy`)
           }
       },
       toBeTruthy(){
           if (!v){
                throw new Error(`${v} is not truthy`)
           }
       },
       toBeDefined(){
           if (typeof v === "undefined"){
                throw new Error(`${v} is not defined`)
           }
       },
       toContainString(str:string){
           if (typeof v !== "string"){
               throw new Error(`${v} is not a string`)
           }

           if (!(v as string).includes(str)){
               throw new Error(`${v} doesn't contain ${str}`)
           }
       },
       toNotContainString(str:string){
        if (typeof v !== "string"){
            throw new Error(`${v} is not a string`)
        }

        if ((v as string).includes(str)){
            throw new Error(`${v} contains ${str}`)
        }
    }
   }
}
