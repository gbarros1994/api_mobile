const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        console.log(ongs);
        return response.json({ongs})
    },

    async create(request, response) {
            const { name, email, whatsapp, city, uf } = request.body;
        
            const id = crypto.randomBytes(4).toString('hex');
        
             connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            })
            console.log('criou');
            return response.json({ id });
    }
};