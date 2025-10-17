/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/home', async ({ view }) => {
  return view.render('pages/home2', {
    // You can pass data to your view here
  })
})

router.get('/cart', async ({ view }) => {
  return view.render('pages/cart_confirmation', {
    // You can pass data to your view here
  })
})

router.get('/userlogin', async ({ view }) => {
  return view.render('pages/login', {
    // You can pass data to your view here
  })
})

router.post('login_response', async({request, view}) => {
  const formData = request.body()
  console.log(request.all());
  console.log(formData);
  console.log(formData.fname);
  const fname = formData.fname;
  const lname = formData.lname;
  return view.render('pages/dashboard',{
    fname,lname
  })
} )

router.post('/submit', async ({ request }) => {
  const formData = request.body()
  console.log('Inside route handler')
  //return view.render('formResponse', { formData })
})
