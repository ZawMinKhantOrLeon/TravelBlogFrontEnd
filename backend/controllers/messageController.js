const message=require("../dbs/message");

const create= async function(req,res,next){

    let saveMessage= new message(req.body);
    let result= await saveMessage.save();
    console.log(req.body);
    res.status(200).json({
        "status":true,
        "message":"successfullt saved message",
        "result":result,
      })

    console.log("success");

}
module.exports= {
    create
}