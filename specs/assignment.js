import chai from 'chai'
const {assert} = chai

let name = ["Jackson","Rob","Jack","Wilson","John"]


describe("Tests on Name list",()=>{
    it("Assert length of name list is 5", ()=>{
        let len = name.length
        assert.equal(len,5,"Length of list is not equal to 5")
    })

    it("Assert names list contains ‘Rob’", ()=>{
        assert.include(name,'Rob',"Rob name not included in name list") 
    })

    it("Filter Name that starts with ‘Jack’ and resultant list is of length 2",()=>{
        let nameJack = name.filter(n => n.startsWith('Jack'))
        console.log(nameJack)
        let jlen = nameJack.length
        assert.equal(jlen,2,"number of names starting with jack are not 2")


    })
})


