const router = require('express').Router()
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Pmx = require('../models/pmx');
const Disrupt = require('../models/disrupt');
const CC = require("../models/codingcollab");
const SS = require("../models/strategystorm");
const Gaming = require("../models/gaming");
const genuid = require('generate-unique-id');
const stripe = require('stripe')('sk_test_cksUS9KcUNgnrItAwFzzXXh1');
const User_f = require("../f_config");
//importing middleware
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/' ,(req, res) => {
    res.render('index', {userinfo:req.user});
  })

router.get("/log", async(req,res)=>{
    res.render('index',{userinfo:req.user});
})

router.get("/login", ensureGuest, async(req,res)=>{
    res.render('login');
})

router.get('/register', ensureGuest, (req, res) => res.render('register'));

router.post('/register',(req,res)=>{
  const {name,email, password, password2,college} = req.body;
  let uidarr=email.split("@");
  let uid=uidarr[0];
  const id = genuid({
    length: 4,
    useLetters: false
  });
  let upass = uid + "" + id + "@udgam-pass";
  uid+=id+"@udgam";
  
  


  let errors = [];
  console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);
  if(!name || !email || !password || !password2) {
      errors.push({msg : "Please fill in all fields"})
  }
  //check if match
  if(password !== password2) {
      errors.push({msg : "passwords dont match"});
  }
  
  //check if password is more than 6 characters
  if(password.length < 6 ) {
      errors.push({msg : 'password atleast 6 characters'})
  }
  if(errors.length > 0 ) {
    console.log(errors);
  res.render('register', {
      errors : errors,
      name : name,
      email : email,
      password : password,
      password2 : password2})
   } else {
      //validation passed
     User.findOne({email : email}).exec((err,user)=>{
      console.log(user);   
      if(user) {
          errors.push({msg: 'email already registered'});
          res.render('register',{errors,name,email,password,password2})  
         } else {
          const newUser = new User({
            googleId : "",  
            displayName : name,
              email : email,
              password : password,
              upass:0,
              uid: uid,
              upassid: upass,
              w1:0,
          w2:0,
          w3:0,
          w4:0,
          w5:0,
          pmx:0,
          disrupt:0,
          dframe:0,
          coding_collab:0,
          strategy_storm:0,
          gaming:0,
          college:college,
          });
  
          //hash password
          bcrypt.genSalt(10,(err,salt)=> 
          bcrypt.hash(newUser.password,salt,
              (err,hash)=> {
                  if(err) throw err;
                      //save pass to hash
                      newUser.password = hash;
                  //save user
                  newUser.save()
                  .then((value)=>{
                     
                     
                      res.redirect('/');
                  })
                  .catch(value=> console.log(value));
                    
              }));
           }
     })
  }

})



router.get("/landingpage", async(req,res)=>{
    res.render('landingpage',{userinfo:req.user})
})

router.get("/islogispass", async(req,res)=>{
        res.render('islogispass',{userinfo:req.user})
})

router.get("/workshop_pass_info", async(req,res)=>{
    res.render('workshop_pass_info',{userinfo:req.user})
})

////Workshops
router.get("/workshop_pass_buy_1", async(req,res)=>{
    res.render('workshop_pass_buy_1',{userinfo:req.user})
})
router.get("/workshop_pass_buy_2", async(req,res)=>{
    res.render('workshop_pass_buy_2',{userinfo:req.user})
})
router.get("/workshop_pass_buy_3", async(req,res)=>{
    res.render('workshop_pass_buy_3',{userinfo:req.user})
})
router.get("/workshop_pass_buy_4", async(req,res)=>{
    res.render('workshop_pass_buy_4',{userinfo:req.user})
})
router.get("/workshop_pass_buy_5", async(req,res)=>{
    res.render('workshop_pass_buy_5',{userinfo:req.user})
})


router.post('/charge_workshop_pass_1', (req, res) => {
    try {
        stripe.customers.create({
            name: req.user.displayName,
            email: req.user.email,
            source: req.body.stripeToken
        }).then(customer => stripe.charges.create({
            amount: 100*100,
            currency: 'inr',
            customer: customer.id,
            description: 'Thank you for buying'
        })).then(() =>

        User.findOneAndUpdate(
            {email : req.user.email} , 
            {w1:1}
        )
            .then((data1) => {
                res.render('workshop_complete' , {userinfo : req.user , workshop_id:1});
            })
            .catch((err1) => {
              console.log(err1);
              res.render('err');
            })

         
         )
            .catch(err => console.log(err))
    } catch (err) { res.send(err) }
})

