'use strict'

const supertest = require('supertest')
const {server} = require('../src/server')
const mockReq = supertest(server)

describe('API TEST',()=>{
    it('404 on a bad route',async ()=>{
        let res = await mockReq.get('/test_route')
        expect(res.status).toEqual(404)
    })

    it('404 on a bad method', async()=>{
        let res = await mockReq.post('/')
        expect(res.status).toEqual(404)
    })

    it('Create a record using POST', async()=>{
        let res = await mockReq.post('/food').send({"name":"test_food_name"})
        expect(res.status).toEqual(201)
        expect(res.body.record.name).toEqual("test_food_name")
    })

    it('Read a list of records using GET', async()=>{
        let res = await mockReq.get('/food')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual([
            {
                "id": 1,
                "record": {
                    "name": "test_food_name"
                }
            }
        ])
    })

    it('Read a record using GET', async()=>{
        let res = await mockReq.get('/food/1')
        expect(res.status).toEqual(200)
        expect(res.body).toEqual({
            "id": 1,
            "record": {
                "name": "test_food_name"
            }
        })
    })

    it('Update a record using PUT',async()=>{
        let res = await mockReq.put('/food/1').send({"name":"test_food_name_update"})
        expect(res.status).toEqual(200)
        expect(res.body.record.name).toEqual("test_food_name_update")
    })

    it("Delete a record using DELETE",async()=>{
        let res = await mockReq.delete('/food/1')
        expect(res.status).toEqual(200)

        let getResponse = await mockReq.get('/food/1')
        expect(getResponse.body.id).toBeUndefined()
    })
})