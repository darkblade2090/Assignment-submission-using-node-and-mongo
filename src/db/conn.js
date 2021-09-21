const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Yashdb1:Yash123@cluster0.pyn52.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    
}).then(() => {
    console.log('Connection Successful');
}).catch((e) => {
    console.log('Connection failed');
})