router.post('/charge_workshop_pass_2', (req, res) => {
    try {
        stripe.customers.create({
            name: req.user.displayName,
            email: req.user.email,
            source: req.body.stripeToken
        }).then(customer => stripe.charges.create({
            amount: 100*100,
            currency: 'inr',
            customer: customer.id,
            description: 'Thank you for buying'
        })).then(() =>

        User.findOneAndUpdate(
            {email : req.user.email} , 
            {w2:1}
        )
            .then((data1) => {
                res.render('workshop_complete' , {userinfo : req.user , workshop_id:2});
            })
            .catch((err1) => {
              console.log(err1);
              res.render('err');
            })

         
         )
            .catch(err => console.log(err))
    } catch (err) { res.send(err) }
})

router.post('/charge_workshop_pass_3', (req, res) => {
    try {
        stripe.customers.create({
            name: req.user.displayName,
            email: req.user.email,
            source: req.body.stripeToken
        }).then(customer => stripe.charges.create({
            amount: 100*100,
            currency: 'inr',
            customer: customer.id,
            description: 'Thank you for buying'
        })).then(() =>

        User.findOneAndUpdate(
            {email : req.user.email} , 
            {w3:1}
        )
            .then((data1) => {
                res.render('workshop_complete' , {userinfo : req.user , workshop_id:3});
            })
            .catch((err1) => {
              console.log(err1);
              res.render('err');
            })

         
         )
            .catch(err => console.log(err))
    } catch (err) { res.send(err) }
})

router.post('/charge_workshop_pass_4', (req, res) => {
    try {
        stripe.customers.create({
            name: req.user.displayName,
            email: req.user.email,
            source: req.body.stripeToken
        }).then(customer => stripe.charges.create({
            amount: 100*100,
            currency: 'inr',
            customer: customer.id,
            description: 'Thank you for buying'
        })).then(() =>

        User.findOneAndUpdate(
            {email : req.user.email} , 
            {w4:1}
        )
            .then((data1) => {
               res.render('workshop_complete' , {userinfo : req.user , workshop_id:4});
            })
            .catch((err1) => {
              console.log(err1);
              res.render('err');
            })

         
         )
            .catch(err => console.log(err))
    } catch (err) { res.send(err) }
})

router.post('/charge_workshop_pass_5', (req, res) => {
    try {
        stripe.customers.create({
            name: req.user.displayName,
            email: req.user.email,
            source: req.body.stripeToken
        }).then(customer => stripe.charges.create({
            amount: 100*100,
            currency: 'inr',
            customer: customer.id,
            description: 'Thank you for buying'
        })).then(() =>

        User.findOneAndUpdate(
            {email : req.user.email} , 
            {w5:1}
        )
            .then((data1) => {
                res.render('workshop_complete' , {userinfo : req.user , workshop_id:5});
            })
            .catch((err1) => {
              console.log(err1);
              res.render('err');
            })

         
         )
            .catch(err => console.log(err))
    } catch (err) { res.send(err) }
})



//////////////////////////////////////////////////////////


//////////////Gaming/////////////////////

router.get("/gaming", async(req,res)=>{
    res.render('gamingform',{userinfo:req.user});
}) 

router.post('/gaming',(req,res)=>{
    const {teamName,mem1name,mem1email, mem1clg, mem2name,mem2email, mem2clg} = req.body;
    
            const newGaming = new Gaming({
                leader:req.user.email,
                teamName: teamName,
                mem1name: mem1name,
                mem1email: mem1email,
                mem1clg: mem1clg,
                mem2name: mem2name,
                mem2email: mem2email,
                mem2clg: mem2clg,

              
            });
            newGaming.save()
                  .then((value)=>{
                    User.findOneAndUpdate(
                        {email : req.user.email} , 
                        {gaming:1}
                    ).then((data1)=>{
                        res.redirect('/');
                    }).catch((err)=>{
                        console.log(err);
                        res.redirect('err.ejs');
                    })
                  })
                  .catch(value=> console.log(value));
    
       
  
  })

//////////////////////////////////////

//////////StrategyStorm////////////////
router.get("/strategystorm", ensureAuth ,async(req,res)=>{
    res.render('ssform',{userinfo:req.user});
}) 

router.post('/strategystorm',(req,res)=>{
    const {teamName,mem1name,mem1email, mem1clg, mem2name,mem2email, mem2clg} = req.body;
    
            const newSS = new SS({
                leader:req.user.email,
                teamName: teamName,
                mem1name: mem1name,
                mem1email: mem1email,
                mem1clg: mem1clg,
                mem2name: mem2name,
                mem2email: mem2email,
                mem2clg: mem2clg,
   
            });
            newSS.save()
                  .then((value)=>{
                    User.findOneAndUpdate(
                        {email : req.user.email} , 
                        {strategy_storm:1}
                    ).then((data1)=>{
                        res.redirect('/');
                    }).catch((err)=>{
                        console.log(err);
                        res.redirect('err.ejs');
                    })
                  })
                  .catch(value=> console.log(value));
    
       
  
  })


  ///////////////////////////

  //////////CodingCollab//////////////

  router.get("/codingcollab", ensureAuth ,async(req,res)=>{
    res.render('ccform',{userinfo:req.user});
}) 

