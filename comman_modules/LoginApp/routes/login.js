/**
 * Created by ratan_000 on 7/10/2016.
 */

exports.login = function(req,res){
    console.log("request params " + req.param("username")+":"+req.param("password"));

    if(req.param("username") == "ratan" && req.param("password") == "kadam" ){
       req.session.username = req.param("username");  // storing to session
        console.log(req.session.username);
        res.status=200;
        res.send({status:"login sucessfull"});
    }else{
        res.status=400;
        res.send({status:"wrong username password"});
    }
};

exports.cart = function(req,res){

    console.log(req.session.username);
    if(!req.session.username){
        res.redirect('/');
    }else{
        res.status=200;
        res.send({status:200,myData:"sucessfull login"});
    }

};

exports.logout = function(req,res){

    if(req.session.username){
        console.log("session present " +req.session.username);
       req.session.destroy();
        // req.session =null;
        console.log("session destroyed..");
        res.send({status:"session.. logged out"});

       // console.log("session -------------- now  present " + req.session.username);
    }else{
        console.log("session not present .. redirecting to /");
        res.redirect("/");

    }

    /*
      if(! req.session.username){
          res.send({"status":"session not present"});
      }

      console.log("current session username :" + req.session.username);

      req.session.destroy();
      if( ! req.session.username)
      console.log("Session username  destroy successfully :");

    res.send({status:"session destroyed.."});

 */
};


