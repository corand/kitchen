define(['marionette', 'js/controller'], function(Marionette, Controller) {
   return Marionette.AppRouter.extend({
       //"index" must be a method in AppRouter's controller
       appRoutes: {
           "": "egutegia",
           "egutegia": "egutegia",
           "albisteak": "albisteak",
           "argazkiak": "argazkiak",
           "inaktibo": "inaktibo"
       }
   });
});