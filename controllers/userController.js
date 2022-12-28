const data=[{
    name: 'Ali',
    email: "ali@gmsil.com",
    password: "223344",
}]

const homeuser =(req,res)=>{
        res.send('this user page')
    }

    const signup=(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const confirmationpassword= req.body.confirmation_password


    if (name?.length < 3){
        return res.send({
            success: false,
            msg: 'your name so short , please !',
            data: []
        })
    }
    if (
        !String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      )
      return res.send({
          sucess: false,
          msg: "email is invalid",
          data: []
      })
       
      if (password?.length < 6){
        return res.send({
            success: false,
            msg: "your passwprd not enghu",

        })
      }
      if (password != confirmationpassword){
        return res.send({
            success: false,
            msg: "password and  passwordConfirmation are not  matched !",
            data: []
        })
      }

    }

    const login =(req,res)=>{
        const email= req.body.email;
     
        if (
            !String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
          )
          return res.send({
              sucess: false,
              msg: "email is invalid",
              data: []
          })

    }

    const userinfo =(req,res)=>{
        return res.send({
            success: true,
            msg: 'your data',
            data
        })

    }





    module.exports={
        homeuser,
        signup,
        login,
        userinfo
    }
