define(['js/app', 'backbone', 'marionette', 'js/views/Menua/MenuaView', 'js/views/Egutegia/EgutegiaView', 'js/views/Albisteak/AlbisteakView', 'js/views/Argazkiak/ArgazkiakView', 'js/views/Argazkiak/ArgazkiCollection', 'js/views/Albisteak/AlbisteCollection'],
    function (App, Backbone, Marionette, MenuaView, EgutegiaView, AlbisteakView, ArgazkiakView,ArgazkiCollection, AlbisteCollection) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            //App.headerRegion.show(new HeaderView());
            App.sidebarRegion.show(new MenuaView());
        },
        clear: function(){
            clearTimeout(this.effectTimeout);
            clearTimeout(this.argazki_carousel);
            clearTimeout(this.albiste_carousel);
            $(".nav-pills li").removeClass("active");
        },
        //gets mapped to in AppRouter's appRoutes
        egutegia:function () {
            this.clear();
            $("#egutegia").addClass("active");
            App.mainRegion.show(new EgutegiaView());
        },

        albisteak: function() {
            this.clear();
            $("#albisteak").addClass("active");
            var albiste_collection,
                albiste_view;

            albiste_collection = new AlbisteCollection();
            albiste_collection.fetch({
                reset: true,                
                success: function(){
                    albiste_collection.initialize();
                    albiste_view = new AlbisteakView({ model: albiste_collection.getElement() });
                    App.mainRegion.show(albiste_view);
                },
                error: function(){
                    alert("Errorea albisteen informazioa kargatzerakoan");
                }
            });
            
            this.albiste_carousel = setInterval(function(){
                albiste_view.hide();
                this.effectTimeout = setTimeout(function(){
                    albiste_view = new AlbisteakView({ model: albiste_collection.getElement() });
                    App.mainRegion.show(albiste_view);
                },800);
            },20000);
        },

        argazkiak: function() {
            this.clear();
            $("#argazkiak").addClass("active");
            var argazki_collection,
                argazki_view;

            argazki_collection = new ArgazkiCollection();
            argazki_collection.fetch({
                reset: true,                
                success: function(){
                    argazki_collection.initialize();
                    argazki_view = new ArgazkiakView({ model: argazki_collection.getElement() });
                    App.mainRegion.show(argazki_view);
                },
                error: function(){
                    alert("Errorea argazkien informazioa kargatzerakoan");
                }
            });
            this.argazki_carousel = setInterval(function(){
                argazki_view.hide();
                this.effectTimeout = setTimeout(function(){
                    argazki_view = new ArgazkiakView({ model: argazki_collection.getElement() });
                    App.mainRegion.show(argazki_view);
                },800);
            },20000);
            
        }
    });
});