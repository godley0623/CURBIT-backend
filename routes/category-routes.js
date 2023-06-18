import Category from '../models/category.js';

export function categoryRoutes (app) {



/*----- Get Routes -----*/
app.get('/categories', (req, res) => {
    Category.find({})
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(404).send({status: 404, error: err});
    })
})



}