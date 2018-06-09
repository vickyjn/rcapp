var expect=require('expect');

var {generateMessage}=require('./message');

describe('generateMessage',()=>{
    it('it should generate correct message object',()=>{
   
     var message=generateMessage('kousi','sample text');

     
     expect(message).toMatchObject({
        from:"kousi",
        text:"sample text"
        });
        expect(typeof message.createdAt).toBe('number');
    });
})