router.post('/codingcollab',(req,res)=>{
    const {teamName,mem1name,mem1email, mem1clg, mem2name,mem2email, mem2clg} = req.body;
    
            const newCC = new CC({
                leader:req.user.email,
                teamName: teamName,
                mem1name: mem1name,
                mem1email: mem1email,
                mem1clg: mem1clg,
                mem2name: mem2name,
                mem2email: mem2email,
                mem2clg: mem2clg,

            });
            newCC.save()
                  .then((value)=>{
                    User.findOneAndUpdate(
                        {email : req.user.email} , 
                        {coding_collab:1}
                    ).then((data1)=>{
                        res.redirect('/');
                    }).catch((err)=>{
                        console.log(err);
                        res.redirect('err.ejs');
                    })
                  })
                  .catch(value=> console.log(value));
    
  })

  /////////////////////////

////////////////PMX///////////////////

router.get("/pmx",ensureAuth, async(req,res)=>{
    res.render('events',{userinfo:req.user});
}) 

router.post('/pmx',(req,res)=>{
    const {teamName,mem1name,mem1email, mem1clg, mem2name,mem2email, mem2clg} = req.body;
    
            const newPmx = new Pmx({
                leader: req.user.email,
                teamName: teamName,
                mem1name: mem1name,
                mem1email: mem1email,
                mem1clg: mem1clg,
                mem2name: mem2name,
                mem2email: mem2email,
                mem2clg: mem2clg,
  
            });
            newPmx.save()
                  .then((value)=>{
                    User.findOneAndUpdate(
                        {email : req.user.email} , 
                        {pmx:1}
                    ).then((data1)=>{
                        res.redirect('/');
                    }).catch((err)=>{
                        console.log(err);
                        res.redirect('err.ejs');
                    })
                  })
                  .catch(value=> console.log(value));

})

/////////////////////////

//////Disrupt///////////////////////

router.get("/disrupt",ensureAuth, async(req,res)=>{
    res.render('disruptform',{userinfo:req.user});
}) 

router.post('/disrupt',(req,res)=>{
    const {teamName,mem1name,mem1email, mem1clg, mem2name,mem2email, mem2clg} = req.body;
    
            const newDisrupt = new Disrupt({
                leader: req.user.email,
                teamName: teamName,
                mem1name: mem1name,
                mem1email: mem1email,
                mem1clg: mem1clg,
                mem2name: mem2name,
                mem2email: mem2email,
                mem2clg: mem2clg, 
            });
            newDisrupt.save()
                  .then((value)=>{  

                    User.findOneAndUpdate(
                        {email : req.user.email} , 
                        {disrupt:1}
                    ).then((data1)=>{
                        res.redirect('/');
                    }).catch((err)=>{
                        console.log(err);
                        res.redirect('err.ejs');
                    })

                      
                  })
                  .catch(value=> console.log(value));
    
       
  
  })

//////////////////////////////

router.get("/event_pass_info", async(req,res)=>{
    res.render('event_pass_info',{userinfo:req.user})
})

router.get('/buy_upass', ensureAuth ,(req,res) => {
	res.render('buy_upass' , {userinfo:req.user});
})

router.post('/charge', (req, res) => {

    const f_id = {
        docName : 'f_id',
        location : 'LA'
    }


    try {
        stripe.customers.create({
            name: req.user.displayName,
            email: req.user.email,
            source: req.body.stripeToken
        }).then(customer => stripe.charges.create({
            amount: 100*100,
            currency: 'inr',
            customer: customer.id,
            description: 'Thank you for buying'
        })).then(() =>


        User.findOneAndUpdate(
            {email : req.user.email} , 
            {upass:1}
        )
            .then((data1) => {

                
                const save = async()=> {
                    const data_f = {
                        "Name":req.user.displayName,
                        "Id":req.user.upassid
                    }

                    await User_f.add({ data_f });
                }

                save()
                .then((data) => {
                    res.render('upass_complete' , {userinfo : req.user});
                })
                .catch((err) => {
                    console.log(err);
                    res.render('err');
                })
               
            })
            .catch((err1) => {
              console.log(err1);
              res.render('err');
            })

         
         )
            .catch(err => console.log(err))
    } catch (err) { res.send(err) }
})


router.get('/dashboard', ensureAuth ,(req,res) => {
	res.render('dashboard' , {userinfo:req.user});
})

router.get('/purchase', ensureAuth ,(req,res) => {
	res.render('./old/buy_upass' , {userinfo:req.user});
})


module.exports=router;