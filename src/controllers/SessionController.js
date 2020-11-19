const connection = require('../database/connection');

module.exports = {
     create(request, response) {
        const { id } = request.body;


        const ong =  connection('ongs').select('*').then(() => {
            console.log('agsygas')
        });
        return ong;
    //     .where('id', id)
    //     .select('name')
    //     .first();

    //     if (!ong) {
    //         return response.status(400).json({
    //             error: 'No ONG found with this ID'
    //         });
    //     } else {
    //         return report.json(ong);
    //     }
    }
}