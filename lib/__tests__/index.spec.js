const mdLink = require("../index.js");

describe("mdLink", () => {
    test("should a function",(done) => {
        expect(typeof mdLink).toBe('function');
        done();
    })
    test('deu certo!', (done) => {
        mdLink('./lib/__tests__/text.md')
        .then((resolve)=>{
            expect(resolve).toEqual([
                {href:"https://nodejs.org/", text:"Node.js"},
                {href:"https://github.com/Laboratoria/curriculum-parser", text:"`curriculum-parser`"}
            ]);
            done();
        })
    })
    test('deu erro!', (done)=>{
        mdLink('.lib/__tests__/tet.md')
        .catch((reject)=>{
            expect(reject.message).toBe("ENOENT: no such file or directory, open '.lib/__tests__/tet.md'")
            done();
        })
    })
})