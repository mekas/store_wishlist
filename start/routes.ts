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
