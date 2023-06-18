var promise = new Promise(
    function(resovel , reject){
        // resovel({
        //     name: 'nhan',
        //     age: '23',
        //     gerder: 'male'
        // });
        reject();

    }
);
promise
    .then(function(info){
        console.log(info)
    })
    .catch(function(){
        console.log('Failure')
    })
    .finally(function(){
        console.log("done")
    })