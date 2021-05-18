var Author = require('../models/author');

//Display all list of all Authors

exports.author_list = (req,res)=>{
    res.send('NOT IMPLEMENTED: Author list');
}

// Display detail page for a specific Author.
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};


//Display Author create form on GET
exports.author_create_get = (req,res)=>{
    res.send('NOT IMPLEMENTED: Author create GET');
}

//Display Author create form on POST
exports.author_create_post = (req,res)=>{
    res.send('NOT IMPLEMENTED: Author create POST');
}

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};


//Handle author delete on post 
exports.author_delete_post = (req,res)=>{
    res.send('NOT IMPLEMENTED: Author delete POST');
}

// Display Author update form on GET.
exports.author_update_get = (req,res)=>{
    res.send('NOT IMPLEMENTED: Author update GET');
}

//Handle Author update in POST
exports.author_update_post = (req,res)=>{
    res.send('NOT IMPLEMENTED: Author update POST');
}